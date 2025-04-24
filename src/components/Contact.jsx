import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Refined background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%234B5563\' fill-opacity=\'0.8\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        />
      </div>

      {/* Subtle light effects */}
      <motion.div
        className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-blue-100 dark:bg-blue-900 filter blur-3xl opacity-10"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-gray-200 dark:bg-gray-800 filter blur-3xl opacity-10"
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Professional contact icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-md"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              viewport={{ once: true }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </motion.div>
          </div>
          
          <motion.h2 
            className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.div
            className="h-1 w-16 bg-blue-600 dark:bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new projects, opportunities, and collaborations.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Info Cards */}
            <motion.div 
              className="order-2 md:order-1 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium text-lg">Email</h3>
                    <a href="mailto:anjaliambeshwari@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline transition-all">
                      anjaliambeshwari@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium text-lg">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Chennai, India</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Globe Animation */}
            <motion.div
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-sm">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-full shadow-xl overflow-hidden aspect-square"
                  animate={{ 
                    boxShadow: [
                      "0 10px 25px -5px rgba(59, 130, 246, 0.3)",
                      "0 20px 25px -5px rgba(59, 130, 246, 0.4)",
                      "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut"
                  }}
                >
                  {/* Globe SVG */}
                  <motion.svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    animate={{ rotateY: 360 }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 30,
                      ease: "linear"
                    }}
                  >
                    {/* Globe base */}
                    <circle cx="100" cy="100" r="80" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="1" />
                    
                    {/* Globe grid lines - longitudinal */}
                    <motion.g
                      animate={{ 
                        rotateX: [20, 0, 20],
                        rotateY: [0, 180, 360]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 20,
                        ease: "linear"
                      }}
                    >
                      <path d="M100 20 A80 80 0 0 1 100 180" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      <path d="M60 24.4 A80 80 0 0 1 60 175.6" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      <path d="M30 44.4 A80 80 0 0 1 30 155.6" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      <path d="M140 24.4 A80 80 0 0 1 140 175.6" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      <path d="M170 44.4 A80 80 0 0 1 170 155.6" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      
                      {/* Latitudinal lines */}
                      <circle cx="100" cy="100" r="65" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      <circle cx="100" cy="100" r="50" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      <circle cx="100" cy="100" r="35" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      <circle cx="100" cy="100" r="20" fill="none" stroke="#93c5fd" strokeWidth="0.5" />
                      
                      {/* Continents */}
                      <path d="M115 60 Q130 55 135 65 Q140 75 130 80 Q125 85 115 80 Q105 75 115 60" fill="#bfdbfe" />
                      <path d="M70 70 Q90 65 85 80 Q80 95 65 90 Q55 85 70 70" fill="#bfdbfe" />
                      <path d="M65 110 Q85 105 100 115 Q110 125 100 135 Q85 140 75 130 Q60 125 65 110" fill="#bfdbfe" />
                      <path d="M130 105 Q145 100 150 110 Q155 120 145 125 Q135 130 130 120 Q125 110 130 105" fill="#bfdbfe" />
                      <path d="M40 95 Q55 90 60 100 Q65 110 50 115 Q35 120 40 95" fill="#bfdbfe" />
                    </motion.g>
                    
                    {/* Orbit circle */}
                    <circle cx="100" cy="100" r="95" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,3" />
                    
                    {/* Orbit dot */}
                    <motion.circle 
                      cx="100" 
                      cy="5" 
                      r="4" 
                      fill="#3b82f6"
                      animate={{
                        cx: [100, 195, 100, 5, 100],
                        cy: [5, 100, 195, 100, 5]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: "linear"
                      }}
                    />
                  </motion.svg>
                </motion.div>
                
                {/* Floating location pin */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -ml-5 -mt-12 text-blue-600 dark:text-blue-400"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2.5,
                    ease: "easeInOut"
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;