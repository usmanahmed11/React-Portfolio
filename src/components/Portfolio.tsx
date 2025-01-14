import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import tailwindsImage from '../assets/tailwinds2.png';
import carRentalImage from '../assets/1.png';
import growthTrackerImage from '../assets/hr.jpg';
import productStoreImage from '../assets/prduct.jpg';



const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Tailwinds Management System',
      description: 'A cutting-edge web and mobile application designed to enhance the aviation experience, offering flight reservations, pilot training, and more.',
      image: tailwindsImage,
      tags: ['PHP', 'Laravel', 'Flutter', 'MySQL', 'Stripe', 'Tailwind CSS'],
      externalLink: 'https://flywithtailwinds.com/',
    },
    {
      title: 'Car Rental Web Application',
      description: 'A user-friendly platform for customers to rent cars, browse vehicles, make reservations, and manage bookings.',
      image: carRentalImage,
      tags: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Stripe', 'PayPal'],
      githubFrontend: 'https://github.com/usmanahmed11/CarRental-Frontend',
      githubBackend: 'https://github.com/usmanahmed11/CarRental-Backend',
    },
    {
      title: 'Growth Tracker HR Management System',
      description: 'A comprehensive tool for HR teams to track employee growth, manage records, and schedule performance reviews.',
      image: growthTrackerImage,
      tags: ['PHP', 'Laravel', 'MySQL'],
      githubFrontend: 'https://github.com/usmanahmed11/GrowthTracker-frontend',
      githubBackend: 'https://github.com/usmanahmed11/GrowthTracker-backend',
    },
    {
      title: 'Product Store (MERN Stack)',
      description: 'A full-stack e-commerce application built with the MERN stack, enabling users to add, update, and delete products.',
      image: productStoreImage,
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/usmanahmed11/Mern-Store',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project demonstrates my skills
            in different technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.githubFrontend && (
                    <a href={project.githubFrontend} className="text-white hover:text-gray-200 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.githubBackend && (
                    <a href={project.githubBackend} className="text-white hover:text-gray-200 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-white hover:text-gray-200 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.externalLink && (
                    <a href={project.externalLink} className="text-white hover:text-gray-200 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
