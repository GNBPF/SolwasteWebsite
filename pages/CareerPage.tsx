import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, Upload, Link as LinkIcon, ChevronRight, 
  Briefcase, Heart, Users as UsersIcon,
  Target, Zap, Globe, X
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const CareerPage = () => {
  const [formData, setFormData] = useState({
    applicationType: '',
    role: '',
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    photo: null as File | null,
    resume: null as File | null,
    resumeLink: '',
    videoFile: null as File | null,
    videoLink: '',
    whySolwaste: '',
    whySustainability: '',
    availability: '',
    commitment: '',
    understandTerms: false,
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleApplicationTypeChange = (type: string) => {
    setFormData({
      ...formData,
      applicationType: type
    });
    // Clear field error when user makes changes
    if (fieldErrors.applicationType) {
      setFieldErrors(prev => ({ ...prev, applicationType: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Application type validation
    if (!formData.applicationType) {
      errors.applicationType = 'Please select an application type';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation (basic format check)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Photo validation
    if (!formData.photo) {
      errors.photo = 'Please upload your photograph';
    } else if (formData.photo.size > 5 * 1024 * 1024) {
      errors.photo = 'Photo size should be less than 5MB';
    }

    // Resume validation
    if (!formData.resume && !formData.resumeLink) {
      errors.resume = 'Please upload your resume or provide a link';
    } else if (formData.resume && formData.resume.size > 10 * 1024 * 1024) {
      errors.resume = 'Resume size should be less than 10MB';
    }

    // Video validation (mandatory)
    if (!formData.videoFile && !formData.videoLink) {
      errors.video = 'Video introduction is mandatory. Please upload a video or provide a link';
    } else if (formData.videoFile && formData.videoFile.size > 100 * 1024 * 1024) {
      errors.video = 'Video size should be less than 100MB';
    }

    // Intern/Volunteer terms validation
    if ((formData.applicationType === 'internship' || formData.applicationType === 'volunteer') && !formData.understandTerms) {
      errors.understandTerms = 'Please agree to the terms for internship/volunteer positions';
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
      // Scroll to first error
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
      
      // Add all text fields
      submitData.append('applicationType', formData.applicationType);
      submitData.append('role', formData.role);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('location', formData.location);
      submitData.append('linkedin', formData.linkedin);
      submitData.append('whySolwaste', formData.whySolwaste);
      submitData.append('whySustainability', formData.whySustainability);
      submitData.append('availability', formData.availability);
      submitData.append('commitment', formData.commitment);
      submitData.append('additionalInfo', formData.additionalInfo);
      
      // Add file uploads
      if (formData.photo) submitData.append('photo', formData.photo);
      if (formData.resume) submitData.append('resume', formData.resume);
      if (formData.videoFile) submitData.append('video', formData.videoFile);
      
      // Add links
      if (formData.resumeLink) submitData.append('resumeLink', formData.resumeLink);
      if (formData.videoLink) submitData.append('videoLink', formData.videoLink);

      // TODO: Replace with actual API endpoint
      // await fetch('/api/careers/submit', {
      //   method: 'POST',
      //   body: submitData
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Career Application Submitted:', {
        ...formData,
        photoName: formData.photo?.name,
        resumeName: formData.resume?.name,
        videoName: formData.videoFile?.name
      });

      // Success state
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        applicationType: '',
        role: '',
        name: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        photo: null,
        resume: null,
        resumeLink: '',
        videoFile: null,
        videoLink: '',
        whySolwaste: '',
        whySustainability: '',
        availability: '',
        commitment: '',
        understandTerms: false,
        additionalInfo: ''
      });

      // Scroll to success message
      setTimeout(() => {
        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Something went wrong. Please try again or contact us directly at people@solwaste.co');
    } finally {
      setIsSubmitting(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Join Solwaste - Careers, Internships & Volunteering",
    "description": "Work with Solwaste. Jobs, internships, and volunteer opportunities in sustainability and waste management.",
  };

  return (
    <main className="bg-cream">
      <SEO 
        title="Careers at Solwaste | Jobs, Internships & Volunteering"
        description="Join Solwaste's mission to redesign how cities think about waste. Opportunities in sustainability, operations, tech, design, and more."
        keywords="Solwaste careers, sustainability jobs, environmental jobs, climate action, internships, volunteering, green jobs"
        ogImage="https://solwaste.co/og-careers.png"
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
              Join Solwaste!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cream/90 font-light mb-6 max-w-3xl mx-auto">
              Careers | Internships | Volunteering
            </p>
            <p className="text-sm md:text-base text-cream/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              We're not just managing waste. We're redesigning how cities think about it.<br/>
              If sustainability excites you, climate action matters to you, and you want real-world exposure (not just certificates), you're in the right place.
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

      {/* What We're Looking For */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-moss/10 to-gold/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-google-sans font-bold text-charcoal mb-4">
              Open Roles
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'Sustainability Research',
              'Operations',
              'Sales & Partnerships',
              'Marketing & Content',
              'Design',
              'Technology',
              'Data & Impact',
              'Community Engagement',
              'Business Development'
            ].map((role, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(44, 62, 44, 0.1)' }}
                className="px-5 py-2 bg-white rounded-full border-2 border-moss/20 text-charcoal text-sm font-medium hover:border-moss/40 transition-all cursor-pointer"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us – Cinematic Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/partnerBackground.mp4" type="video/mp4" />
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
                Why Join Us
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-google-sans font-bold text-white mt-4 leading-tight">
                Work That Actually<br className="hidden sm:block" />
                Matters
              </h2>

              <p className="text-white/70 mt-5 text-base sm:text-lg">
                No greenwashing. No vanity projects. Just real impact, real learning, and work you can be proud of.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-y-10 gap-x-16 max-w-5xl">
              {[
                {
                  title: 'Real projects, real impact',
                  desc: 'Work on live deployments with cities, corporates, and communities - not just PowerPoint decks.'
                },
                {
                  title: 'Learn by doing',
                  desc: 'Hands-on exposure to waste management, sustainability consulting, and climate solutions.'
                },
                {
                  title: 'Ownership from day one',
                  desc: 'You own your work. No micromanagement. Just clear goals and the freedom to execute.'
                },
                {
                  title: 'Build your portfolio',
                  desc: 'Whether it\'s case studies, campaigns, or field reports - leave with work you can showcase.'
                },
                {
                  title: 'Cross-functional learning',
                  desc: 'Collaborate across teams - operations, tech, sales, design. See how everything connects.'
                },
                {
                  title: 'Growth mindset culture',
                  desc: 'We value hustle, curiosity, and grit. Top performers move fast here.'
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
              <p className="text-charcoal/70 text-sm">
                Single application for Jobs, Internships, and Volunteer roles
              </p>
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
                      Thank you for applying. We've received your application and will review it within the next few days. 
                      You'll hear from us via email or WhatsApp if we'd like to move forward.
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
              
              {/* Application Type */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Application Type
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">
                  Help us understand how you want to associate with Solwaste
                </p>
                {fieldErrors.applicationType && (
                  <p className="error-message text-sm text-red-600 mb-3">{fieldErrors.applicationType}</p>
                )}
                <div className="space-y-3">
                  {[
                    { value: 'fulltime', label: 'Full-Time Job' },
                    { value: 'internship', label: 'Internship' },
                    { value: 'volunteer', label: 'Volunteer (Project / Campaign / Field / Digital)' }
                  ].map((type) => (
                    <label key={type.value} className="flex items-center gap-3 cursor-pointer group p-3 rounded-lg hover:bg-moss/5 transition-colors">
                      <input
                        type="radio"
                        name="applicationType"
                        value={type.value}
                        checked={formData.applicationType === type.value}
                        onChange={() => handleApplicationTypeChange(type.value)}
                        className="w-5 h-5 border-moss/30 text-moss focus:ring-moss"
                      />
                      <span className="text-charcoal/80 group-hover:text-charcoal font-medium">
                        {type.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Role Selection */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Role Selection
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">
                  Choose what excites you most. Don't overthink it — passion &gt; perfection.
                </p>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Preferred Department / Role *
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                >
                  <option value="">Select a role</option>
                  <option value="sustainability">Sustainability & Environmental Research</option>
                  <option value="operations">Operations & On-Ground Projects</option>
                  <option value="sales">Sales & Partnerships</option>
                  <option value="marketing">Marketing, Content & Social Media</option>
                  <option value="design">Design (Graphic / Motion / UI)</option>
                  <option value="technology">Technology & Automation</option>
                  <option value="data">Data, Impact & Reporting</option>
                  <option value="community">Community Engagement & Campaigns</option>
                  <option value="business">Business Development & Strategy</option>
                  <option value="multiple">Open to Multiple Roles</option>
                </select>
              </div>

              {/* Personal Details */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Personal Details
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">Let's start with the basics</p>
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
                        placeholder="WhatsApp preferred"
                      />
                      {fieldErrors.phone && (
                        <p className="error-message text-sm text-red-600 mt-1">{fieldErrors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">Current City & Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                      placeholder="Mumbai, India"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                    <p className="text-xs text-charcoal/60 mt-1">Optional but recommended</p>
                  </div>
                </div>
              </div>

              {/* Your Snapshot */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Your Snapshot
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">Put a face to the passion</p>
                <label className="block text-sm font-semibold text-charcoal mb-3">
                  Upload a Recent Photograph *
                </label>
                <div className={`border-2 border-dashed rounded-xl p-8 bg-moss/5 hover:bg-moss/10 transition-colors cursor-pointer ${
                  fieldErrors.photo ? 'border-red-400' : 'border-moss/30'
                }`}>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => {
                      setFormData({...formData, photo: e.target.files?.[0] || null});
                      if (fieldErrors.photo) setFieldErrors(prev => ({ ...prev, photo: '' }));
                    }}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer text-center block">
                    <Upload size={40} className="mx-auto text-moss mb-3" />
                    <p className="text-charcoal font-medium mb-1">
                      {formData.photo ? formData.photo.name : 'Click to upload your photo'}
                    </p>
                    <p className="text-xs text-charcoal/60">Clear headshot • Professional or casual is fine</p>
                  </label>
                </div>
                {fieldErrors.photo && (
                  <p className="error-message text-sm text-red-600 mt-2">{fieldErrors.photo}</p>
                )}
              </div>

              {/* Resume */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Resume / Profile
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">Show us what you've done so far</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-3">
                      Upload Updated CV / Resume *
                    </label>
                    <div className="border-2 border-dashed border-moss/30 rounded-xl p-8 bg-moss/5 hover:bg-moss/10 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFormData({...formData, resume: e.target.files?.[0] || null})}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer text-center block">
                        <Upload size={40} className="mx-auto text-moss mb-3" />
                        <p className="text-charcoal font-medium mb-1">
                          {formData.resume ? formData.resume.name : 'Click to upload resume'}
                        </p>
                        <p className="text-xs text-charcoal/60">PDF or DOC format</p>
                      </label>
                    </div>
                  </div>
                  <div className="text-center text-charcoal/50 text-sm">OR</div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2 flex items-center gap-2">
                      <LinkIcon size={16} />
                      Share Google Drive / Portfolio Link
                    </label>
                    <input
                      type="url"
                      value={formData.resumeLink}
                      onChange={(e) => setFormData({...formData, resumeLink: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                      placeholder="https://drive.google.com/..."
                    />
                    <p className="text-xs text-charcoal/60 mt-2">
                      ⚠️ Ensure view access is given to: <strong>people@solwaste.co</strong>
                    </p>
                  </div>
                </div>
                {fieldErrors.resume && (
                  <p className="error-message text-sm text-red-600 mt-2">{fieldErrors.resume}</p>
                )}
              </div>

              {/* Video Introduction */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Video Introduction (Mandatory)
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">
                  This matters more than your resume
                </p>
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-5">
                  <p className="text-sm text-charcoal/80 font-medium mb-2">
                    Upload a 30–45 second video introducing yourself
                  </p>
                  <p className="text-xs text-charcoal/70 mb-2">
                    (Phone-recorded videos are absolutely okay)
                  </p>
                  <ul className="text-xs text-charcoal/70 space-y-1 ml-4">
                    <li>• Your name & background (in one line)</li>
                    <li>• Why you want to work or associate with Solwaste</li>
                    <li>• What excites you about environment, sustainability, or climate action</li>
                  </ul>
                </div>
                <div className="space-y-5">
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
                          {formData.videoFile ? formData.videoFile.name : 'Click to upload video'}
                        </p>
                        <p className="text-xs text-charcoal/60">MP4 / MOV format</p>
                      </label>
                    </div>
                  </div>
                  <div className="text-center text-charcoal/50 text-sm">OR</div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2 flex items-center gap-2">
                      <LinkIcon size={16} />
                      Share Google Drive / YouTube Link
                    </label>
                    <input
                      type="url"
                      value={formData.videoLink}
                      onChange={(e) => setFormData({...formData, videoLink: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                      placeholder="https://youtube.com/... or https://drive.google.com/..."
                    />
                    <p className="text-xs text-charcoal/60 mt-2">
                      Make sure access is given to: <strong>people@solwaste.co</strong>
                    </p>
                  </div>
                </div>
                {fieldErrors.video && (
                  <p className="error-message text-sm text-red-600 mt-2">{fieldErrors.video}</p>
                )}
              </div>

              {/* Motivation & Mindset */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Motivation & Mindset
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">
                  This is where we really get to know you
                </p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Why Solwaste? *
                    </label>
                    <textarea
                      required
                      value={formData.whySolwaste}
                      onChange={(e) => setFormData({...formData, whySolwaste: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30 resize-none"
                      placeholder="Tell us what genuinely draws you to our work..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      What excites you about sustainability or the environment? *
                    </label>
                    <textarea
                      required
                      value={formData.whySustainability}
                      onChange={(e) => setFormData({...formData, whySustainability: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30 resize-none"
                      placeholder="Be honest. Big ideas or small habits — both count..."
                    />
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Availability
                </h3>
                <p className="text-sm text-charcoal/70 mb-5">Help us plan better</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Availability Type *
                    </label>
                    <select
                      required
                      value={formData.availability}
                      onChange={(e) => setFormData({...formData, availability: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                    >
                      <option value="">Select availability</option>
                      <option value="immediate">Immediate</option>
                      <option value="15days">Within 15 days</option>
                      <option value="1month">Within 1 month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal mb-2">
                      Expected Commitment *
                    </label>
                    <select
                      required
                      value={formData.commitment}
                      onChange={(e) => setFormData({...formData, commitment: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30"
                    >
                      <option value="">Select commitment type</option>
                      <option value="fulltime">Full-time</option>
                      <option value="parttime">Part-time</option>
                      <option value="project">Project-based</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* For Interns & Volunteers */}
              {(formData.applicationType === 'internship' || formData.applicationType === 'volunteer') && (
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                    For Interns & Volunteers
                  </h3>
                  <div className="bg-cream/50 rounded-xl p-6 mb-6 border border-moss/10">
                    <p className="text-sm text-charcoal/80 font-medium mb-3">Transparency first:</p>
                    <ul className="space-y-2 text-charcoal/80 text-sm">
                      <li className="flex items-start gap-3">
                        <Check size={18} className="text-moss mt-0.5 flex-shrink-0" />
                        <span>This role is primarily experience-driven</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={18} className="text-moss mt-0.5 flex-shrink-0" />
                        <span>You will work on live projects with real impact</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check size={18} className="text-moss mt-0.5 flex-shrink-0" />
                        <span>Certificates, LORs, and recommendations are performance-based</span>
                      </li>
                    </ul>
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      checked={formData.understandTerms}
                      onChange={(e) => setFormData({...formData, understandTerms: e.target.checked})}
                      className="mt-1 w-5 h-5 rounded border-moss/30 text-moss focus:ring-moss"
                    />
                    <span className="text-sm text-charcoal/80 group-hover:text-charcoal transition-colors">
                      I understand and agree *
                    </span>
                  </label>
                </div>
              )}

              {/* Additional Info */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-charcoal mb-3 pb-3 border-b-2 border-gold/20">
                  Final Note
                </h3>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Anything else you want us to know?
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-moss/20 rounded-xl focus:outline-none focus:border-moss transition-colors bg-cream/30 resize-none"
                  placeholder="Optional — share anything that doesn't fit the form..."
                />
              </div>

              {/* Submit */}
              <div className="bg-cream/50 rounded-xl p-4 mb-6 text-xs text-charcoal/70">
                By submitting this form, you confirm that:
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• The information shared is accurate</li>
                  <li>• You consent to Solwaste reviewing and storing your application</li>
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-moss text-cream rounded-xl font-bold text-lg hover:bg-moss/90 transition-colors shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
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
              What Happens Next?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {[
                { step: '1', title: 'We review on a rolling basis', desc: 'Applications are evaluated as they come in' },
                { step: '2', title: 'Shortlisted candidates get contacted', desc: 'Via email or WhatsApp — usually within a week' },
                { step: '3', title: 'No spam, just real conversations', desc: 'If we reach out, it means we see potential' }
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
                    <p className="text-charcoal/70 text-sm">{item.desc}</p>
                  </motion.div>
                  {i < 2 && (
                    <ChevronRight size={32} className="text-moss/30 hidden md:block flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg font-medium text-charcoal">
              Let's build a cleaner future — together ♻️
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CareerPage;
