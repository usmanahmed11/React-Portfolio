import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import bgImage from '../assets/Bg.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.1'
        }}></div>
        {/* Animated circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Software Engineer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Building Scalable and Reliable Web Applications with MERN and LAMP Stack Technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/usmanahmed11" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/usman-codenerd/" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:Usman212285@gmail.com"
              className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;