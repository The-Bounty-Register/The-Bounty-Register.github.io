
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-fitDark overflow-x-hidden">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-10 text-white">Terms of Service</h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="mb-3">
              By accessing or using FitMeIn services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
            <p>
              These Terms of Service govern your use of the FitMeIn platform, including any updates, enhancements, new features, and/or the addition of any new services.
            </p>
          </section>
          
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Service Description</h2>
            <p className="mb-3">
              FitMeIn provides a platform for fitness enthusiasts to find and book available slots at gyms. Our service connects users with fitness facilities to optimize capacity and improve the gym experience.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue the service at any time without notice.
            </p>
          </section>
          
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. User Accounts</h2>
            <p className="mb-3">
              To use certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to provide accurate and complete information when creating an account and to update your information to keep it accurate and current.
            </p>
          </section>
          
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. User Conduct</h2>
            <p className="mb-3">
              You agree not to use the service for any illegal purpose or in violation of any local, state, national, or international law. You also agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Harass, abuse, or harm another person</li>
              <li>Impersonate or misrepresent your affiliation with any person or entity</li>
              <li>Interfere with or disrupt the service or servers or networks connected to the service</li>
              <li>Attempt to gain unauthorized access to any portion of the service</li>
            </ul>
          </section>
          
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
            <p>
              All content included on the service, such as text, graphics, logos, images, and software, is the property of FitMeIn or its content suppliers and is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from our service without our written permission.
            </p>
          </section>
          
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
            <p>
              In no event shall FitMeIn, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </section>
          
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. If we make material changes to these Terms, we will notify you by email or by posting a notice on our website. Your continued use of the service after such modifications will constitute your acknowledgment and acceptance of the modified terms.
            </p>
          </section>
          
          <section className="bg-fitDark-medium p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at legal@fitmein.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
