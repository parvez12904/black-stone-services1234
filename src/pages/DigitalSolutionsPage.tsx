import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Video, 
  TrendingUp, 
  Layers, 
  Camera, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Smartphone, 
  Zap, 
  Code 
} from 'lucide-react';

export const DigitalSolutionsPage: React.FC = () => {
  const capabilities = [
    {
      title: 'Modern Website Development',
      badge: 'Engineering & UI/UX',
      icon: Globe,
      desc: 'Bespoke, high-performance web applications built on modern React architectures. Designed with editorial typography, instant loading speeds, and clear conversion funnels.',
      features: [
        'Custom React & TypeScript architecture',
        'Mobile-first responsive design for all screen widths',
        'Clean, accessible HTML structure and SEO metadata',
        'Lead capture forms and WhatsApp direct routing',
        'Zero bloatware, ultra-fast load times'
      ]
    },
    {
      title: 'Google Business Profile & Local SEO',
      badge: 'Local Discovery',
      icon: TrendingUp,
      desc: 'Ensure customers finding businesses in Nagpur and your regional territory see your verified profile with authoritative reviews, accurate hours, and geotagged updates.',
      features: [
        'Complete Google Business Profile setup and verification guidance',
        'Category optimization and primary keyword mapping',
        'Customer review generation systems and response templates',
        'Local citation consistency across directories',
        'Weekly high-resolution photo and update posts'
      ]
    },
    {
      title: 'Social Media Management & Strategy',
      badge: 'Brand Authority',
      icon: Sparkles,
      desc: 'Consistent, premium storytelling that establishes trust. We plan monthly editorial calendars, design branded graphics, and manage distribution across Instagram and LinkedIn.',
      features: [
        'Monthly content strategy and editorial calendar',
        'Branded graphic templates aligning with your corporate identity',
        'High-engagement captions and industry hashtag research',
        'Audience inquiry monitoring and engagement support',
        'Transparent monthly performance reports'
      ]
    },
    {
      title: 'Reels & Short-Form Video Production',
      badge: 'Algorithmic Reach',
      icon: Video,
      desc: 'Engage high-intent customers with dynamic, punchy short-form video content designed specifically for Instagram Reels, YouTube Shorts, and LinkedIn video feeds.',
      features: [
        'Concept development, hook scripting, and narrative storyboarding',
        'On-location smartphone or cinema-grade shoot direction',
        'Paced editing with subtitles, audio syncing, and color grading',
        'Trending audio curation suited for business tones',
        'Direct publication management'
      ]
    },
    {
      title: 'Zomato & Swiggy Optimization',
      badge: 'Hospitality & Food Tech',
      icon: Layers,
      desc: 'Turn hungry browsers into orders. We optimize food aggregator listings with structured menu categories, appetizing descriptions, and conversion-friendly hero banners.',
      features: [
        'Menu restructuring and high-margin item prioritization',
        'Appetizing food item naming and ingredient highlights',
        'Visual banner design for special offers and festive seasons',
        'Storefront health audit and review rating guidance'
      ]
    },
    {
      title: 'Professional Shoot & Brand Identity',
      badge: 'Visual Assets',
      icon: Camera,
      desc: 'High-resolution corporate photography of your office, manufacturing facility, team, or products that provides authentic marketing ammunition for years.',
      features: [
        'Executive portraits and team consultation photography',
        'Facility, clinic, restaurant, or retail showroom interior photography',
        'Product showcase styling and packaging imagery',
        'Complete high-res image bank for web and print use'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191917] border border-[#B7A47A]/30 text-xs tracking-wider uppercase text-[#B7A47A]">
            <span>Pillars 01 & 03: Digital Growth & Presence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F4F0E6] leading-tight">
            Digital Marketing & Website Development.
          </h1>
          <p className="text-base sm:text-lg text-[#F4F0E6]/80 font-light leading-relaxed">
            Move beyond generic templates. We build bespoke digital assets that establish corporate authority and turn casual prospects into committed clients.
          </p>
        </div>
      </section>

      {/* Editorial Image Feature */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="rounded-3xl overflow-hidden border border-[#B7A47A]/30 shadow-2xl relative">
          <img 
            src="/images/digital_studio.jpg" 
            alt="Black Stone Services Creative Studio"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111110] via-[#111110]/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#B7A47A] font-semibold">
              The Creative Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4F0E6] mt-1">
              Visual Elegance Meets Commercial Conversion.
            </h3>
            <p className="text-xs sm:text-sm text-[#F4F0E6]/80 mt-2 font-light">
              We design websites and social content that look like an international agency spent weeks perfecting them—because your enterprise deserves nothing less.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div 
                key={cap.title}
                className="card-dark rounded-2xl p-7 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#111110] border border-[#B7A47A]/25 flex items-center justify-center text-[#B7A47A] group-hover:border-[#B7A47A] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-[#B7A47A] px-2.5 py-1 rounded bg-[#111110] border border-[#B7A47A]/20">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-[#F4F0E6] group-hover:text-[#B7A47A] transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F4F0E6]/70 font-light leading-relaxed">
                    {cap.desc}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-[#F4F0E6]/10 text-xs text-[#F4F0E6]/80">
                    {cap.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B7A47A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F4F0E6]/10">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B7A47A] font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Discuss This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Direct CTA */}
      <section className="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#191917] border border-[#B7A47A]/30 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif font-bold text-[#F4F0E6]">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-sm text-[#F4F0E6]/75 font-light leading-relaxed">
            Let's evaluate your existing website, social channels, and local search presence. We will outline actionable enhancements within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold text-xs py-3 px-6 tracking-wider uppercase">
              <span>Start Digital Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href="tel:9922237876" className="btn-outline text-xs py-3 px-6 tracking-wider uppercase">
              <span>Call +91 9922237876</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
