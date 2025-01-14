import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelors in Computer Engineering',
      institution: 'University Of Engineering & Technology, Lahore',
      period: '2018 - 2022',
      score: 'CGPA: 3.6',
      icon: GraduationCap,
    },
    {
      degree: 'FSc Pre-Engineering',
      institution: 'Government College University, Lahore',
      period: '2016 - 2018',
      score: 'Marks: 93%',
      icon: School,
    },
    {
      degree: 'Matric',
      institution: 'LDA Model Boys High School, Lahore',
      period: '2014 - 2016',
      score: 'Marks: 94%',
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-25"></div>
                  <div className="relative bg-white p-3 rounded-full shadow-lg">
                    <edu.icon className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <span className="text-sm text-blue-600 font-medium">{edu.period}</span>
                </div>
              </div>

              <div className="ml-16">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 mb-2">{edu.institution}</p>
                  <p className="text-blue-600 font-medium">{edu.score}</p>
                </div>
              </div>

              {index !== education.length - 1 && (
                <div className="absolute left-5 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-25"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;