import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, Upload, Link as LinkIcon, ChevronRight, 
  ArrowLeft, X, Handshake, TrendingUp, Lightbulb, 
  Users, Award, Target 
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    network: '',
    videoLink: '',
    videoFile: null as File | null,
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Video validation (optional but recommended)
    if (formData.videoFile && formData.videoFile.size > 100 * 1024 * 1024) {
      errors.video = 'Video size should be less than 100MB';
    }

    // Agreement validation
    if (!formData.agreeTerms) {
      errors.agreeTerms = 'Please agree to the terms to continue';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setFieldErrors({});

    // Validate form
    if (!validateForm()) {
      setSubmitError('Please fix the errors below before submitting');
      setTimeout(() => {
        const firstError = document.querySelector('.error-message');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data for submission
      const submitData = new FormData();
      
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('location', formData.location);
      submitData.append('network', formData.network);
      submitData.append('experience', formData.experience);
      
      if (formData.videoFile) submitData.append('video', formData.videoFile);
      if (formData.videoLink) submitData.append('videoLink', formData.videoLink);

      // TODO: Replace with actual API endpoint
      // await fetch('/api/partners/submit', {
      //   method: 'POST',
      //   body: submitData
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Partner Application Submitted:', {
        ...formData,
        videoName: formData.videoFile?.name
      });

      // Success state
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        network: '',
        videoLink: '',
        videoFile: null,
        agreeTerms: false
      });

      // Scroll to success message
      setTimeout(() => {
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Something went wrong. Please try again or contact us directly at hello@solwaste.co');
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Partner With Solwaste - Affiliation Program",
    "description": "Join Solwaste's partner network. Learn, represent, earn, and create impact in organic waste management.",
  };

  return (
    <main className="bg-cream">
      <SEO 
        title="Become a Partner | Solwaste Affiliation Program"
        description="Join Solwaste as an affiliation partner. Learn waste solutions, build relationships, earn commissions, and create environmental impact. No inventory, no logistics - we handle the heavy lifting."
        keywords="Solwaste partner, waste management partner, sustainability partner, affiliation program, commission based, green business opportunity, environmental consulting"
        ogImage="https://solwaste.co/og-partner.png"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-moss via-moss/95 to-charcoal py-12 md:py-16">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-google-sans font-bold mb-4 text-cream leading-tight">
              Partner With Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/90 font-light mb-6 max-w-3xl mx-auto">
              Help us bring real waste solutions to more people
            </p>
            <p className="text-sm md:text-base text-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              We make composting machines. You know people who need them. 
              Let's work together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gold text-charcoal rounded-xl font-bold hover:bg-gold/90 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              Apply Now <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For (Restored to Original Design) */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-moss/10 to-gold/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-google-sans font-bold text-charcoal mb-4">
              Is This You?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'Sustainability Enthusiasts',
              'Students',
              'Consultants',
              'Housing Society Connectors',
              'Sales Professionals',
              'Environmental Activists',
              'Freelancers',
              'Entrepreneurs'
            ].map((profile, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(44, 62, 44, 0.1)' }}
                className="px-5 py-2 bg-white rounded-full border-2 border-moss/20 text-charcoal text-sm font-medium hover:border-moss/40 transition-all cursor-pointer"
              >
                {profile}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits – Full Screen Cinematic Section */}
<section className="relative min-h-screen w-full overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source
      src="/partnerBackground.mp4"
      type="video/mp4"
    />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />

  {/* Content */}
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="container mx-auto px-6 lg:px-12">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-14"
      >
        <span className="text-moss uppercase tracking-[0.4em] text-xs font-semibold">
          Partner Benefits
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-google-sans font-bold text-white mt-4 leading-tight">
          A Partnership <br className="hidden sm:block" />
          That Actually Makes Sense
        </h2>

        <p className="text-white/70 mt-5 text-base sm:text-lg">
          No fluff. No empty promises. Just a clean, scalable way to earn while
          contributing to real environmental impact.
        </p>
      </motion.div>

      {/* Benefits – Editorial Layout */}
      <div className="grid md:grid-cols-2 gap-y-10 gap-x-16 max-w-5xl">
        {[
          {
            title: 'Zero inventory responsibility',
            desc: 'Manufacturing, logistics, installation, warranties — handled end to end by us.'
          },
          {
            title: 'Straightforward earnings',
            desc: 'Bring a deal. Close it. Get paid. Transparent commissions with no fine print.'
          },
          {
            title: 'Real sustainability exposure',
            desc: 'Understand how organic waste systems actually work, beyond surface-level claims.'
          },
          {
            title: 'Proven deployments',
            desc: 'Already active in housing societies, corporates, and institutions across cities.'
          },
          {
            title: 'Training & backup',
            desc: 'Structured onboarding, pitch support, demos, and technical assistance when needed.'
          },
          {
            title: 'Growth beyond referrals',
            desc: 'Top partners move into city ownership, strategic roles, and leadership tracks.'
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative pl-6"
          >
            {/* Accent Line */}
            <span className="absolute left-0 top-1 h-full w-[2px] bg-moss/60" />

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Application Form */}
      <section id="application-form" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-google-sans font-bold text-charcoal mb-3">
                Apply Here
              </h2>
            </div>

            {/* Success Message */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-moss/10 border-2 border-moss rounded-xl p-6 mb-8"
              >
                <div className="flex items-start gap-3">
                  <Check size={24} className="text-moss flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-charcoal mb-2">Application Submitted Successfully!</h3>
                    <p className="text-sm text-charcoal/80">
                      Thank you for your interest in partnering with Solwaste. We've received your application and will get back to you within 48 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-2 border-red-400 rounded-xl p-6 mb-8"
              >
                <div className="flex items-start gap-3">
                  <X size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Submission Error</h3>
                    <p className="text-sm text-red-800">{submitError}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 border-2 border-moss/10 shadow-2xl">
              {/* Step 1: Personal Details */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-6 pb-3 border-b-2 border-gold/20">
                  Step 1: Personal Details
                </h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if (fieldErrors.email) setFieldErrors(prev => ({ ...prev, email: '' }));
                        }}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors bg-cream/30 ${
                          fieldErrors.email ? 'border-red-400 focus:border-red-500' : 'border-moss/20 focus:border-moss'
                        }`}
                        placeholder="your@email.com"
                      />
                      {fieldErrors.email && (
                        <p className="error-message text-sm text-red-600 mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({...formData, phone: e.target.value});
                          if (fieldErrors.phone) setFieldErrors(prev => ({ ...prev, phone: '' }));
                        }}
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors bg-cream/30 ${
                          fieldErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-moss/20 focus:border-moss'
                        }`}
                        placeholder="+91 XXXXX XXXXX"
                      />
                      {fieldErrors.phone && (
                        <p className="error-message text-sm text-red-600 mt-1">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Location (City, State) *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                      placeholder="Mumbai, Maharashtra"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Experience & Network */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-6 pb-3 border-b-2 border-gold/20">
                  Step 2: Experience & Network
                </h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Your Network Type *</label>
                    <select
                      required
                      value={formData.network}
                      onChange={(e) => setFormData({...formData, network: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                    >
                      <option value="">Select your network type</option>
                      <option value="housing-societies">Housing Societies</option>
                      <option value="corporate">Corporate Offices</option>
                      <option value="institutions">Educational Institutions</option>
                      <option value="hospitality">Hotels & Restaurants</option>
                      <option value="mixed">Mixed Network</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Brief Background *</label>
                    <textarea
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30 resize-none"
                      placeholder="Tell us about your experience, network, and why you want to partner with Solwaste..."
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Video Introduction */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-6 pb-3 border-b-2 border-gold/20">
                  Step 3: Video Introduction
                </h3>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2 flex items-center gap-2">
                      <LinkIcon size={16} />
                      Paste YouTube/Drive Link Here
                    </label>
                    <input
                      type="url"
                      value={formData.videoLink}
                      onChange={(e) => setFormData({...formData, videoLink: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                      placeholder="https://youtube.com/... or https://drive.google.com/..."
                    />
                  </div>
                  <div className="text-center text-charcoal/50 text-sm">OR</div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                      <Upload size={16} />
                      Upload Video File
                    </label>
                    <div className="border-2 border-dashed border-moss/30 rounded-xl p-8 bg-moss/5 hover:bg-moss/10 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setFormData({...formData, videoFile: e.target.files?.[0] || null})}
                        className="hidden"
                        id="video-upload"
                      />
                      <label htmlFor="video-upload" className="cursor-pointer text-center block">
                        <Upload size={40} className="mx-auto text-moss mb-3" />
                        <p className="text-charcoal font-medium mb-1">
                          {formData.videoFile ? formData.videoFile.name : 'Click or drag to upload'}
                        </p>
                        <p className="text-xs text-charcoal/60">Max 50MB • MP4, MOV, AVI</p>
                      </label>
                    </div>
                    <p className="text-xs text-charcoal/60 mt-2">
                      A 1-2 min video helps us understand who you are and how you communicate. Not required, but helpful.
                    </p>
                    {fieldErrors.video && (
                      <p className="error-message text-sm text-red-600 mt-2">{fieldErrors.video}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 4: Agreement */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-charcoal mb-6 pb-3 border-b-2 border-gold/20">
                  Step 4: Transparency & Agreement
                </h3>
                <div className="bg-cream/50 rounded-xl p-6 mb-6 border border-moss/10">
                  <ul className="space-y-3 text-charcoal/80">
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-moss mt-0.5 flex-shrink-0" />
                      <span>Performance driven: Earnings based on successful deals closed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-moss mt-0.5 flex-shrink-0" />
                      <span>Commission based: Transparent payout structure shared during onboarding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check size={20} className="text-moss mt-0.5 flex-shrink-0" />
                      <span>Solwaste manages: Product support, warranty, and after-sales service</span>
                    </li>
                  </ul>
                </div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) => {
                      setFormData({...formData, agreeTerms: e.target.checked});
                      if (fieldErrors.agreeTerms) setFieldErrors(prev => ({ ...prev, agreeTerms: '' }));
                    }}
                    className="mt-1 w-5 h-5 rounded border-moss/30 text-moss focus:ring-moss"
                  />
                  <span className="text-sm text-charcoal/80 group-hover:text-charcoal transition-colors">
                    I agree to the terms above and understand this is a performance-based partnership *
                  </span>
                </label>
                {fieldErrors.agreeTerms && (
                  <p className="error-message text-sm text-red-600 mt-2">{fieldErrors.agreeTerms}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-moss text-cream rounded-xl font-bold text-lg hover:bg-moss/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Submit Application'}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gold"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-google-sans font-bold text-charcoal mb-3">
              What happens after you apply?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { step: '1', title: 'We review your application', desc: 'Usually takes us 48 hours max' },
                { step: '2', title: 'Quick call', desc: 'If it looks good, we\'ll schedule a chat' },
                { step: '3', title: 'Get started', desc: 'Training materials and everything you need to begin' }
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center text-center flex-1"
                  >
                    <div className="w-16 h-16 rounded-full bg-moss text-cream flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h4 className="text-xl font-bold text-charcoal mb-2">{item.title}</h4>
                    <p className="text-charcoal/70">{item.desc}</p>
                  </motion.div>
                  {i < 2 && (
                    <ChevronRight size={32} className="text-moss/30 hidden md:block flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PartnerPage;