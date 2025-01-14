import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      content: 'Lahore, Pakistan',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'Usman212285@gmail.com',
      link: 'mailto:Usman212285@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      content: '+92 333 4420834',
      link: 'tel:+923334420834',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities. I'm always open
            to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500 mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-600">{info.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;