import { MyProject } from '../../1-Utils/data';
import CardProject from './CardProject';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {



  return (
    <div className="min-h-screen w-full container pt-20 mb-20">
      <h1 className=" text-3xl lg:text-5xl  font-bold leading-tight text-[#1E3851]">Our Projects</h1>
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
