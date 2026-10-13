import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Business Registrations (GST, FSSAI, MSME)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name or company name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191917] border border-[#B7A47A]/30 text-xs tracking-wider uppercase text-[#B7A47A]">
            <span>Direct Client Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F4F0E6] leading-tight">
            Connect With Black Stone Services.
          </h1>
          <p className="text-base sm:text-lg text-[#F4F0E6]/80 font-light leading-relaxed">
            Speak directly with our business advisors. We are based in Nagpur and support enterprises across India with registrations, licenses, compliance, and digital growth.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Physical Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#191917] border border-[#B7A47A]/25 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#F4F0E6]">
                Corporate Office
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111110] border border-[#B7A47A]/30 flex items-center justify-center text-[#B7A47A] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#B7A47A] font-semibold">Registered Location</div>
                    <div className="text-[#F4F0E6] font-light mt-1 leading-relaxed">
                      51, King Mahesh Nagar, Zingabai Tadi,<br />
                      Nagpur, Maharashtra 440030, India.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111110] border border-[#B7A47A]/30 flex items-center justify-center text-[#B7A47A] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#B7A47A] font-semibold">Direct Telephone</div>
                    <div className="space-y-1 mt-1">
                      <div>
                        <a href="tel:8554901641" className="text-[#F4F0E6] hover:text-[#B7A47A] transition-colors font-medium">
                          +91 8554901641
                        </a>
                      </div>
                      <div>
                        <a href="tel:9922237876" className="text-[#F4F0E6] hover:text-[#B7A47A] transition-colors font-medium">
                          +91 9922237876
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111110] border border-[#B7A47A]/30 flex items-center justify-center text-[#B7A47A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#B7A47A] font-semibold">Consultation Hours</div>
                    <div className="text-[#F4F0E6] font-light mt-1 leading-relaxed">
                      Monday to Saturday: 10:00 AM – 7:30 PM<br />
                      Sunday: By prior consultation appointment
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-[#F4F0E6]/10">
                <a
                  href="https://wa.me/918554901641?text=Hello%20Black%20Stone%20Services,%20I%20would%20like%20to%20consult%20with%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] text-white py-3.5 px-6 rounded-2xl font-semibold text-xs tracking-wider uppercase hover:bg-[#20BD5A] transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat With Advisor on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-5 rounded-2xl bg-[#111110] border border-[#B7A47A]/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B7A47A] shrink-0 mt-0.5" />
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed font-light">
                Your business documents and consultation queries are handled with strict commercial confidentiality. We do not share your contact details with external marketing third-parties.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#191917] border border-[#B7A47A]/30 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#B7A47A]/20 text-[#B7A47A] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#F4F0E6]">
                    Consultation Request Logged
                  </h3>
                  <p className="text-sm text-[#F4F0E6]/80 max-w-md mx-auto leading-relaxed font-light">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Your enquiry for <span className="text-[#B7A47A]">{formData.service}</span> has been registered. An advisor from our Nagpur desk will review your details and connect with you at <span className="font-semibold text-white">{formData.phone}</span>.
                  </p>

                  <div className="p-4 rounded-xl bg-[#111110] border border-[#B7A47A]/20 max-w-sm mx-auto text-xs text-[#F4F0E6]/60 text-left">
                    <span className="font-semibold text-[#B7A47A]">Desk Status:</span> Enquiries received during business hours are reviewed within 2 to 4 hours.
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', service: 'Business Registrations (GST, FSSAI, MSME)', message: '' });
                    }}
                    className="text-xs uppercase tracking-widest text-[#B7A47A] underline hover:opacity-80 pt-4 block mx-auto"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#F4F0E6]">
                      Request Detailed Consultation
                    </h3>
                    <p className="text-xs text-[#F4F0E6]/65 mt-1 font-light">
                      Fill out the form below. Our consultants will evaluate your requirements and contact you.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/80 mb-1.5 font-medium">
                        Your Name / Enterprise *
                      </label>
                      <input 
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Sharma / Nagpur Traders"
                        className="w-full px-4 py-3 rounded-xl bg-[#111110] border border-[#B7A47A]/25 text-[#F4F0E6] text-sm focus:border-[#B7A47A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/80 mb-1.5 font-medium">
                        Mobile Number *
                      </label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 rounded-xl bg-[#111110] border border-[#B7A47A]/25 text-[#F4F0E6] text-sm focus:border-[#B7A47A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/80 mb-1.5 font-medium">
                        Email Address (Optional)
                      </label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@business.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#111110] border border-[#B7A47A]/25 text-[#F4F0E6] text-sm focus:border-[#B7A47A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/80 mb-1.5 font-medium">
                        Primary Service Area *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111110] border border-[#B7A47A]/25 text-[#F4F0E6] text-sm focus:border-[#B7A47A] focus:outline-none"
                      >
                        <option value="Business Registrations (GST, FSSAI, MSME)">Business Registrations (GST, FSSAI, MSME)</option>
                        <option value="Trade License & Shop Act">Trade License & Shop Act (Gumasta)</option>
                        <option value="Website Development & Modern Web">Website Development & Modern Web</option>
                        <option value="Digital Marketing & Video Reels">Digital Marketing & Video Reels</option>
                        <option value="Google Business & Local SEO">Google Business & Local SEO</option>
                        <option value="GST Filing & Periodic Compliance">GST Filing & Periodic Compliance</option>
                        <option value="Import Export (IEC & LUT)">Import-Export (IEC & LUT)</option>
                        <option value="HUID & Specialized Statutory">HUID & Specialized Statutory Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F4F0E6]/80 mb-1.5 font-medium">
                      Project or Licensing Requirements
                    </label>
                    <textarea 
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your operational location, current entity status, or specific goals..."
                      className="w-full px-4 py-3 rounded-xl bg-[#111110] border border-[#B7A47A]/25 text-[#F4F0E6] text-sm focus:border-[#B7A47A] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full text-xs py-3.5 tracking-widest uppercase justify-center"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </button>

                  <div className="text-[11px] text-[#F4F0E6]/50 text-center">
                    Note: Form submissions are processed directly by our advisory team. We do not dispatch unsolicited promotional emails.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
