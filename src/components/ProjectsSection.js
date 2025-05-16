import React from "react";
import { motion } from "framer-motion";



const projects = [
  {
    title: "Detection of Software Vulnerabilities using Fine-Tuned LLMs",
    description:
      "In my master’s thesis at the Fraunhofer AISEC institute, I explored the potential of fine-tuning open-source LLMs for automated vulnerability detection in source code. To support this task, I curated VulFusion, a four-variant dataset comprising 370,000 real-world and synthetic C functions. This dataset was constructed through careful selection, merging, and preprocessing steps to ensure high quality and diversity. Using parameter-efficient QLoRA fine-tuning, I trained models including Qwen2, Llama 3, Codestral, and CodeBERT, spanning sizes from 125M to 72B parameters. My experiments showed that while state-of-the-art LLMs at that time could confidently detect simple vulnerabilities, more complex cases involving subtle yet impactful code changes remained a major challenge.",
    image: require("../assets/projects/vulnerabilities/vulFusion_pipeline.png"),
    imageLarge: require("../assets/projects/vulnerabilities/vulFusion_pipeline.pdf"),
    image2: require("../assets/projects/vulnerabilities/training_pipeline.png"),
    imageLarge2: require("../assets/projects/vulnerabilities/training_pipeline.pdf"),
    techStack: ["Python", "HuggingFace", "Pandas", "LangChain", "DSPy", "Weights & Biases"],
    bg: "bg-white"
  },
  {
    title: "Detection of Persuasion Techniques in Memes",
    description:
      "In the SemEval 2024 research competition, my team took on Task 4, which challenges participants to detect propaganda in memes by classifying persuasion techniques arranged in a hierarchy. To tackle this challenge, we built a hierarchical multi-label pipeline. For the caption-only Subtask 1 we fine-tuned DeBERTa-v3-large to identify persuasion techniques from text alone. For the multimodal Subtask 2 we combined BERTweet-large embeddings with visual features from ViT-base-patch32-224 to analyse both caption and image. Competing against 31 other teams, our pipelines ranked 4ᵗʰ in Subtask 1, 6ᵗʰ in Subtask 2a, and 9ᵗʰ in Subtask 2b.",
    image: require("../assets/projects/persuasion/persuasion_poster.png"),
    imageLarge: require("../assets/projects/persuasion/Detection_of_Persuasion_Techniques_in_Memes_Report.pdf"),
    techStack: ["Python", "HuggingFace", "Pandas", "PyTorch", "Weights & Biases"],
    reverse: true,
    bg: "bg-gray-50"
  },
  {
    title: "Identifying Setpieces in a Football Match",
    description:
      "Aiming to bring pro-level football analytics within reach of amateur coaches and researchers, I investigated whether set pieces could be detected and classified using only positional data from players and the ball. To do this, we built a two-layer ML pipeline that first predicts the ball state—identifying when it is out of play—and then classifies the resulting set piece. Trained on positional data from 102 Bundesliga matches (2017/18), our end-to-end system achieves a strong Matthews Correlation Coefficient of 0.907. The results gathered in the project with the Chair of Sports Informatics at TUM show that advanced match analysis can reach the grassroots game while bypassing the time-consuming, costly burden of manual event annotation.",
    image: require("../assets/projects/setpieces/setpieces_image.png"),
    imageLarge: require("../assets/projects/setpieces/setpieces_image.png"),
    image2: require("../assets/projects/setpieces/setpieces_pipeline.png"),
    imageLarge2: require("../assets/projects/setpieces/setpieces_pipeline.png"),
    techStack: ["Python", "Scikit-Learn", "NumPy", "SLURM"],
    bg: "bg-white"
  }
];

const TechAndLink = ({ techStack, github }) => (
  <div className="flex flex-col items-center gap-6">
    <div className="text-lg uppercase tracking-wide text-gray-600">🛠️ Tech Stack</div>
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
      <div className={`w-full ${image ? "md:w-1/2" : ""} text-left`}>
        <h3 className="text-3xl font-bold mb-4 text-gray-800">{title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>

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

    <div className="mt-12 text-center">
      <TechAndLink techStack={techStack} github={github} />
    </div>
  </section>
);

const ProjectsSection = () => (
  <>
    {projects.map((p, idx) => (
      <ProjectSection key={idx} {...p} />
    ))}
  </>
);

export default ProjectsSection;
