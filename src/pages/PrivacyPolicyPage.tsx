import React from 'react';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-6 pb-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191917] border border-[#B7A47A]/30 text-xs tracking-wider uppercase text-[#B7A47A]">
            <Lock className="w-3.5 h-3.5" />
            <span>Statutory Privacy & Confidentiality Terms</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#F4F0E6] leading-tight">
            Privacy Policy & Commercial Terms
          </h1>
          <p className="text-sm text-[#F4F0E6]/70 font-light">
            Effective Date: March 2026 | Black Stone Services, Nagpur, Maharashtra
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 text-sm text-[#F4F0E6]/80 font-light leading-relaxed">
        <div className="p-6 rounded-2xl bg-[#191917] border border-[#B7A47A]/20 space-y-3">
          <h2 className="text-lg font-serif font-semibold text-[#F4F0E6]">
            1. Nature of Services & Regulatory Independence
          </h2>
          <p>
            Black Stone Services is an independent private corporate advisory, statutory documentation, and digital solutions firm. We are not a government agency, municipal corporation, or judicial authority. We assist clients by preparing, structuring, verifying, and submitting applications on official government portals (such as GST, FoSCoS, Udyam, DGFT, and Municipal Corporations) under client authorization.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#191917] border border-[#B7A47A]/20 space-y-3">
          <h2 className="text-lg font-serif font-semibold text-[#F4F0E6]">
            2. Collection of Business Documents & KYC
          </h2>
          <p>
            In the ordinary course of executing registration, licensing, and compliance mandates, we receive client identification proofs (PAN, Aadhaar), address proofs (utility bills, lease deeds), bank details, and corporate resolutions. These documents are collected exclusively for the purpose of executing the requested services and are stored in encrypted, access-restricted repositories.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#191917] border border-[#B7A47A]/20 space-y-3">
          <h2 className="text-lg font-serif font-semibold text-[#F4F0E6]">
            3. Strict Confidentiality Guarantee
          </h2>
          <p>
            We adhere to rigorous non-disclosure principles. We do not sell, rent, monetize, or disclose your personal or business records to any unauthorized third-party commercial marketing entities. Information is only submitted to designated government statutory portals as required by law for your specific filings.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#191917] border border-[#B7A47A]/20 space-y-3">
          <h2 className="text-lg font-serif font-semibold text-[#F4F0E6]">
            4. Digital Media & Web Development Deliverables
          </h2>
          <p>
            For digital marketing, branding, video production, and website development services, clients retain intellectual property ownership of their brand trademarks and approved final assets upon complete settlement of professional fees. Black Stone Services maintains industry-standard hosting security practices for web projects.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#191917] border border-[#B7A47A]/20 space-y-3">
          <h2 className="text-lg font-serif font-semibold text-[#F4F0E6]">
            5. Contact For Privacy Matters
          </h2>
          <p>
            If you have questions regarding document retention, updating your contact records, or this policy, you may reach our compliance desk at:
          </p>
          <div className="text-xs text-[#B7A47A] pt-1">
            Black Stone Services<br />
            51, King Mahesh Nagar, Zingabai Tadi, Nagpur, Maharashtra 440030, India.<br />
            Direct Tel: +91 8554901641 / +91 9922237876
          </div>
        </div>
      </section>
    </div>
  );
};
