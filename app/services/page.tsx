"use client";

import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom web applications built with modern frameworks and best practices. Responsive, fast, and scalable solutions.",
                features: ["React & Next.js", "Full-stack Development", "API Integration", "Performance Optimization"],
                icon: "🌐",
                gradient: "from-blue-400 to-cyan-500"
              },
              {
                title: "UI/UX Design",
                description: "Beautiful, intuitive interfaces that provide exceptional user experiences. User-centered design that converts.",
                features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"],
                icon: "🎨",
                gradient: "from-pink-400 to-rose-500"
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android. Seamless performance across devices.",
                features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
                icon: "📱",
                gradient: "from-purple-400 to-indigo-500"
              },
              {
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and deployment solutions. Secure, reliable, and cost-effective.",
                features: ["AWS & Azure", "DevOps", "CI/CD Pipelines", "Serverless Architecture"],
                icon: "☁️",
                gradient: "from-cyan-400 to-blue-500"
              },
              {
                title: "E-commerce",
                description: "Complete e-commerce solutions from store setup to payment integration. Boost your online sales.",
                features: ["Store Setup", "Payment Gateway", "Inventory Management", "Analytics Integration"],
                icon: "🛒",
                gradient: "from-orange-400 to-red-500"
              },
              {
                title: "Consulting",
                description: "Expert guidance on technology strategy, architecture, and best practices. Make informed decisions.",
                features: ["Tech Strategy", "Architecture Review", "Code Audits", "Team Training"],
                icon: "💼",
                gradient: "from-green-400 to-emerald-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-6 w-full py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Our Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Creating a detailed roadmap" },
              { step: "03", title: "Development", description: "Building with precision and care" },
              { step: "04", title: "Launch", description: "Deploying and optimizing for success" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-purple-600 rounded-lg font-bold text-lg shadow-2xl hover:shadow-3xl transition-shadow"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
