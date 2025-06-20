import React from "react";

const policySections = [
  {
    heading: "1. Information We Collect",
    content: "",
    list: [
      "Personal identification information (Name, email address, phone number, etc.)",
      "Browser and usage data",
      "Cookies and tracking technologies",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    content: "We use the collected information to:",
    list: [
      "Provide and maintain our services",
      "Improve user experience",
      "Send emails and updates",
      "Comply with legal obligations",
    ],
  },
  {
    heading: "3. Data Security",
    content:
      "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure.",
  },
  {
    heading: "4. Third-Party Services",
    content:
      "We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
  },
  {
    heading: "5. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data, and to object to or restrict certain data processing activities.",
  },
  {
    heading: "6. Changes to This Policy",
    content:
      "We may update our Privacy Policy from time to time. We encourage you to review this page periodically for any changes.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen px-6 py-16 bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
          Privacy Policy
        </h1>

        <p className="mb-10 text-base leading-relaxed text-gray-700">
          At <strong>Krishna Enterprises</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website.
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          {policySections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {section.heading}
              </h2>
              {section.content && <p className="mb-2">{section.content}</p>}
              {section.list && (
                <ul className="list-disc list-inside space-y-1">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-600 italic">
          Last updated: June 19, 2025
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
