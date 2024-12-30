"use client";

import {Button} from "@/components/ui/button";
import React from "react";
import {FaDownload, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import profileData from "@/data/profile.json";
import educationData from "@/data/education.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import certificationsData from "@/data/certifications.json";
import volunteeringData from "@/data/volunteering.json";
import achievementsData from "@/data/achievements.json";

const CVPage = () => {
  return (
    <div className="min-h-screen mx-auto max-w-screen-lg px-4 sm:px-6 md:px-16 py-4 space-y-8">
      {/* Download Button */}
      <div className="flex justify-center">
        <a href="/cv.pdf" download>
          <Button className="flex items-center px-4 py-2 text-sm md:text-base">
            <FaDownload className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Download CV
          </Button>
        </a>
      </div>
      {/* Header with Links */}
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/debjotyms" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a href="https://linkedin.com/in/debjotyms" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
        <a href="mailto:debjotyms@gmail.com">
          <FaEnvelope className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </div>
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg sm:text-2xl font-bold mb-3">Profile</h2>
          <p className="text-sm sm:text-base">{profileData.description}</p>
        </div>
        {/* Nested Sections */}
        {/* Education Section */}
        <div className="border rounded-lg p-4 pb-0">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2">Education</h2>
          {educationData.map((edu, idx) => (
            <div key={idx} className="border rounded-lg p-4 mb-4">
              <h3 className="text-base sm:text-xl font-bold mb-3">{edu.institution}</h3>
              <p className="text-sm sm:text-base text-gray-600">{edu.duration}</p>
              <p className="text-sm sm:text-base">{edu.program}</p>
              {/* <p>
                <strong>GPA:</strong> {edu.gpa}
              </p> */}
            </div>
          ))}
        </div>
        {/* Experience Section */}
        <div className="border rounded-lg p-4 pb-0">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2">Experience</h2>
          {experienceData.map((exp, idx) => (
            <div key={idx} className="border rounded-lg p-4 mb-4">
              <p className="text-sm sm:text-base text-gray-600">{exp.role}</p>
              <h3 className="text-base sm:text-xl font-bold mb-3">{exp.company}</h3>
              <p className="text-sm sm:text-base text-gray-600">{exp.duration}</p>
              <p className="text-sm sm:text-base">{exp.description}</p>
            </div>
          ))}
        </div>
        {/* Projects Section */}
        <div className="border rounded-lg p-4 pb-0">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2">Projects</h2>
          {projectsData.map((project, idx) => (
            <div key={idx} className="border rounded-lg p-4 mb-4">
              <p className="text-sm sm:text-base text-gray-600">{project.category}</p>
              <h3 className="text-base sm:text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm sm:text-base">{project.description}</p>
              <p className="text-sm sm:text-base">
                Project Link:{" "}
                <a
                  href={project.link}
                  className="text-sm sm:text-base text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </p>
            </div>
          ))}
        </div>
        {/* Technical Skills Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2">Technical Skills</h2>
          <p className="text-sm sm:text-base">
            <strong>Programming Languages:</strong> {skillsData.programming.join(", ")}
          </p>
          <p className="text-sm sm:text-base">
            <strong>ML/AI:</strong> {skillsData.mlAi.join(", ")}
          </p>
          <p className="text-sm sm:text-base">
            <strong>Web Technologies:</strong> {skillsData.webTechnologies.join(", ")}
          </p>
          <p className="text-sm sm:text-base">
            <strong>DBMS:</strong> {skillsData.dbms.join(", ")}
          </p>
        </div>
        {/* Certifications Section */}
        <div className="border rounded-lg p-4 pb-0">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2">Certifications</h2>
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="border rounded-lg p-4 mb-4">
              <h3 className="text-base sm:text-xl font-bold mb-3">{cert.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{cert.date}</p>
              <p className="text-sm sm:text-base">
                <strong>Credential ID:</strong> {cert.credentialId || "N/A"}
              </p>
              <p className="text-sm sm:text-base">
                Credential URL:{" "}
                <a
                  href={cert.url}
                  className="text-sm sm:text-base text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here
                </a>
              </p>
            </div>
          ))}
        </div>
        {/* Volunteering Section */}
        <div className="border rounded-lg p-4 pb-0">
          <h2 className="text-lg sm:text-2xl font-bold mb-4">Volunteering</h2>
          {volunteeringData.map((volunteer, idx) => (
            <div key={idx} className="border rounded-lg p-4 mb-4">
              <p className="text-sm sm:text-base text-gray-600">{volunteer.role}</p>
              <h3 className="text-base sm:text-xl font-bold mb-3">{volunteer.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{volunteer.date}</p>
              <p className="text-sm sm:text-base">{volunteer.description}</p>
              <p className="text-sm sm:text-base">
                {volunteer.linkText}:{" "}
                <a
                  href={volunteer.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-blue-500"
                >
                  Click here
                </a>
              </p>
            </div>
          ))}
        </div>
        {/* Achievements Section */}
        <div className="border rounded-lg p-4 pb-0">
          <h2 className="text-lg sm:text-2xl font-bold pb-2 mb-2">Achievements</h2>
          {achievementsData.map((achievement, idx) => (
            <div key={idx} className="border rounded-lg p-4 mb-4">
              <p className="text-sm sm:text-base text-gray-600">{achievement.detail}</p>
              <h3 className="text-base sm:text-xl font-bold">{achievement.title}</h3>
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
