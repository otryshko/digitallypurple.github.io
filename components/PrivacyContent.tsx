'use client'

export function PrivacyContent() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <section>
          <h3 className="text-2xl font-semibold mb-4">Information We Collect</h3>
          <p className="mb-4">We collect minimal information necessary to provide our services. This may include:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Contact information you voluntarily provide through our contact form</li>
            <li>Basic usage analytics to improve our website</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">How We Use Your Information</h3>
          <p className="mb-4">Any information we collect is used solely for:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Responding to your inquiries</li>
            <li>Improving our website and services</li>
            <li>Sending you information you have explicitly requested</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Data Protection</h3>
          <p className="mb-4">
            We implement reasonable security measures to protect your information. 
            We do not sell or share your personal data with third parties.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Your Rights</h3>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of communications</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>
            If you have any questions about our privacy policy, please contact us through our contact form 
            or email us at{' '}
            <a 
              href="mailto:info@digitallypurple.com"
              className="text-purple-600 hover:text-purple-800 transition-colors"
            >
              info@digitallypurple.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  )
} 