import React from "react";
import { Mail } from "lucide-react";

const LinkedInIcon = () => (
  <svg className="w-5 h-5 text-[#0077B5]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.761-2.238-5-5-5zM7.126 20.452H3.564V9h3.562v11.452zM5.345 7.545a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zm15.107 12.907h-3.561v-5.605c0-1.336-.025-3.058-1.864-3.058-1.865 0-2.15 1.457-2.15 2.963v5.7H9.317V9h3.419v1.561h.048c.476-.9 1.637-1.848 3.369-1.848 3.602 0 4.266 2.371 4.266 5.455v6.284z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.775.419-1.304.762-1.604-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.124-.304-.535-1.526.116-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 013-.403c1.018.005 2.045.137 3 .403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.65.242 2.872.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.48 5.921.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.293 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const ContactSection = () => (
  <section id="contact" className="py-24 bg-gray-50 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Let's Get in Touch</h2>
      <p className="text-gray-600 mb-10 text-lg">
        If you have questions or would like to collaborate? I'd be happy to connect.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
        <a
          href="mailto:mahmudfami@gmail.com"
          className="flex-1 min-w-[10rem] text-center inline-flex justify-center items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition"
        >
          <Mail className="w-5 h-5 text-gray-700" />
          <span className="text-gray-700">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/fami-mahmud"
          target="_blank"
          rel="noreferrer"
          className="flex-1 min-w-[10rem] text-center inline-flex justify-center items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow hover:shadow-md hover:bg-gray-100 transition"
        >
          <LinkedInIcon />
          <span className="text-gray-700">LinkedIn</span>
        </a>
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
);

export default ContactSection;
