import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
      >
        <div className="text-left md:mt-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm Fami Mahmud, a recent Informatics graduate from the Technical University of Munich with a focus on Machine Learning and IT Security. I'm passionate about building AI-powered solutions that solve real-world problems with practical impact.
            <br />
            My projects span diverse domains, from detecting software vulnerabilities and identifying propaganda in memes to analyzing football data. I thrive in multicultural teams and enjoy tackling complex challenges while continuously learning and exploring new technologies.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;