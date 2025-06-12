import { MyProject } from '../../1-Utils/data';
import CardProject from './CardProject';
import { AnimatePresence, motion } from 'framer-motion';

const Projects = () => {



  return (
    <div className="min-h-screen w-full container pt-32 mb-20">
      <h1 className="text-center text-5xl">My Projects</h1>



      <motion.div

        className="mt-20 flex flex-wrap justify-center gap-10"
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
