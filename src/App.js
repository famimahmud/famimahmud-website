import React from "react";
import { motion } from "framer-motion";

// ==============================================================
// Reusable ProjectSection component (one full‑width section per project)
// ==============================================================

const ProjectSection = ({
  title,
  description,
  image,
  imageLarge,
  techStack = [],
  github,
  reverse = false,
  bg = "bg-white",
}) => (
  <section
    id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
    className={`${bg} py-24 px-6`}
  >
    <div
      className={`max-w-6xl mx-auto flex flex-col ${
        image ? "md:flex-row items-start gap-12" : ""
      } ${reverse && image ? "md:flex-row-reverse" : ""}`}
    >
      {/* Text Section */}
      <div className={`w-full ${image ? "md:w-1/2" : ""} text-left`}>
        <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Image Section */}
      {image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 cursor-pointer"
        >
          {imageLarge ? (
            <a href={imageLarge} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={image}
                alt={title}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl shadow-lg object-cover w-full h-auto"
              />
            </a>
          ) : (
            <motion.img
              src={image}
              alt={title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
            />
          )}
        </motion.div>
      )}
    </div>

    {/* Tech stack + GitHub always appear below, once */}
    <div className="mt-12 text-center">
      <TechAndLink techStack={techStack} github={github} />
    </div>
  </section>
);


// Reusable Tech + Link Component
const TechAndLink = ({ techStack, github }) => (
  <div className="flex flex-col items-center gap-6">
    <div className="flex flex-wrap justify-center gap-3">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="bg-white border px-4 py-1.5 rounded-full shadow-sm text-sm hover:shadow-md transition"
        >
          {tech}
        </span>
      ))}
    </div>
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full shadow hover:bg-gray-700 transition"
      >
        View on GitHub
      </a>
    )}
  </div>
);


// ==============================================================
// Main App component
// ==============================================================
const App = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">Fami Mahmud</h1>
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <motion.img
          src={require("./assets/Portrait_Fami_Mahmud.jpg")}
          alt="Fami Mahmud"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-64 h-auto object-contain rounded-2xl shadow-xl border-4 border-white mb-6"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm Fami
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          I’m passionate about applying AI to meaningful challenges in cybersecurity and sports analytics.
        </motion.p>
      </section>

      {/* About Section */}
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
              I'm Fami Mahmud, a passionate researcher and developer with a background in AI and a strong interest in solving real-world problems. I hold a master's degree in Informatics from the Technical University of Munich, where I focused on Machine Learning and IT Security.
              <br />
              <br />
              My projects span diverse domains — from detecting software vulnerabilities and identifying propaganda in memes to analyzing football data. I thrive in multicultural teams and enjoy tackling complex challenges while continuously learning and exploring new technologies.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Anchor (empty anchor to keep hash intact) */}
      <div id="projects"></div>

      {/* === Project Sections === */}
      <ProjectSection
        title="Detection of Software Vulnerabilities using Fine-Tuned LLMs"
        description="Master’s thesis at Fraunhofer AISEC. Built a dataset and fine-tuned large language models to automatically detect software vulnerabilities."
        techStack={["Python", "HuggingFace", "NumPy", "Pandas", "Weights & Biases"]}
        bg="bg-white"
      />
      <ProjectSection
        title="Detection of Persuasion Techniques in Memes"
        description="Hierarchical multimodal model that classifies propaganda techniques in memes. Ranked 4th / 32 teams in SemEval 2024 (Subtask 1)."
        image={require("./assets/projects/persuasion/persuasion_poster.png")}
        imageLarge={require("./assets/projects/persuasion/Detection_of_Persuasion_Techniques_in_Memes_Report.pdf")}
        techStack={["Python", "PyTorch", "Transformers", "ViT", "Weights & Biases"]}
        github="https://github.com/famimahmud/persuasion-detection"
        bg="bg-white"
      />
      <ProjectSection
        title="Identifying Setpieces in a Football Match"
        description="Designed and trained a model to classify set pieces in football using player and ball tracking data. Developed at the TUM Sports Informatics Chair."
        image={require("./assets/projects/setpieces/setpieces_image.png")}
        imageLarge={require("./assets/projects/setpieces/setpieces_image.png")}
        techStack={["Python", "Scikit-Learn", "NumPy"]}
        bg="bg-white"
      />

      {/* Add more <ProjectSection /> blocks here as you expand your portfolio */}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-gray-800">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Python",
              "Pandas",
              "Scikit-learn",
              "PyTorch",
              "Hugging Face",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "SQL",
              "Machine Learning",
              "NLP",
              "LLMs",
              "Data Engineering",
              "Git",
              "Linux",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white border px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact</h2>
        <div className="space-x-4">
          <a href="mailto:mahmudfami@gmail.com" className="text-blue-600 underline">
            mahmudfami@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/fami-mahmud"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/famimahmud"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
