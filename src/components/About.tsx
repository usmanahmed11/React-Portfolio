import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myImage from '../assets/me.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const details = [
    { label: 'Birthday', value: '28 December 2000' },
    { label: 'Age', value: '24' },
    { label: 'Phone', value: '+92 333 4420834' },
    { label: 'Degree', value: 'BSc Computer Engineering' },
    { label: 'City', value: 'Lahore, Pakistan' },
    { label: 'Email', value: 'Usman212285@gmail.com' },
  ];

  return (
    <section id="about" className="py-20 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img src={myImage} alt="Usman Ahmed"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />

            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-600 leading-relaxed mb-6">
                As a Software Engineer, I specialize in designing and implementing scalable, reliable web applications for diverse clients and industries. My expertise spans technologies like PHP, Laravel, Vue and the MERN stack (MongoDB, Express.js, React, Node.js). I have developed and integrated RESTful APIs, user interfaces, and LAMP stack technologies, ensuring optimal functionality and performance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I hold a degree in Computer Engineering from the University of Engineering and Technology, Lahore, graduating in 2022. With strong programming and problem-solving skills, I am passionate about learning and adapting to new technologies and tools to deliver innovative solutions.              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {details.map((detail, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-gray-500 text-sm mb-1">{detail.label}:</h3>
                  <p className="text-gray-900 font-medium">{detail.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;