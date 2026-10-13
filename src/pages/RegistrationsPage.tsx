import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileCheck, 
  CheckCircle2, 
  FileText, 
  Building2, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  AlertCircle, 
  Info 
} from 'lucide-react';

export const RegistrationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gst' | 'fssai' | 'udyam' | 'shopact' | 'iec'>('gst');

  const registrationDetails = {
    gst: {
      title: 'GST Registration & Compliance',
      subtitle: 'Goods & Services Tax (GST) Identification',
      badge: 'Central Tax Registration',
      overview: 'Mandatory statutory tax registration for businesses providing goods with aggregate turnover exceeding statutory limits, service providers, or those engaged in interstate commerce and e-commerce.',
      documents: [
        'PAN Card of the Proprietor / Partners / Directors',
        'Aadhaar Card of the Applicant with mobile linkage for e-sign OTP',
        'Registered Business Address Proof (Electricity bill, property tax receipt, or NOC with Rent Agreement)',
        'Active Bank Account Details (Cancelled cheque or recent bank statement with IFSC and name)',
        'Partnership Deed or Certificate of Incorporation (for non-proprietorship firms)'
      ],
      process: [
        'Document verification and portal eligibility screening',
        'Preparation of Part A and Part B filing on the official GST portal',
        'Aadhaar biometric / OTP authentication',
        'Tracking Application Reference Number (ARN) through approval'
      ]
    },
    fssai: {
      title: 'FSSAI Food Licensing & Registration',
      subtitle: 'Food Safety and Standards Authority of India',
      badge: 'Food Industry Statutory License',
      overview: 'Compulsory regulatory authorization for every food business operator (FBO)—including restaurants, cafes, cloud kitchens, bakeries, food processors, and repackers.',
      documents: [
        'Identity & Address Proof of the Food Business Operator',
        'Proof of Business Premises (Rent agreement or utility bill)',
        'Food Safety Management Plan & Category List',
        'Blueprint / Layout plan of the kitchen or processing unit (for State / Central licenses)',
        'List of food categories and equipment list'
      ],
      process: [
        'Turnover assessment: Basic Registration (< ₹12L), State License (₹12L to ₹20Cr), or Central License (> ₹20Cr)',
        'Preparation of statutory declarations and category mapping',
        'Submission on the FoSCoS portal and liaison through verification',
        'Delivery of 14-digit FSSAI Registration Certificate'
      ]
    },
    udyam: {
      title: 'Udyam / MSME Registration',
      subtitle: 'Ministry of Micro, Small & Medium Enterprises',
      badge: 'Government Enterprise Recognition',
      overview: 'Official recognition under the MSME Development Act unlocking government procurement benefits, priority lending, lower interest rates on business loans, and statutory protection against delayed payments.',
      documents: [
        'Aadhaar Number of the Entrepreneur / Authorized Signatory',
        'PAN Card linked with Enterprise',
        'Bank Account Details (Account number and IFSC code)',
        'Investment in Plant & Machinery / Equipment declaration',
        'Annual turnover records'
      ],
      process: [
        'Verification of Aadhaar-linked OTP authentication',
        'Classification into Micro, Small, or Medium category',
        'Submission on Udyam statutory portal',
        'Generation of permanent Udyam Registration Certificate with QR Code'
      ]
    },
    shopact: {
      title: 'Shop Act / Gumasta Registration',
      subtitle: 'Maharashtra Shops & Commercial Establishments Act',
      badge: 'Municipal Commercial Permit',
      overview: 'Statutory registration for commercial establishments, offices, retail stores, and service desks operating within Maharashtra. Serves as primary legal evidence of existence and is essential for opening current corporate bank accounts.',
      documents: [
        'Identity & Residential Proof of Employer / Proprietor',
        'Commercial Premises Address Proof (Tax receipt or rent deed)',
        'Photograph of the Establishment with signboard in local language',
        'Employee details and working hours declaration',
        'Partnership or corporate constitutional documents (if applicable)'
      ],
      process: [
        'Municipal zoning and jurisdiction identification',
        'Application drafting with establishment details and signboard photo',
        'Portal submission and government fee processing',
        'Issuance of formal Gumasta / Shop Act Certificate'
      ]
    },
    iec: {
      title: 'Import Export Code (IEC)',
      subtitle: 'Directorate General of Foreign Trade (DGFT)',
      badge: 'International Trade Passport',
      overview: 'A 10-digit identification code issued by the DGFT that is mandatory for any commercial entity importing or exporting physical products or services into and out of India.',
      documents: [
        'PAN Card of the Business Entity / Individual',
        'Bank Certificate or Pre-printed Cancelled Cheque showing entity name and account number',
        'Registered Address Proof of the exporting entity',
        'Digital Signature Certificate (DSC) or Aadhaar OTP authentication of applicant'
      ],
      process: [
        'DGFT portal registration and user profile mapping',
        'Online submission of Form ANF 2A with electronic attachments',
        'Real-time verification against CBDT PAN and bank databases',
        'Issuance of permanent, lifetime-valid IEC certificate'
      ]
    }
  };

  const current = registrationDetails[activeTab];

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191917] border border-[#B7A47A]/30 text-xs tracking-wider uppercase text-[#B7A47A]">
            <span>Pillar 02: Statutory Registrations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F4F0E6] leading-tight">
            Business Registrations and Statutory Licenses.
          </h1>
          <p className="text-base sm:text-lg text-[#F4F0E6]/80 font-light leading-relaxed">
            Eliminate procedural confusion and bureaucratic rejections. We structure, verify, and submit your statutory applications with uncompromising precision.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#191917] border border-[#B7A47A]/20">
          <button
            onClick={() => setActiveTab('gst')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'gst'
                ? 'bg-[#B7A47A] text-[#111110] shadow-md'
                : 'text-[#F4F0E6]/75 hover:text-white hover:bg-[#111110]'
            }`}
          >
            GST Registration
          </button>
          <button
            onClick={() => setActiveTab('fssai')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'fssai'
                ? 'bg-[#B7A47A] text-[#111110] shadow-md'
                : 'text-[#F4F0E6]/75 hover:text-white hover:bg-[#111110]'
            }`}
          >
            FSSAI Food License
          </button>
          <button
            onClick={() => setActiveTab('udyam')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'udyam'
                ? 'bg-[#B7A47A] text-[#111110] shadow-md'
                : 'text-[#F4F0E6]/75 hover:text-white hover:bg-[#111110]'
            }`}
          >
            Udyam / MSME
          </button>
          <button
            onClick={() => setActiveTab('shopact')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'shopact'
                ? 'bg-[#B7A47A] text-[#111110] shadow-md'
                : 'text-[#F4F0E6]/75 hover:text-white hover:bg-[#111110]'
            }`}
          >
            Shop Act / Gumasta
          </button>
          <button
            onClick={() => setActiveTab('iec')}
            className={`px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
              activeTab === 'iec'
                ? 'bg-[#B7A47A] text-[#111110] shadow-md'
                : 'text-[#F4F0E6]/75 hover:text-white hover:bg-[#111110]'
            }`}
          >
            Import Export (IEC)
          </button>
        </div>
      </section>

      {/* Tab Content Box */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#191917] border border-[#B7A47A]/30 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#111110] border border-[#B7A47A]/30 text-[#B7A47A] font-semibold">
                  {current.badge}
                </span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#F4F0E6]">
                {current.title}
              </h2>
              <div className="text-sm font-medium text-[#B7A47A]">
                {current.subtitle}
              </div>
              <p className="text-sm text-[#F4F0E6]/80 font-light leading-relaxed">
                {current.overview}
              </p>

              <div className="pt-4 space-y-3">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B7A47A]">
                  Process & Filing Steps
                </h4>
                <div className="space-y-2">
                  {current.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#F4F0E6]/80">
                      <span className="w-5 h-5 rounded-full bg-[#111110] border border-[#B7A47A]/30 flex items-center justify-center shrink-0 font-mono text-[10px] text-[#B7A47A]">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed mt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-2xl bg-[#111110] border border-[#B7A47A]/25 space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-semibold text-[#B7A47A] flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Mandatory Documents Checklist
                </h4>
                <ul className="space-y-3 text-xs text-[#F4F0E6]/80">
                  {current.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B7A47A] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#191917] border border-[#B7A47A]/20 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#F4F0E6]/60">Need assistance for this registration?</div>
                  <div className="text-sm font-serif font-semibold text-[#F4F0E6] mt-0.5">
                    Our team reviews documents in 24 hours.
                  </div>
                </div>
                <Link to="/contact" className="btn-gold text-xs py-2.5 px-4 tracking-wider uppercase shrink-0">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Statutory Accuracy Disclaimer */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-6 rounded-2xl bg-[#191917]/70 border border-[#B7A47A]/20 flex items-start gap-4">
          <Info className="w-5 h-5 text-[#B7A47A] shrink-0 mt-0.5" />
          <div className="text-xs text-[#F4F0E6]/70 leading-relaxed font-light">
            <span className="font-semibold text-[#F4F0E6]">Statutory Transparency Notice:</span> Black Stone Services acts as a professional document preparer and corporate facilitator. Official approvals, certificate grants, and processing timelines are governed exclusively by respective statutory bodies (such as the Central Board of Indirect Taxes & Customs, FSSAI, Ministry of MSME, and Municipal Corporations). We do not guarantee approval where statutory prerequisites are unmet.
          </div>
        </div>
      </section>
    </div>
  );
};
