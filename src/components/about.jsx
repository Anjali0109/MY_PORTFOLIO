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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/4 w-64 h-64 rounded-full bg-indigo-600 blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-blue-400">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Enhanced Profile Image */}
          <motion.div 
            className="md:w-1/3 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-[#915EFF] opacity-30 rounded-full blur-xl"></div>
              
              {/* Circular Border with Gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF] to-blue-500 p-1.5 animate-spin-slow">
                <div className="rounded-full w-full h-full bg-gray-900"></div>
              </div>
              
              {/* Profile Image */}
              <img 
                src={profileImage}
                alt="Anjali Ambeshwari"
                className="absolute inset-2 rounded-full object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] shadow-2xl"
              />
              
              {/* Tech icons floating around the profile */}
              <motion.div 
                className="absolute -right-4 top-6 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700"
                animate={{ 
                  y: [0, -15, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.737-2.857 2.476-1.725.74-3.62.742-5.33.01-1.71-.733-3.396-2.178-4.97-3.606-.736-.647-1.473-1.28-2.188-1.893-.434-.373-.85-.727-1.237-1.04.354-1.15.987-1.967 1.927-2.55 1.327-.863 3.574-1.484 6.253-1.493 1.24.02 2.577.2 3.73.64z" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-6 -left-6 bg-gray-800 p-2 rounded-full shadow-lg border border-gray-700"
                animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12zm0 22.2c-5.617 0-10.2-4.583-10.2-10.2S6.383 1.8 12 1.8s10.2 4.583 10.2 10.2-4.583 10.2-10.2 10.2z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text Content */}
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
              Hello! I'm Anjali Ambeshwari, a passionate Electronics and Communication Engineering student
              with a deep interest in microwave and optical communication technologies. I enjoy exploring
              how AI can be integrated with communication systems to create innovative solutions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Apart from academics, I love crafting beautiful and interactive web experiences using React, Tailwind CSS,
              and Framer Motion. My goal is to blend technology with creativity to build projects that are both
              functional and visually appealing.
            </p>
            <p className="text-lg leading-relaxed">
              I'm constantly learning, growing, and eager to take on challenges that push the boundaries of my
              skills. Let's connect and create something amazing together!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

