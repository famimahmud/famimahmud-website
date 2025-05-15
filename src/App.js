import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

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
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1400); // Adjust this to sync with name typing
    return () => clearTimeout(timer);
  }, []);

  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 3200); // adjust timing if needed
    return () => clearTimeout(timer);
  }, []);

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
            {/*}
            <li>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
            </li>
            */}
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
     <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-xl w-full flex flex-col items-center">
        <motion.img
          src={require("./assets/Portrait_Fami_Mahmud.jpg")}
          alt="Fami Mahmud"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-52 md:w-64 h-auto object-contain rounded-2xl shadow-xl border-4 border-white mb-6"
        />

        {/* Name - typed with no cursor after finish */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          <Typewriter
            words={["Hi, I'm Fami"]}
            loop={1}
            cursor={false}
            typeSpeed={80}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </motion.h1>

        {/* Subtitle - starts typing after name is done, cursor shown here */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-2xl md:text-3xl text-gray-800 max-w-2xl font-medium mt-2"
        >
          <div className="min-h-[2.5rem] md:min-h-[3rem]">
            {startTyping && (
              <Typewriter
                words={["Welcome to my portfolio."]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={0}
              />
            )}
          </div>
        </motion.p>
      </div>

      <div className="h-16 mt-6 flex justify-center items-end">
        {showArrow && (
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to About Me section"
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-stone-700 animate-bounce hover:opacity-80 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>

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
              I'm Fami Mahmud, a recent Informatics graduate from the Technical University of Munich with a focus on Machine Learning and IT Security. I'm passionate about building AI-powered solutions that solve real-world problems with practical impact.
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
        description="In my master’s thesis at the Fraunhofer AISEC institute, I explored the potential of fine-tuning open-source LLMs for automated vulnerability detection in source code. To support this task, I curated VulFusion, a four-variant dataset comprising 370,000 real-world and synthetic C functions. This dataset was constructed through careful selection, merging, and preprocessing steps to ensure high quality and diversity. Using parameter-efficient QLoRA fine-tuning, I trained models including Qwen2, Llama 3, Codestral, and CodeBERT—spanning sizes from 125M to 72B parameters. My experiments showed that while state-of-the-art LLMs at that time could confidently detect simple vulnerabilities, more complex cases—where subtle code changes have significant effects—remained a major challenge."
        techStack={["Python", "HuggingFace", "Pandas", "Matplotlib","Weights & Biases"]}
        bg="bg-white"
      />
      <ProjectSection
        title="Detection of Persuasion Techniques in Memes"
        description="In the SemEval 2024 research competition, my team took on Task 4, which challenges participants to detect propaganda in memes by classifying persuasion techniques arranged in a hierarchy. To tackle this challenge, we built a hierarchical multi-label pipeline. For the caption-only Subtask 1 we fine-tuned DeBERTa-v3-large to identify persuasion techniques from text alone. For the multimodal Subtask 2 we combined BERTweet-large embeddings with visual features from ViT-base-patch32-224 to analyse both caption and image. Competing against 31 other teams, our pipelines ranked 4ᵗʰ in Subtask 1, 6ᵗʰ in Subtask 2a, and 9ᵗʰ in Subtask 2b."
        image={require("./assets/projects/persuasion/persuasion_poster.png")}
        imageLarge={require("./assets/projects/persuasion/Detection_of_Persuasion_Techniques_in_Memes_Report.pdf")}
        techStack={["Python", "HuggingFace", "Pandas", "PyTorch", "Weights & Biases"]}
        reverse={true}
        //github="https://github.com/famimahmud/propaganda_detection"
        bg="bg-white"
      />
      <ProjectSection
        title="Identifying Setpieces in a Football Match"
        description="Aiming to bring pro-level football analytics within reach of amateur coaches and researchers, I investigated whether set pieces could be detected and classified using only positional data from players and the ball. To do this, we built a fully automated, two-layer ML pipeline that first predicts the ball state—identifying when it is out of play—and then classifies the resulting set piece. Trained on positional data from 102 Bundesliga matches (2017/18), our end-to-end system achieves a strong Matthews Correlation Coefficient of 0.907. The results gathered in the project with the Chair of Sports Informatics at TUM show that advanced match analysis can reach the grassroots game while bypassing the time-consuming, costly burden of manual event annotation."
        image={require("./assets/projects/setpieces/setpieces_image.png")}
        imageLarge={require("./assets/projects/setpieces/setpieces_image.png")}
        techStack={["Python", "Scikit-Learn", "NumPy", "SLURM"]}
        bg="bg-white"
      />

      {/* Add more <ProjectSection /> blocks here as you expand your portfolio */}

      {/* Skills Section */}
      {/*
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
      */}

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
