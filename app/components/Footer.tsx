import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            MyApp
          </h2>
          <p className="mt-4 text-gray-400">
            Building modern digital experiences with speed, quality, and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Important */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">
            📍 New Delhi, India  
          </p>
          <p className="text-gray-300">
            📞 +91 98765 43210  
          </p>
          <p className="text-gray-300">
            ✉ support@myapp.com  
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
