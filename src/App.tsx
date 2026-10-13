import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { RegistrationsPage } from './pages/RegistrationsPage';
import { DigitalSolutionsPage } from './pages/DigitalSolutionsPage';
import { CompliancePage } from './pages/CompliancePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#111110] text-[#F4F0E6] flex flex-col font-sans selection:bg-[#B7A47A] selection:text-[#111110]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/registrations-licenses" element={<RegistrationsPage />} />
            <Route path="/digital-solutions" element={<DigitalSolutionsPage />} />
            <Route path="/compliance-documentation" element={<CompliancePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            {/* Catch-all to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
