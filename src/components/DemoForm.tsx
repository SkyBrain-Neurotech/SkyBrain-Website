import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Mail, User, Phone, Calendar, Loader2 } from 'lucide-react';

interface DemoFormProps {
  onSuccess?: () => void;
  className?: string;
}

declare global {
  interface Window {
    executeRecaptcha: (action: string) => Promise<string>;
    trackFormSubmission: (formName: string) => void;
    trackDemoClick: (source: string) => void;
  }
}

const DemoForm: React.FC<DemoFormProps> = ({ onSuccess, className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'personal',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Execute reCAPTCHA v3
      let recaptchaToken = '';
      if (typeof window !== 'undefined' && window.executeRecaptcha) {
        recaptchaToken = await window.executeRecaptcha('demo_request');
      }

      // Simulate form submission (replace with actual API call)
      const submissionData = {
        ...formData,
        recaptchaToken,
        timestamp: new Date().toISOString(),
        source: 'website_demo_form'
      };

      console.log('Demo form submission:', submissionData);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Track successful form submission
      if (typeof window !== 'undefined' && window.trackFormSubmission) {
        window.trackFormSubmission('demo_request');
      }

      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: 'personal',
        message: ''
      });

      // Call success callback
      if (onSuccess) {
        onSuccess();
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoClick = () => {
    if (typeof window !== 'undefined' && window.trackDemoClick) {
      window.trackDemoClick('demo_form');
    }
  };

  return (
    <div className={`glass-card rounded-2xl p-8 border border-neural-blue/30 ${className}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="p-3 bg-neural-blue/20 rounded-xl">
            <Brain className="h-8 w-8 text-neural-blue" />
          </div>
          <h2 className="text-2xl font-bold text-ghost-white font-orbitron">
            Request Demo
          </h2>
        </div>
        <p className="text-neural-gray">
          Experience SkyBrain's neurotechnology firsthand. Book your personalized demo today.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-xl">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-400 font-semibold">
              Demo request submitted successfully! We'll contact you within 24 hours.
            </span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-xl">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-red-400 font-semibold">
              Something went wrong. Please try again or contact us directly.
            </span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-ghost-white mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neural-gray" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-shadow-black/50 border border-neural-blue/30 rounded-xl text-ghost-white placeholder-neural-gray focus:border-neural-blue focus:outline-none focus:ring-2 focus:ring-neural-blue/20"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-ghost-white mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neural-gray" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-shadow-black/50 border border-neural-blue/30 rounded-xl text-ghost-white placeholder-neural-gray focus:border-neural-blue focus:outline-none focus:ring-2 focus:ring-neural-blue/20"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
        </div>

        {/* Phone and Company Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-ghost-white mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neural-gray" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-shadow-black/50 border border-neural-blue/30 rounded-xl text-ghost-white placeholder-neural-gray focus:border-neural-blue focus:outline-none focus:ring-2 focus:ring-neural-blue/20"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-ghost-white mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-shadow-black/50 border border-neural-blue/30 rounded-xl text-ghost-white placeholder-neural-gray focus:border-neural-blue focus:outline-none focus:ring-2 focus:ring-neural-blue/20"
              placeholder="Your company or organization"
            />
          </div>
        </div>

        {/* Interest Level */}
        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-ghost-white mb-2">
            Primary Interest *
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-shadow-black/50 border border-neural-blue/30 rounded-xl text-ghost-white focus:border-neural-blue focus:outline-none focus:ring-2 focus:ring-neural-blue/20"
          >
            <option value="personal">Personal Wellness</option>
            <option value="research">Research Collaboration</option>
            <option value="clinical">Clinical Applications</option>
            <option value="enterprise">Enterprise Solutions</option>
            <option value="investment">Investment Opportunity</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-ghost-white mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 bg-shadow-black/50 border border-neural-blue/30 rounded-xl text-ghost-white placeholder-neural-gray focus:border-neural-blue focus:outline-none focus:ring-2 focus:ring-neural-blue/20 resize-none"
            placeholder="Tell us about your specific interests or questions..."
          />
        </div>

        {/* reCAPTCHA Notice */}
        <div className="text-xs text-neural-gray">
          This form is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-neural-blue hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-neural-blue hover:underline">
            Terms of Service
          </a>{' '}
          apply.
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          onClick={handleDemoClick}
          className="w-full neural-gradient text-white font-bold py-4 text-lg rounded-xl group transition-all transform hover:scale-105 font-orbitron relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="flex items-center justify-center space-x-3">
            {isSubmitting ? (
              <>
                <Loader2 className="h-6 w-6 animate-spin" style={{ animationDuration: '1s' }} />
                <span>Submitting Request...</span>
              </>
            ) : (
              <>
                <Calendar className="h-6 w-6 synced-hover-rotate" />
                <span>Request Demo Access</span>
              </>
            )}
          </div>
        </Button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 pt-6 border-t border-neural-blue/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-neural-blue font-bold">30 Minutes</div>
            <div className="text-sm text-neural-gray">Demo Duration</div>
          </div>
          <div>
            <div className="text-neural-blue font-bold">Live EEG</div>
            <div className="text-sm text-neural-gray">Real-time Brain Data</div>
          </div>
          <div>
            <div className="text-neural-blue font-bold">Q&A Session</div>
            <div className="text-sm text-neural-gray">Expert Discussion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;