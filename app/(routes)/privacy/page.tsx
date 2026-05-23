import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">
        Welcome to our Social Media Scheduling application. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and use our application.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. The Data We Collect</h2>
      <p className="mb-4">
        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
        <li><strong>Contact Data:</strong> includes email address.</li>
        <li><strong>Social Media Data:</strong> includes access tokens and basic profile information from connected platforms (e.g., Facebook, Instagram, Twitter) strictly for the purpose of publishing content on your behalf.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Data</h2>
      <p className="mb-4">
        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>To provide and maintain our Service, including scheduling and publishing your social media posts.</li>
        <li>To manage your account and authenticate your logins.</li>
        <li>To communicate with you regarding updates, security alerts, and support messages.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Deletion Instructions</h2>
      <p className="mb-4">
        According to Facebook and Instagram Platform rules, we must provide a User Data Deletion Callback URL or Data Deletion Instructions URL. If you want to delete your activities and data for our application, you can remove your account via the app settings, or by disconnecting the app directly from your Facebook settings under "Security and Login" - "Apps and Websites".
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this privacy policy or our privacy practices, please contact us.
      </p>
    </div>
  );
}
