import { Link } from 'react-router-dom';

/**
 * Privacy Policy page component
 * Provides comprehensive privacy policy information for LG87 Play Arena
 * Includes data collection, usage, protection, and user rights sections
 */
const PrivacyPolicy = () => {
  // Get current date for last updated timestamp
  const last_updated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <div className="text-sm text-primary-200">
              Last updated: {last_updated}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
              
              {/* Table of Contents */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-secondary-800 mb-6">Table of Contents</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <a href="#information-collection" className="text-primary-600 hover:text-primary-700 transition-colors">
                    1. Information We Collect
                  </a>
                  <a href="#information-usage" className="text-primary-600 hover:text-primary-700 transition-colors">
                    2. How We Use Your Information
                  </a>
                  <a href="#information-sharing" className="text-primary-600 hover:text-primary-700 transition-colors">
                    3. Information Sharing
                  </a>
                  <a href="#data-protection" className="text-primary-600 hover:text-primary-700 transition-colors">
                    4. Data Protection
                  </a>
                  <a href="#cookies" className="text-primary-600 hover:text-primary-700 transition-colors">
                    5. Cookies and Tracking
                  </a>
                  <a href="#user-rights" className="text-primary-600 hover:text-primary-700 transition-colors">
                    6. Your Rights
                  </a>
                  <a href="#children-privacy" className="text-primary-600 hover:text-primary-700 transition-colors">
                    7. Children's Privacy
                  </a>
                  <a href="#policy-updates" className="text-primary-600 hover:text-primary-700 transition-colors">
                    8. Policy Updates
                  </a>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Introduction</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  LG87 Play Arena ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                  the security of your personal information. This Privacy Policy describes how we collect, use, 
                  disclose, and safeguard your information when you visit our facility, use our services, or 
                  interact with our website.
                </p>
                <p className="text-secondary-600 leading-relaxed">
                  By using our services, you consent to the data practices described in this policy. If you do 
                  not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              {/* Information Collection */}
              <div id="information-collection" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">1. Information We Collect</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Personal Information</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-6">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Membership and account information</li>
                  <li>Payment and billing information</li>
                  <li>Emergency contact details</li>
                  <li>Health and fitness information (when relevant for safety)</li>
                  <li>Facility usage and booking history</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Automatically Collected Information</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  When you visit our website or use our digital services, we automatically collect:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website or source</li>
                  <li>Location data (with your consent)</li>
                </ul>
              </div>

              {/* Information Usage */}
              <div id="information-usage" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">2. How We Use Your Information</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We use collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                  <li>Providing and managing our sports and fitness services</li>
                  <li>Processing memberships, bookings, and payments</li>
                  <li>Communicating with you about services, schedules, and updates</li>
                  <li>Ensuring facility safety and security</li>
                  <li>Improving our services and customer experience</li>
                  <li>Marketing and promotional communications (with your consent)</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div id="information-sharing" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">3. Information Sharing</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                  <li>With service providers who assist in our operations (payment processors, booking systems)</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In emergency situations to protect safety</li>
                  <li>With your explicit consent for specific purposes</li>
                  <li>In connection with business transfers (mergers, acquisitions)</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div id="data-protection" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">4. Data Protection</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                  <li>Encrypted data transmission and storage</li>
                  <li>Secure access controls and authentication</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection practices</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </div>

              {/* Cookies */}
              <div id="cookies" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">5. Cookies and Tracking</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  Our website uses cookies and similar technologies to enhance your experience. We use:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand site usage</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for targeted communications (with consent)</li>
                </ul>
                <p className="text-secondary-600 leading-relaxed">
                  You can control cookie preferences through your browser settings or our cookie consent tool.
                </p>
              </div>

              {/* User Rights */}
              <div id="user-rights" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">6. Your Rights</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Access: Request copies of your personal data</li>
                  <li>Correction: Request correction of inaccurate information</li>
                  <li>Deletion: Request deletion of your personal data</li>
                  <li>Portability: Request transfer of your data</li>
                  <li>Objection: Object to processing of your data</li>
                  <li>Restriction: Request limitation of data processing</li>
                </ul>
                <p className="text-secondary-600 leading-relaxed">
                  To exercise these rights, contact us using the information provided below.
                </p>
              </div>

              {/* Children's Privacy */}
              <div id="children-privacy" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">7. Children's Privacy</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We take special care to protect the privacy of children under 18. We require parental consent 
                  for youth memberships and programs. We do not knowingly collect personal information from 
                  children under 13 without parental consent.
                </p>
                <p className="text-secondary-600 leading-relaxed">
                  If we discover that we have collected information from a child under 13 without parental 
                  consent, we will delete that information promptly.
                </p>
              </div>

              {/* Policy Updates */}
              <div id="policy-updates" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">8. Policy Updates</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or 
                  legal requirements. We will notify you of significant changes by:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Providing notice at our facility</li>
                </ul>
                <p className="text-secondary-600 leading-relaxed">
                  Continued use of our services after policy updates constitutes acceptance of the changes.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Contact Us</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-secondary-600">
                  <div><strong>Name:</strong> Sudha Lakshmisha</div>
                  <div><strong>Phone:</strong> +91 9739796255</div>
                  <div><strong>Email:</strong> lg87playarenadm@gmail.com</div>
                  <div><strong>Address:</strong> Gunjur - Nerige Rd, Thippasandra, Bengaluru, Karnataka 560087</div>
                </div>
              </div>

              {/* Back to Home */}
              <div className="text-center pt-8 border-t border-gray-200">
                <Link 
                  to="/" 
                  className="btn-primary inline-flex items-center"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
