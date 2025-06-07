'use client';

import { motion } from 'framer-motion';

const skills = ["Fast Learner", "Team Work", "Adaptability", "Creativity"];

const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      {skills.map((skill, index) => (
        <motion.p
          key={skill}
          className="cursor-default"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.1 }}
        >
          {skill}
        </motion.p>
      ))}
    </div>
  );
};

export default SubHeroMain;
