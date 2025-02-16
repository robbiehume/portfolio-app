import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    name: "Recipe Helper",
    description:
      "Helps create recipes from a given a prompt, ingredient list, or other parameters.",
    image: "", // Add a real image URL
    technologies: ["Vue", "Python (Flask)", "SQL", "OpenAI API", "Stability API", "AWS"],
    link: "https://robbiehume.com/recipe-app",
    github: "https://github.com/robbiehume/recipe-app"
  },
  {
    name: "History Tutor",
    description:
      "Helps the user learn more about historical topics, suggests related topics, and provides a content-specific quiz.",
    image: "", // Add a real image URL
    technologies: ["Vue", "Node.js", "Express", "OpenAI API", "AWS", "Redis", "Docker"],
    link: "https://robbiehume.com/history-app",
    github: "https://github.com/robbiehume/history-app"
  },
  {
    name: "Portfolio App (this project)",
    description:
      "Portfolio website to showcase skills, projects, and contact information",
    image: "", // Add a real image URL
    technologies: ["React", "TypeScript", "TailwindCSS", "AWS"],
    link: "https://robbiehume.com/",
    github: "https://github.com/robbiehume/portfolio-app"
  },
];

const skills = [
  "Python",
  "AWS",
  "Linux & Bash",
  "Scripting & Automation",
  "Vue",
  "JavaScript",
  "HTML/CSS",
  "ChatGPT & OpenAI API",
  "Nginx",
  "Git",
  "SQL",
  "Java",
];

const PortfolioApp = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="py-4 px-6 bg-white shadow-md sticky top-0 z-50 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">Robbie Hume</h1>
          <a
            href="https://www.linkedin.com/in/robbiehume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="https://github.com/robbiehume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            href="mailto:robbiehume.work@gmail.com"
            className="text-gray-600 hover:text-gray-900"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </div>
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
            <a href="#references" className="hover:text-gray-900 transition-colors">
              Reference
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
     <header className="w-full bg-gradient-to-br from-blue-100 via-white to-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left px-6 md:px-10 lg:px-16 max-w-7xl justify-center"> 
          <div className="flex justify-center md:justify-end mb-8 ">
            <img
              src="/ProfilePic.jpeg"
              alt="Profile"
              className="w-56 h-56 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col items-center max-w-max">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 whitespace-nowrap text-center">
              Senior Full Stack Engineer
            </h2>
            <p className="text-md text-gray-700 max-w-2xl leading-relaxed mb-8 text-center max-w-fit">
              {/* Crafting scalable and maintainable applications that drive innovation and solve complex problems. */}
              {/* Passionate full stack developer with a backend focus. Driven to produce top-quality work. Seeking a motivated team to collaborate and grow with. */}
              {/* Developing high-performance applications that leverage automation, AI tools, and cloud technologies to drive innovation and efficiency. */}
              Building scalable, high-performance applications with a focus on automation, resiliency, and optimized architecture.
            </p>
            <div className="flex justify-center w-full">
              <a
                href="#projects"
                className="inline-block bg-gray-900 text-white py-3 px-8 rounded-md font-semibold hover:bg-gray-700 shadow-md transition-all"
              >
                Check out my personal projects
              </a>
            </div> 
          </div>
        </div>
      </header> 

      <main className="flex-1 max-w-6xl mx-auto p-4 md:p-6 lg:p-8 w-full">
        <section id="about" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed ">
            <p className="mb-3">
              I'm a Senior Full Stack Software Engineer at AT&T with 5 years of experience, specializing in backend with actively growing frontend skills. I have a proven track record of designing and deploying scalable, high-performance applications with a focus on automation, resiliency, and optimized architecture. Recently, I’ve focused on integrating AI tools to drive innovation and improve efficiency across my projects. 
            </p>
            
            <p>I thrive in collaborative environments, consistently delivering high-quality solutions by leveraging my strong communication skills, dedicated work ethic, and analytical mindset. I'm committed to continuous learning and actively seek opportunities to expand my knowledge and contribute to impactful projects. </p>
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
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8 justify-center">
    {projects.map((project, index) => (
      <li
        key={index}
        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
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
        <div className="flex flex-wrap gap-2 mb-4 justify-center w-full">
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
            href={project.link + "/?utm_source=portfolio"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gray-700 transition-colors"
          >
            View Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-gray-900 py-2 px-4 rounded-md font-semibold hover:bg-gray-700 transition-colors ml-2"
          >
            View Code
          </a>
        </div>
      </li>
    ))}
  </ul>
</section> 

        <section id="references" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Manager Reference</h2>
          <ul className="space-y-6">
            <li className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-3">
                <p className="text-lg text-gray-700">
                  <strong>Rob Collins</strong>
                </p>
                <a
                  href="https://www.linkedin.com/in/rob-collins-671bab4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
                <a
                  href="mailto:collinsrc2000@yahoo.com"
                  className="text-gray-600 hover:text-gray-900"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </a>
              </div> 
              <p className="text-gray-500 mb-4">Lead System Design Engineer at AT&T</p>

              <p className="mb-2">"Robbie is an outstanding addition to our team. Though he joined as a junior developer it quickly became apparent that his skills and determination far exceeded his year of experience. Robbie efficiently and effectively works assignments and problems, researching and innovating solutions, but is not afraid to ask for other perspectives when needed. </p>
                
              <p className="mb-2">He has taken the lead on our teams use of AWS Lambda technology to reduce cloud and O&M costs, and is now lending that help/mentorship to other teams on our program. Robbie's technical expertise and growth potential, along with his personality and work ethic make him an absolute joy to work with. </p>
 
              <p className="italic">Legal Disclaimer: These are my personal opinions and do not represent AT&T, it's affiliates, or employees in any way."</p>
            </li> 
          </ul>
        </section>

        <section id="contact" className="mb-16 scroll-mt-24">
          <div className="flex items-center space-x-4 mb-4">
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
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
            <a
              href="mailto:robbiehume.work@gmail.com"
              className="text-gray-600 hover:text-gray-900"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m always interested in hearing about new projects and opportunities.
            Reach out if you have any questions or want to discuss potential collaboration.
          </p>
          <p className="text-lg mt-4">
            You can email me at{" "}
            <a
              href="mailto:robbiehume.work@gmail.com"
              className="font-bold text-gray-900 underline hover:text-gray-700 transition-colors"
            >
              robbiehume.work@gmail.com
            </a>
          </p>
        </section> 
      </main>

    </div>
  );
};

export default PortfolioApp;