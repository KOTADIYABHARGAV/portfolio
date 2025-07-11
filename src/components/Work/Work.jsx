import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { projects } from '../../constants';

function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };
  const handalCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id='work' className='py-24 px-6 sm:px-8 md:px-12 lg:px-[12vw] font-sans relative'>
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>Project's</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className='font-semibold text-gray-400 text-lg mt-4'>
          A showcase of projects I have worked on, highlighting my key skills and experience in various technologies.
        </p>
      </motion.div>

      {/* Project grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid gap-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='p-4'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
              <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{project.description}</p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal container */}
      {selectedProject && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
          <div className='bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative'>
            <div className='flex justify-end p-4'>
              <button
                onClick={handalCloseModal}
                className='text-white text-3xl font-bold hover:text-purple-500'
              >
                &times;
              </button>
            </div>
            <div className='flex flex-col'>
              <div className='w-full flex justify-center bg-gray-900 px-4'>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className='w-full max-w-[95%] object-contain rounded-xl shadow-2xl'
                />
              </div>
              <div className='p-6 md:p-8'>
                <h3 className='text-lg md:text-2xl lg:text-3xl font-bold text-white mb-2'>{selectedProject.title}</h3>
                <p className='text-gray-400 mb-6 text-sm md:text-base'>{selectedProject.description}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <a
                    href={selectedProject.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full sm:w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-center text-sm md:text-base font-semibold'
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-200 px-4 py-2 rounded-xl text-center text-sm md:text-base font-semibold'
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;
