import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiC, SiCplusplus, SiPython, 
  SiTensorflow, SiPytorch, SiOpencv, 
  SiGit, SiGithub, SiFigma 
} from "react-icons/si";

import MatlabLogo from "../assets/matlab.svg";
import RaspberryPiLogo from "../assets/raspberrypi.svg";
import arduinoLogo from "../assets/arduino.svg";
import verilogLogo from "../assets/verilog.svg";
import embeddedcLogo from "../assets/embeddedc.svg";

const skills = [
  { category: "Frontend", skills: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> }
    ] 
  },
  { category: "Backend", skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
    ] 
  },
  { category: "Programming", skills: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-500" /> }
    ] 
  },
  { category: "AI & ML", skills: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "OpenCV", icon: <SiOpencv className="text-green-400" /> }
    ] 
  },
  { category: "Embedded Systems", skills: [
      { name: "MATLAB", icon: <img src={MatlabLogo} alt="MATLAB" className="w-6 h-6" /> },
      { name: "Raspberry Pi", icon: <img src={RaspberryPiLogo} alt="Raspberry Pi" className="w-6 h-6" /> },
      { name: "Arduino", icon: <img src={arduinoLogo} alt="Arduino" className="w-6 h-6" /> },
      { name: "Embedded C", icon: <img src={embeddedcLogo} alt="Embedded C" className="w-6 h-6" /> },
      { name: "Verilog", icon: <img src={verilogLogo} alt="Verilog" className="w-6 h-6" /> }
    ] 
  },
  { category: "Tools", skills: [
      { name: "Git", icon: <SiGit className="text-red-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-400" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-400" /> }
    ] 
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-3"></div>
          <h3 className="text-lg text-gray-300">A Glimpse into My Technical Expertise</h3>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-5 rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400 border-b border-gray-700 pb-2">{group.category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center space-x-2 p-2 bg-gray-700/70 rounded-md text-sm transition-all hover:bg-gray-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;