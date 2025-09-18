import { Link } from 'react-router-dom';

/**
 * Terms of Service page component
 * Provides comprehensive terms and conditions for LG87 Play Arena services
 * Includes membership terms, facility usage rules, liability, and legal agreements
 */
const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              These terms govern your use of LG87 Play Arena facilities and services. 
              Please read them carefully before using our services.
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
                  <a href="#acceptance" className="text-primary-600 hover:text-primary-700 transition-colors">
                    1. Acceptance of Terms
                  </a>
                  <a href="#facility-usage" className="text-primary-600 hover:text-primary-700 transition-colors">
                    2. Facility Usage Rules
                  </a>
                  <a href="#membership-terms" className="text-primary-600 hover:text-primary-700 transition-colors">
                    3. Membership Terms
                  </a>
                  <a href="#payment-policy" className="text-primary-600 hover:text-primary-700 transition-colors">
                    4. Payment and Billing
                  </a>
                  <a href="#safety-liability" className="text-primary-600 hover:text-primary-700 transition-colors">
                    5. Safety and Liability
                  </a>
                  <a href="#conduct-policies" className="text-primary-600 hover:text-primary-700 transition-colors">
                    6. Code of Conduct
                  </a>
                  <a href="#cancellation-policy" className="text-primary-600 hover:text-primary-700 transition-colors">
                    7. Cancellation Policy
                  </a>
                  <a href="#dispute-resolution" className="text-primary-600 hover:text-primary-700 transition-colors">
                    8. Dispute Resolution
                  </a>
                </div>
              </div>

              {/* Introduction */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Introduction</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  Welcome to LG87 Play Arena. These Terms of Service ("Terms") constitute a legally binding 
                  agreement between you and LG87 Play Arena ("we," "us," or "our") regarding your use of 
                  our facilities, services, and programs.
                </p>
                <p className="text-secondary-600 leading-relaxed">
                  By using our facilities or services, you acknowledge that you have read, understood, and 
                  agree to be bound by these Terms. If you do not agree with any part of these Terms, 
                  you may not use our services.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div id="acceptance" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">1. Acceptance of Terms</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  By entering our facility, purchasing memberships, booking services, or otherwise using 
                  our offerings, you agree to:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Comply with all facility rules and regulations</li>
                  <li>Accept full responsibility for your actions and safety</li>
                  <li>Provide accurate and complete information when required</li>
                  <li>Respect other users and staff members</li>
                  <li>Follow all applicable laws and regulations</li>
                </ul>
                <p className="text-secondary-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Continued use of our services 
                  after changes constitutes acceptance of the updated Terms.
                </p>
              </div>

              {/* Facility Usage Rules */}
              <div id="facility-usage" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">2. Facility Usage Rules</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Operating Hours</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  Our facility operates during posted hours. Access outside operating hours is strictly 
                  prohibited unless specifically arranged and approved by management.
                </p>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Equipment and Facilities</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Use equipment only for its intended purpose</li>
                  <li>Report any damaged or malfunctioning equipment immediately</li>
                  <li>Return equipment to designated areas after use</li>
                  <li>Follow proper hygiene protocols (towels, sanitization)</li>
                  <li>Appropriate athletic attire required at all times</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Booking and Reservations</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                  <li>Advance booking required for certain facilities and services</li>
                  <li>Cancellations must be made according to our cancellation policy</li>
                  <li>Late arrivals may result in reduced session time</li>
                  <li>No-shows may be subject to cancellation fees</li>
                </ul>
              </div>

              {/* Membership Terms */}
              <div id="membership-terms" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">3. Membership Terms</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Membership Types</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We offer various membership options with different terms, benefits, and restrictions. 
                  Specific details are outlined in your membership agreement.
                </p>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Membership Responsibilities</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Maintain current contact and emergency contact information</li>
                  <li>Present valid membership identification when requested</li>
                  <li>Non-transferable membership unless specifically stated otherwise</li>
                  <li>Notify us immediately of any changes in health status</li>
                  <li>Comply with guest policies and procedures</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Membership Suspension or Termination</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We reserve the right to suspend or terminate memberships for:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2">
                  <li>Violation of facility rules or these Terms</li>
                  <li>Non-payment of fees</li>
                  <li>Inappropriate conduct or behavior</li>
                  <li>Misuse of facilities or equipment</li>
                  <li>Providing false information</li>
                </ul>
              </div>

              {/* Payment Policy */}
              <div id="payment-policy" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">4. Payment and Billing</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Payment Methods</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We accept various payment methods including cash, credit/debit cards, and digital payments. 
                  All fees are due at the time of service unless other arrangements are made.
                </p>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Billing Terms</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Membership fees are billed in advance</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Returned payment fees apply for insufficient funds</li>
                  <li>Price changes require 30-day notice</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Refund Policy</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Refunds are generally not provided except in specific circumstances outlined in our 
                  refund policy or as required by law. Special consideration may be given for medical 
                  reasons with appropriate documentation.
                </p>
              </div>

              {/* Safety and Liability */}
              <div id="safety-liability" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">5. Safety and Liability</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Assumption of Risk</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  Participation in sports and fitness activities involves inherent risks. By using our 
                  facilities, you acknowledge and assume these risks, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Physical injury from sports activities</li>
                  <li>Equipment-related injuries</li>
                  <li>Accidents involving other participants</li>
                  <li>Slip, trip, and fall incidents</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Health and Medical Considerations</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Consult with a physician before beginning any fitness program</li>
                  <li>Inform staff of any relevant health conditions</li>
                  <li>Stop activity immediately if you experience discomfort</li>
                  <li>Follow all safety guidelines and instructions</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Limitation of Liability</h3>
                <p className="text-secondary-600 leading-relaxed">
                  To the fullest extent permitted by law, LG87 Play Arena, its owners, employees, and 
                  agents shall not be liable for any direct, indirect, incidental, or consequential damages 
                  arising from your use of our facilities or services.
                </p>
              </div>

              {/* Code of Conduct */}
              <div id="conduct-policies" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">6. Code of Conduct</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Expected Behavior</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Treat all members, guests, and staff with respect</li>
                  <li>Use appropriate language and behavior at all times</li>
                  <li>Maintain personal hygiene standards</li>
                  <li>Follow facility dress code requirements</li>
                  <li>Keep noise levels reasonable</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Prohibited Activities</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Discriminatory, harassing, or threatening behavior</li>
                  <li>Use of alcohol, drugs, or tobacco on premises</li>
                  <li>Unauthorized photography or video recording</li>
                  <li>Bringing outside food or beverages (unless medically necessary)</li>
                  <li>Solicitation or commercial activities without permission</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Enforcement</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Violations of our code of conduct may result in warnings, temporary suspension, or 
                  permanent termination of membership, depending on the severity and frequency of violations.
                </p>
              </div>

              {/* Cancellation Policy */}
              <div id="cancellation-policy" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">7. Cancellation Policy</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Membership Cancellation</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Written notice required according to membership agreement terms</li>
                  <li>Cancellation fees may apply depending on membership type</li>
                  <li>No refunds for partial months unless specified</li>
                  <li>Final billing may include any outstanding charges</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Service Cancellation</h3>
                <ul className="list-disc pl-6 text-secondary-600 space-y-2 mb-4">
                  <li>Booking cancellations must be made at least 24 hours in advance</li>
                  <li>Late cancellations may incur fees</li>
                  <li>Weather-related cancellations will be rescheduled when possible</li>
                  <li>Emergency cancellations will be handled on a case-by-case basis</li>
                </ul>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Our Right to Cancel</h3>
                <p className="text-secondary-600 leading-relaxed">
                  We reserve the right to cancel services due to equipment failure, staffing issues, 
                  weather conditions, or other circumstances beyond our control. We will provide 
                  reasonable notice when possible and offer rescheduling or refunds as appropriate.
                </p>
              </div>

              {/* Dispute Resolution */}
              <div id="dispute-resolution" className="mb-10">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">8. Dispute Resolution</h2>
                
                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Internal Resolution</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  We encourage open communication to resolve any issues. Please contact our management 
                  team with any concerns or complaints. We commit to investigating all issues promptly 
                  and fairly.
                </p>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Governing Law</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  These Terms are governed by the laws of Karnataka, India. Any legal disputes shall be 
                  resolved in the appropriate courts of Karnataka.
                </p>

                <h3 className="text-lg font-semibold text-secondary-700 mb-3">Severability</h3>
                <p className="text-secondary-600 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions 
                  shall continue in full force and effect.
                </p>
              </div>

              {/* Additional Terms */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-secondary-800 mb-3">Important Notice</h3>
                <p className="text-secondary-600 leading-relaxed mb-3">
                  These Terms of Service are designed to ensure a safe, enjoyable experience for all 
                  users while protecting both your interests and ours. We strongly encourage you to 
                  read and understand all terms before using our services.
                </p>
                <p className="text-secondary-600 leading-relaxed">
                  If you have any questions about these Terms, please contact us before using our 
                  facilities. Our staff is happy to clarify any provisions and explain our policies.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-secondary-800 mb-4">Contact Us</h2>
                <p className="text-secondary-600 leading-relaxed mb-4">
                  If you have questions about these Terms of Service or need clarification on any policies, 
                  please contact us:
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

export default TermsOfService;
