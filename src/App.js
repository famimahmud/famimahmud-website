import React, { useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Mail } from "lucide-react";

const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-[#0077B5]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.761-2.238-5-5-5zM7.126 20.452H3.564V9h3.562v11.452zM5.345 7.545a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zm15.107 12.907h-3.561v-5.605c0-1.336-.025-3.058-1.864-3.058-1.865 0-2.15 1.457-2.15 2.963v5.7H9.317V9h3.419v1.561h.048c.476-.9 1.637-1.848 3.369-1.848 3.602 0 4.266 2.371 4.266 5.455v6.284z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.775.419-1.304.762-1.604-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.526.116-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013-.403c1.018.005 2.045.137 3 .403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.65.242 2.872.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.293 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

/* === Reusable Project Section Component === */
const ProjectSection = ({
  title,
  description,
  image,
  imageLarge,
  image2,
  imageLarge2,
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
        image ? "md:flex-row md:items-center gap-12" : ""
      } ${reverse && image ? "md:flex-row-reverse" : ""}`}
    >
      {/* Text Section */}
      <div className={`w-full ${image ? "md:w-1/2" : ""} text-left`}>
        <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Image Section(s) */}
      {(image || image2) && (
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          {[{ src: image, href: imageLarge }, { src: image2, href: imageLarge2 }]
            .filter(({ src }) => src)
            .map(({ src, href }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="cursor-pointer w-full flex justify-center"
              >
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <motion.img
                      src={src}
                      alt={`${title} ${idx + 1}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="rounded-2xl shadow-lg object-cover w-full max-w-lg max-h-[80vh]"
                    />
                  </a>
                ) : (
                  <motion.img
                    src={src}
                    alt={`${title} ${idx + 1}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl shadow-lg object-cover w-full max-w-lg max-h-[80vh]"
                  />
                )}
              </motion.div>
            ))}
        </div>
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
    <div className="text-lg uppercase tracking-wide text-gray-600">
      🛠️ Tech Stack
    </div>

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



/* === Main App Component === */
const App = () => {
  const [startTyping, setStartTyping] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1400); 
    return () => clearTimeout(timer);
  }, []);

  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowArrow(true), 3200); // adjust timing if needed
    return () => clearTimeout(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <nav className="relative max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">Fami Mahmud</h1>
          <ul className="hidden md:flex space-x-6 text-base font-medium">
            <li>
              <a href="#about" className="hover:text-gray-500 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-500 transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-500 transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 right-4 z-40 w-48 bg-white rounded-xl shadow-lg p-4 space-y-3 border border-gray-200"
          >
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-gray-500 transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-gray-500 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-gray-500 transition"
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
     <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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

      <div className="h-16 mt-4 flex justify-center items-end">
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
              My projects span diverse domains, from detecting software vulnerabilities and identifying propaganda in memes to analyzing football data. I thrive in multicultural teams and enjoy tackling complex challenges while continuously learning and exploring new technologies.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Anchor (empty anchor to keep hash intact) */}
      <div id="projects"></div>

      {/* === Project Sections === */}
      <ProjectSection
        title="Detection of Software Vulnerabilities using Fine-Tuned LLMs"
        description="In my master’s thesis at the Fraunhofer AISEC institute, I explored the potential of fine-tuning open-source LLMs for automated vulnerability detection in source code. To support this task, I curated VulFusion, a four-variant dataset comprising 370,000 real-world and synthetic C functions. This dataset was constructed through careful selection, merging, and preprocessing steps to ensure high quality and diversity. Using parameter-efficient QLoRA fine-tuning, I trained models including Qwen2, Llama 3, Codestral, and CodeBERT, spanning sizes from 125M to 72B parameters. My experiments showed that while state-of-the-art LLMs at that time could confidently detect simple vulnerabilities, more complex cases involving subtle yet impactful code changes remained a major challenge."
        image={require("./assets/projects/vulnerabilities/vulFusion_pipeline.png")}
        imageLarge={require("./assets/projects/vulnerabilities/vulFusion_pipeline.pdf")}
        image2={require("./assets/projects/vulnerabilities/training_pipeline.png")}
        imageLarge2={require("./assets/projects/vulnerabilities/training_pipeline.pdf")}
        techStack={["Python", "HuggingFace", "Pandas", "LangChain", "DSPy","Weights & Biases"]}
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
        bg="bg-gray-50"
      />
      <ProjectSection
        title="Identifying Setpieces in a Football Match"
        description="Aiming to bring pro-level football analytics within reach of amateur coaches and researchers, I investigated whether set pieces could be detected and classified using only positional data from players and the ball. To do this, we built a two-layer ML pipeline that first predicts the ball state—identifying when it is out of play—and then classifies the resulting set piece. Trained on positional data from 102 Bundesliga matches (2017/18), our end-to-end system achieves a strong Matthews Correlation Coefficient of 0.907. The results gathered in the project with the Chair of Sports Informatics at TUM show that advanced match analysis can reach the grassroots game while bypassing the time-consuming, costly burden of manual event annotation."
        image={require("./assets/projects/setpieces/setpieces_image.png")}
        imageLarge={require("./assets/projects/setpieces/setpieces_image.png")}
        image2={require("./assets/projects/setpieces/setpieces_pipeline.png")}
        imageLarge2={require("./assets/projects/setpieces/setpieces_pipeline.png")}
        techStack={["Python", "Scikit-Learn", "NumPy", "SLURM"]}
        bg="bg-white"
      />


      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Let's Get in Touch</h2>
          <p className="text-gray-600 mb-10 text-lg">
            If you have questions or would like to collaborate? I'd be happy to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
            {/* Email */}
            <a
              href="mailto:mahmudfami@gmail.com"
              className="flex-1 min-w-[10rem] text-center inline-flex justify-center items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition"
            >
              <Mail className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700">Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fami-mahmud"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[10rem] text-center inline-flex justify-center items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition"
            >
              <LinkedInIcon />
              <span className="text-gray-700">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/famimahmud"
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[10rem] text-center inline-flex justify-center items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition"
            >
              <GitHubIcon />
              <span className="text-gray-700">GitHub</span>
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default App;
