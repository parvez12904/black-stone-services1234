import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  AlertCircle, 
  Clock, 
  FileSpreadsheet, 
  Coins 
} from 'lucide-react';

export const CompliancePage: React.FC = () => {
  const complianceModules = [
    {
      title: 'Periodic GST Return Filing',
      badge: 'Monthly / Quarterly',
      desc: 'Seamless preparation and electronic filing of GSTR-1 (outward supplies), GSTR-3B (summary return and tax settlement), and annual GSTR-9 returns. We cross-reconcile purchase registers against GSTR-2B to maximize legitimate Input Tax Credit (ITC) and prevent costly penalty notices.',
      deliverables: [
        'Outward invoice categorization and B2B / B2C reconciliation',
        'Input Tax Credit (ITC) verification against supplier filings',
        'Tax calculation, challan generation, and timely filing confirmation',
        'Quarterly Return Monthly Payment (QRMP) scheme management'
      ]
    },
    {
      title: 'Letter of Undertaking (LUT) for Exporters',
      badge: 'Export Tax Benefit',
      desc: 'Statutory compliance enabling eligible exporters of goods and services (including IT developers, consultants, and manufacturers) to export without paying upfront Integrated GST (IGST), preserving vital operating cash flow.',
      deliverables: [
        'Annual online filing of Form GST RFD-11 on the official portal',
        'Verification of witness declarations and bank linkages',
        'Immediate generation of official ARN acknowledgement',
        'Maintenance of valid LUT records for customs clearance'
      ]
    },
    {
      title: 'Commercial Deeds & Statutory Agreements',
      badge: 'Legal Structuring',
      desc: 'Drafting and vetting of critical business documentation that protects founders, partners, and enterprise assets against ambiguities and disputes.',
      deliverables: [
        'Partnership Deeds and LLP supplementary agreements',
        'Commercial lease agreements and property owner NOCs',
        'Non-Disclosure Agreements (NDAs) and vendor master contracts',
        'Board resolutions and statutory authorization letters'
      ]
    },
    {
      title: 'HUID & Precious Metals Hallmarking',
      badge: 'Specialized BIS License',
      desc: 'Assistance for bullion dealers, retail jewellers, and manufacturers in obtaining mandatory Bureau of Indian Standards (BIS) Hallmarking Unique ID (HUID) registration and system compliance.',
      deliverables: [
        'BIS portal profile creation and establishment verification',
        'Assaying and hallmarking center liaison documentation',
        'HUID register maintenance guidelines and compliance checks'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191917] border border-[#B7A47A]/30 text-xs tracking-wider uppercase text-[#B7A47A]">
            <span>Pillars 04 & 05: Compliance & Specialized Operations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F4F0E6] leading-tight">
            Business Compliance & Statutory Documentation.
          </h1>
          <p className="text-base sm:text-lg text-[#F4F0E6]/80 font-light leading-relaxed">
            Ensure your operations remain penalty-free, tax-efficient, and fully aligned with statutory mandates month after month.
          </p>
        </div>
      </section>

      {/* Editorial Image & Overview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B7A47A] font-semibold">
              The Cost of Non-Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4F0E6] leading-tight">
              Preventing Penalties Before Deadlines Pass.
            </h2>
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base leading-relaxed font-light">
              Indian regulatory frameworks impose strict daily late fees and interest penalties for delayed GST filings, missed annual renewals, or improper statutory records. More importantly, non-compliant suppliers often have their GSTINs flagged, causing enterprise buyers to withhold payments.
            </p>
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base leading-relaxed font-light">
              Black Stone Services provides systematic tracking and timely filing assistance, ensuring your compliance record remains flawless and your banking relationships strong.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link to="/contact" className="btn-gold text-xs py-3 px-6 tracking-wider uppercase">
                <span>Engage Compliance Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#B7A47A]/30 shadow-2xl">
              <img 
                src="/images/statutory_dossier.jpg" 
                alt="Statutory Compliance Dossier"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Modules Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {complianceModules.map((mod) => (
            <div 
              key={mod.title}
              className="card-dark rounded-2xl p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#B7A47A] px-2.5 py-1 rounded bg-[#111110] border border-[#B7A47A]/20">
                    {mod.badge}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#B7A47A]" />
                </div>

                <h3 className="text-2xl font-serif font-semibold text-[#F4F0E6]">
                  {mod.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F4F0E6]/75 font-light leading-relaxed">
                  {mod.desc}
                </p>

                <div className="pt-4 border-t border-[#F4F0E6]/10 space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#B7A47A] font-semibold">
                    Scope of Deliverables:
                  </div>
                  {mod.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2.5 text-xs text-[#F4F0E6]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B7A47A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F4F0E6]/10">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B7A47A] font-semibold hover:translate-x-1 transition-transform"
                >
                  <span>Request Support For This Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
