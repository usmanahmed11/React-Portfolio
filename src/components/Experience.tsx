import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Nextbridge',
      location: 'Lahore, Pakistan',
      period: 'October 2022 - Present',
      responsibilities: [
        'Developed and maintained robust website platforms using PHP, Laravel, MySQL, Apache, and Linux.',
        'Designed and integrated RESTful APIs for payment gateways, social media platforms, and analytics.',
        'Built and deployed full-stack applications using the MERN stack , ensuring scalable and efficient solutions.',
        'Integrated QuickBooks with Laravel applications, optimizing data synchronization by syncing only unsynced data.',
        'Developed custom AG Grid methods to enhance data visualization and interaction in web applications.',
        'Achieved a 75% reduction in error rates and an 85% improvement in client satisfaction through performance optimization.',
        'Stayed updated with the latest trends in web development, and emerging technologies to deliver innovative solutions.',
      ],
    },
    {
      title: 'Software Engineer-Unity',
      company: 'Game Storm Studios',
      location: 'Lahore, Pakistan',
      period: 'January 2022 - September 2022',
      responsibilities: [
        'Designed and developed over 15 games using C# and Unity game engine.',
        'Built game features including UI, animation, sound, physics, and AI.',
        'Improved game frame rate by 60% and loading time by 40%.',
        'Fixed over 100 bugs and errors in game code and functionality.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'IDEE Games',
      location: 'Lahore, Pakistan',
      period: 'June 2021 - September 2021',
      responsibilities: [
        'Built game code using C# language and industry-standard game engines.',
        'Collaborated with game designers and artists to implement game functionality.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600">{exp.location}</span>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                  <p className="text-lg text-blue-600 mb-4">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;