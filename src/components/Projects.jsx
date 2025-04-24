// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import DOCAiImage from 'D:/portfolio/my-portfolio/src/assets/doc ai(IMAGE).png';
import powerBI from 'D:/portfolio/my-portfolio/src/assets/POWET.png';
import FlovorFusion from 'D:/portfolio/my-portfolio/src/assets/flavor fusion.png';

const projectData = [
  {
    id: 1,
    title: "Doc Ai",
    description: "Doc AI is a healthcare web application that helps users check for potential diseases based on symptoms and test reports. It features AI-based disease prediction, lab test recommendations, a map of nearby labs, and a mental health chatbot for emotional support.",
    technologies: ["HTML", "CSS", "Javascript", "Python", "PHP", "ML"],
    image: DOCAiImage,
    projectLink: "https://anjali0109.github.io/DOC-Ai/",
    githubLink: "https://github.com/Anjali0109/DOC-Ai"
  },
  {
    id: 2,
    title: "Smart Finance Dashboard using PowerBi",
    description: "This Power BI dashboard is designed to help users track and visualize their personal financial data over time. It provides a clear breakdown of income, savings, and expenses across several years, enabling better budgeting, financial planning, and understanding of spending habits.",
    technologies: ["Power Bi", "Excel", "Power Query", "DAX"],
    image: powerBI,
    projectLink: "https://powerbi-finance.example.com",
    githubLink: "https://github.com/Anjali0109/smart-finance-dashboard-using-powerbi"
  },
  {
    id: 3,
    title: "Flavor Fusion",
    description: "Flavor Fusion is an interactive food ordering website that lets users customize meals based on their personal taste and spice preferences. Built using HTML, CSS, and JavaScript, it features a wide range of cuisines including Indian, Italian, Chinese, and Continental. The sleek and responsive UI ensures a smooth and engaging user experience.",
    technologies: ["HTML", "Javascript", "CSS"],
    image: FlovorFusion,
    projectLink: "https://spectacular-rolypoly-901c0f.netlify.app/",
    githubLink: "https://github.com/Anjali0109/Flavor-Fusion"
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  // Subtle color combinations for tech badges
  const colorCombos = [
    { bg: "bg-slate-700", text: "text-sky-300" },
    { bg: "bg-slate-800", text: "text-amber-300" },
    { bg: "bg-zinc-800", text: "text-indigo-300" },
    { bg: "bg-gray-800", text: "text-pink-300" },
    { bg: "bg-slate-700", text: "text-teal-300" }
  ];

  // Use modulo to cycle through color combinations
  const getBadgeStyle = (i) => {
    const combo = colorCombos[i % colorCombos.length];
    return `${combo.bg} ${combo.text}`;
  };

  return (
    <motion.div 
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Subtle glow effect */}
      <motion.div 
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-800/30 via-indigo-800/30 to-slate-800/30 opacity-0 group-hover:opacity-70 blur transition duration-500"
        animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
      />
      
      {/* Main card */}
      <motion.div 
        className="relative bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800"
        animate={isHovered ? { y: -8, scale: 1.01 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image container with overlay on hover */}
        <div className="relative overflow-hidden h-52">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Overlay on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 0.8 } : { opacity: 0.3 }}
          />
          
          {/* Floating project number */}
          <motion.div 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-800 bg-opacity-70 backdrop-blur-sm flex items-center justify-center text-white font-bold border border-slate-700"
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.5, type: "spring" }}
          >
            {index + 1}
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <motion.h3 
            className="text-2xl font-bold mb-2 text-white"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {project.title}
            
            {/* Animated underline */}
            <motion.div 
              className="h-0.5 w-0 bg-gradient-to-r from-sky-500/50 to-indigo-500/50 mt-1 rounded-full"
              animate={isHovered ? { width: "60%" } : { width: "30%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 mb-4 text-sm leading-relaxed" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {project.description}
          </motion.p>
          
          {/* Tech stack badges with subtle styling */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={i} 
                className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeStyle(i)} opacity-80`}
                whileHover={{ scale: 1.1 }}
                animate={isHovered ? { y: [0, -3, 0], transition: { delay: i * 0.07, duration: 0.5 } } : {}}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Action buttons */}
          <motion.div 
            className="flex space-x-3 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {project.projectLink && (
              <motion.a 
                href={project.projectLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg flex items-center shadow-lg shadow-slate-900/20"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -5px rgba(15, 23, 42, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Live Demo
              </motion.a>
            )}
            {project.githubLink && (
              <motion.a 
                href={project.githubLink}
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg flex items-center shadow-lg shadow-black/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.43.1 2.68.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clipRule="evenodd" />
                </svg>
                Code
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  // Background animation particles with more subtle appearance
  const particles = [...Array(15)].map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15
  }));

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-gray-900 via-slate-900/90 to-gray-900 text-white overflow-hidden">
      {/* Animated background particles with more subtle styling */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-sky-500 opacity-10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Container with backdrop blur for better readability */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Title with subtle decorative elements */}
          <div className="relative inline-block">
            <motion.div 
              className="absolute -top-8 -left-8 w-16 h-16 border-t border-l border-slate-600 opacity-60"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />
            
            <motion.div 
              className="absolute -bottom-8 -right-8 w-16 h-16 border-b border-r border-slate-600 opacity-60"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.6 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />
            
            <motion.h2 
              className="text-5xl font-bold mb-6 text-white px-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              My Projects
            </motion.h2>
          </div>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </motion.p>
        </motion.div>
        
        {/* Project cards grid with responsive layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {/* Github button with subtle animated elements */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div className="relative inline-block">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -left-6 -top-6 w-3 h-3 rounded-full bg-sky-500 opacity-40"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.2, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.div 
              className="absolute -right-6 -bottom-6 w-3 h-3 rounded-full bg-indigo-500 opacity-40"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.2, 0.4]
              }}
              transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
            />
          
            <motion.a 
              href="https://github.com/Anjali0109" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg shadow-slate-900/30 flex items-center justify-center space-x-2"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
              </svg>
              <span>See More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;