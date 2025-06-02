// src/components/About.jsx
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import profileImage from '../assets/profile.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/4 w-64 h-64 rounded-full bg-indigo-600 blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-blue-400">
            Me
          </span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64">
              <div className="absolute -inset-4 bg-[#915EFF] opacity-30 rounded-full blur-xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] to-blue-500 p-1.5 animate-spin-slow">
                <div className="rounded-full w-full h-full bg-gray-900"></div>
              </div>
              <img
                src={profileImage}
                alt="Anjali Ambeshwari"
                className="absolute inset-2 rounded-full object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] shadow-2xl"
              />

              {/* Floating tech icon 1 */}
              <motion.div
                className="absolute -right-4 top-6 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700"
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236... (SVG truncated for brevity) ..." />
                </svg>
              </motion.div>

              {/* Floating tech icon 2 */}
              <motion.div
                className="absolute bottom-6 -left-6 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700"
                animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373... (SVG truncated for brevity) ..." />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-2/3 w-full bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 shadow-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-blue-400">
              Who Am I?
            </h3>
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm <strong>Anjali Ambeshwari</strong>, a passionate Electronics and Communication Engineering student
              with a deep interest in microwave and optical communication technologies.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I love blending <strong>AI and communication systems</strong> to build futuristic solutions. On the side,
              I craft beautiful web experiences using <strong>React</strong>, <strong>Tailwind CSS</strong>,
              and <strong>Framer Motion</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              I thrive on learning, experimenting, and solving real-world problems with creativity and innovation.
              Let’s build something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
