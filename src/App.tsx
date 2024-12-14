import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: "Recipe Helper",
    description:
      "Helps create recipes for users given a prompt and/or ingredients list, as well as other parameters",
    image: "", // Add a real image URL
    technologies: ["Vue", "Python / Flask", "AWS", "Nginx", "OpenAI GPT API", "Stability API"],
    link: "https://robbiehume.com/recipe-app",
  },
  {
    name: "History Tutor",
    description:
      "Helps the user learn more about historical topics and suggests additional related topics.",
    image: "", // Add a real image URL
    technologies: ["Vue", "Python / Flask", "AWS", "Nginx", "OpenAI GPT API"],
    link: "https://robbiehume.com/history-app",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind",
  "HTML",
  "CSS",
];

const PortfolioApp = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="py-4 px-6 bg-white shadow-md sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Robbie Hume's Portfolio</h1>
        <ul className="flex space-x-6 text-gray-600 text-lg">
          <li>
            <a href="#about" className="hover:text-gray-900 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-900 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-900 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-900 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Header / Hero */}
      <header className="flex flex-col justify-center items-start px-6 md:px-10 lg:px-16 py-20 bg-gradient-to-br from-blue-100 via-white to-white">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Full Stack Software Engineer
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          {/* Building scalable and maintainable applications for businesses and individuals. */}
        </p>
        <a
          href="#projects"
          className="inline-block bg-gray-900 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-700 transition-colors"
        >
          Check out my work
        </a>
      </header>

      <main className="flex-1 max-w-6xl mx-auto p-4 md:p-6 lg:p-8 w-full">
        <section id="about" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            I am a full stack software engineer with a passion for building seamless user experiences,
            robust back-ends, and efficient systems. My work often involves JavaScript, React, Node.js,
            and various databases. I enjoy learning new technologies, improving performance, and working
            with cross-functional teams to deliver exceptional products.
          </p>
        </section>

        <section id="skills" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-center"
              >
                <span className="text-lg text-gray-700 font-medium">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col"
              >
                {project.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-cover w-full h-40 hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white bg-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gray-700 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m always interested in hearing about new projects and opportunities.
            Reach out if you have any questions or want to discuss potential collaboration.
          </p>
          <p className="text-lg mt-4">
            Email me at{" "}
            <a
              href="mailto:robbiehume.work@gmail.com"
              className="font-bold text-gray-900 underline hover:text-gray-700 transition-colors"
            >
              robbiehume.work@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="py-6 text-center bg-gray-100 text-gray-600">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/robbiehume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/robbiehume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioApp;