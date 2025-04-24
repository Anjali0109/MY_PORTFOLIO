// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls, Bounds, useAnimations } from '@react-three/drei';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Typing Effect for Roles
const roles = [
  "Full-Stack Developer",
  "Embedded & IoT Developer",
  "Aspiring Data Scientist",
  "Machine Learning Engineer"
];

// 3D Model Component with Animation Support
function Model() {
  const { scene, animations } = useGLTF('/models/scene.glb');
  const { actions, mixer } = useAnimations(animations, scene);

  useEffect(() => {
    // Play all animations from the GLB file
    Object.values(actions).forEach(action => action.play());
  }, [actions]);

  // Add subtle rotation if desired (can be removed if it interferes with model animations)
  useFrame((state, delta) => {
    // Apply the time delta to the mixer to advance animations
    mixer.update(delta);
  });

  return (
    <primitive 
      object={scene} 
      scale={[1.5, 1.5, 1.5]} // Adjust scale
      position={[0, -1, 0]} // Adjust position
    />
  );
}

// Fallback displayed while loading
function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#915EFF" wireframe />
    </mesh>
  );
}

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
      setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative w-full min-h-screen py-16 md:py-0 md:h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Main Container with Improved Centering */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col justify-center h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          {/* Left Content with Improved Margins */}
          <div className="lg:w-1/2 w-full z-10 flex flex-col items-start">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm 
              <motion.span className="text-[#915EFF]">
                {" Anjali Ambeshwari".split("").map((char, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl mt-4 text-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {text}|
            </motion.h2>
            <p className="text-lg md:text-xl text-gray-300 mt-6 text-justify max-w-3xl">
  I craft smart, interactive solutions by blending AI, web, and embedded systems to enhance experiences and solve real-world challenges.
</p>

            
            {/* Social Media Icons and CTA Button with Improved Alignment */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="mt-8 flex flex-col gap-5 self-start"
            >
              {/* Social Media Icons Row */}
              <div className="flex gap-4">
                {/* GitHub Button with Enhanced Hover */}
                <a 
                  href="https://github.com/Anjali0109" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:shadow-lg"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={24} />
                </a>
                
                {/* LinkedIn Button with Enhanced Hover */}
                <a 
                  href="https://www.linkedin.com/in/anjali-ambeshwari-b75353258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
              
              {/* View My Work Button */}
              <a 
                href="#projects" 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-1 w-fit"
              >
                View My Work
              </a>
            </motion.div>
          </div>

          {/* 3D Model Container */}
          <div className="lg:w-1/2 w-full h-60 sm:h-80 lg:h-96 mt-8 lg:mt-0 relative">
            <div className="w-full h-full">
              <Canvas shadows camera={{ position: [0, 1, 6], fov: 50 }}>
                <ambientLight intensity={1.0} />
                <directionalLight position={[2, 5, 5]} intensity={1.5} castShadow />
                <Suspense fallback={<LoadingFallback />}>
                  <Bounds fit clip observe margin={1.2}>
                    <Model />
                  </Bounds>
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls 
                  enableZoom={false}
                  enablePan={false}
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 4}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;