import { MyProject } from '../../1-Utils/data';
import CardProject from './CardProject';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {



  return (
    <div className="min-h-[80vh] w-full container pt-32 mb-20">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" text-3xl lg:text-5xl  font-bold leading-tight text-[#1E3851]">Our Projects</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-[#6B7280] mt-2 mb-12">
        Take a closer look at our latest projects and the milestones we’re proud to share.
      </motion.p>

      <motion.div

        className="mt-5 lg:mt-10 flex flex-wrap justify-center lg:justify-start  gap-10"
      >
        <AnimatePresence mode="wait">
          {MyProject.map((project, index) => (
            <CardProject
              key={project.name}
              animationKey={index}
              name={project.name}
              desc={project.desc}
              imgPath={project.imgPath}
              link={project.link}
              github={project.github}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
