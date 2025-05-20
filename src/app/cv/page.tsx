"use client";

import {Button} from "@/components/ui/button";
import React from "react";
import {FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaYoutube} from "react-icons/fa";
import profileData from "@/data/profile.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import certificationsData from "@/data/certifications.json";
import volunteeringData from "@/data/volunteering.json";
import achievementsData from "@/data/achievements.json";
import {Badge} from "@/components/ui/badge";

const CVPage = () => {
  return (
    <div className="min-h-screen mx-auto max-w-screen-lg px-4 sm:px-6 md:px-16 py-4 space-y-8">
      {/* Download Button */}
      <div className="flex justify-center">
        <Badge variant="outline" className="dark:text-gray-300 dark:border-gray-600">
          Happy New Year
        </Badge>
      </div>
      <div className="flex justify-center">
        <a href="/debjotymscv.pdf" download>
          <Button className="flex items-center px-4 py-2 text-sm md:text-base dark:bg-gray-700 dark:hover:bg-gray-600">
            <FaDownload className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Download CV
          </Button>
        </a>
      </div>
      {/* Header with Links */}
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/debjotyms" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors" />
        </a>
        <a href="https://linkedin.com/in/debjotyms" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors" />
        </a>
        <a href="mailto:debjotyms@gmail.com">
          <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors" />
        </a>
      </div>
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="border rounded-lg p-4 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold mb-3 dark:text-white">Profile</h2>
          <p className="text-sm sm:text-base dark:text-gray-300">{profileData.description}</p>
        </div>
        {/* Nested Sections */}
        {/* Education Section */}
        <div className="border rounded-lg p-4 pb-0 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2 dark:text-white">Education</h2>
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 mb-4 dark:border-gray-700 dark:bg-gray-900 transition-colors">
              <h3 className="text-base sm:text-xl font-bold mb-3 dark:text-white">{edu.institution}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{edu.duration}</p>
              <p className="text-sm sm:text-base dark:text-gray-300">{edu.program}</p>
              {/* <p>
                <strong>GPA:</strong> {edu.gpa}
              </p> */}
            </div>
          ))}
        </div>
        {/* Experience Section */}
        <div className="border rounded-lg p-4 pb-0 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2 dark:text-white">Experience</h2>
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 mb-4 dark:border-gray-700 dark:bg-gray-900 transition-colors">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{exp.role}</p>
              <h3 className="text-base sm:text-xl font-bold mb-3 dark:text-white">{exp.company}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{exp.duration}</p>
              <p className="text-sm sm:text-base dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
        {/* Projects Section */}
        <div className="border rounded-lg p-4 pb-0 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2 dark:text-white">Projects</h2>
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 mb-4 dark:border-gray-700 dark:bg-gray-900 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{project.category}</p>
                  <h3 className="text-base sm:text-xl font-bold dark:text-white">{project.title}</h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  {project.link.includes("youtube") ? (
                    <FaYoutube className="w-6 h-6 text-red-600 hover:text-red-700" />
                  ) : (
                    <FaGithub className="w-6 h-6 dark:text-gray-300 dark:hover:text-white transition-colors" />
                  )}
                </a>
              </div>
              <p className="text-sm sm:text-base dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
        {/* Technical Skills Section */}
        <div className="border rounded-lg p-4 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2 dark:text-white">Technical Skills</h2>
          <p className="text-sm sm:text-base dark:text-gray-300">
            <strong className="dark:text-white">Programming Languages:</strong> {skillsData.programming.join(", ")}
          </p>
          <p className="text-sm sm:text-base dark:text-gray-300">
            <strong className="dark:text-white">ML/AI:</strong> {skillsData.mlAi.join(", ")}
          </p>
          <p className="text-sm sm:text-base dark:text-gray-300">
            <strong className="dark:text-white">Web Technologies:</strong> {skillsData.webTechnologies.join(", ")}
          </p>
          <p className="text-sm sm:text-base dark:text-gray-300">
            <strong className="dark:text-white">DBMS:</strong> {skillsData.dbms.join(", ")}
          </p>
        </div>
        {/* Certifications Section */}
        <div className="border rounded-lg p-4 pb-0 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2 dark:text-white">Certifications</h2>
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 mb-4 dark:border-gray-700 dark:bg-gray-900 transition-colors">
              <h3 className="text-base sm:text-xl font-bold mb-3 dark:text-white">{cert.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{cert.date}</p>
              <p className="text-sm sm:text-base dark:text-gray-300">
                <strong className="dark:text-white">Credential ID:</strong> {cert.credentialId || "N/A"}
              </p>
              <p className="text-sm sm:text-base dark:text-gray-300">
                Credential URL:{" "}
                <a
                  href={cert.url}
                  className="text-sm sm:text-base text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  Click here
                </a>
              </p>
            </div>
          ))}
        </div>
        {/* Volunteering Section */}
        <div className="border rounded-lg p-4 pb-0 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold mb-4 dark:text-white">Volunteering</h2>
          {volunteeringData.map((volunteer, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 mb-4 dark:border-gray-700 dark:bg-gray-900 transition-colors">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{volunteer.role}</p>
              <h3 className="text-base sm:text-xl font-bold mb-3 dark:text-white">{volunteer.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{volunteer.date}</p>
              <p className="text-sm sm:text-base dark:text-gray-300">{volunteer.description}</p>
              <p className="text-sm sm:text-base dark:text-gray-300">
                {volunteer.linkText}:{" "}
                <a
                  href={volunteer.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Click here
                </a>
              </p>
            </div>
          ))}
        </div>
        {/* Achievements Section */}
        <div className="border rounded-lg p-4 pb-0 dark:border-gray-700 dark:bg-gray-800 transition-colors">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2 dark:text-white">Achievements</h2>
          {achievementsData.map((achievement, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 mb-4 dark:border-gray-700 dark:bg-gray-900 transition-colors">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{achievement.detail}</p>
              <h3 className="text-base sm:text-xl font-bold dark:text-white">{achievement.title}</h3>
              {/* <p>{achievement.detail}</p> */}
            </div>
          ))}
        </div>
        <div className="pb-1"></div> {/* Extra space below Achievements section */}
      </div>
    </div>
  );
};

export default CVPage;
