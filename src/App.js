import React from "react";
import { motion } from "framer-motion";
import profilePic from './assets/Portrait_Fami_Mahmud.jpg';

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900 scroll-smooth">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow z-50">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">Fami Mahmud</div>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm Fami
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-2xl">
            I’m passionate about applying AI to tackle meaningful challenges in cybersecurity and sports analytics.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <img
              src={profilePic}
              alt="Fami Mahmud"
              className="w-48 h-48 object-cover rounded-full shadow-md"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-700 text-lg">
                I'm Fami Mahmud, a passionate researcher and developer with a background in AI and a strong interest in solving real-world problems. I hold a master's degree in Informatics from the Technical University of Munich, where I focused on Machine Learning and IT Security.
                <br /><br />
                My previous projects span diverse domains, from detecting software vulnerabilities and identifying propaganda in memes to analyzing football data. I thrive in multicultural teams and enjoy tackling complex challenges while continuously learning and exploring new technologies.
              </p>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">LLM-Based Vulnerability Detection</h3>
              <p className="text-gray-700">
                Master’s thesis at Fraunhofer AISEC. Built a dataset and fine-tuned large language models to automatically detect software vulnerabilities.
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Propaganda Detection in Memes</h3>
              <p className="text-gray-700">
                Fine-tuned hierarchical multimodal transformer models for identifying propaganda in memes during an NLP research workshop (SemEval).
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Football Analytics: Set Piece Prediction</h3>
              <p className="text-gray-700">
                Designed and trained a model to classify set pieces in football using player and ball tracking data. Developed at the TUM Sports Informatics Chair.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 px-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Python", "Pandas", "Scikit-learn", "PyTorch", "Hugging Face",
              "JavaScript", "React", "Tailwind CSS", "SQL", "Machine Learning",
              "NLP", "LLMs", "Data Engineering", "Git", "Linux"
            ].map((skill) => (
              <span key={skill} className="bg-white border px-4 py-2 rounded-full shadow">{skill}</span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white text-center px-4">
          <div className="space-x-4">
            <a href="mailto:mahmudfami@gmail.com" className="text-blue-600 underline">mahmudfami@gmail.com</a>
            <a href="https://www.linkedin.com/in/fami-mahmud" className="text-blue-600 underline" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/famimahmud" className="text-blue-600 underline" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
