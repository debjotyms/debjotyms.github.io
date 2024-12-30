"use client";

import {Button} from "@/components/ui/button";
import React from "react";
import {FaDownload, FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const CVPage = () => {
  return (
    <div className="min-h-screen mx-auto max-w-screen-lg px-4 md:px-16 py-4 space-y-8">
      {/* Download Button */}
      <div className="flex justify-center">
        <a href="/cv.pdf" download>
          <Button className="flex items-center">
            <FaDownload className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </a>
      </div>
      {/* Header with Links */}
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/debjotyms" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/debjotyms" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:debjotyms@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>
      {/* Profile Section */}
      <div className="border rounded-lg p-4">
        <div className=" pb-2 mb-2">
          <h2 className="text-xl font-bold">Profile</h2>
        </div>
        <div>
          <p>
            In my second year of college, I became interested in <strong>Machine Learning</strong>. Since then, along
            with other development practices, I&#39;ve been teaching myself AI and ML. Additionally, I practice
            regularly on <strong>LeetCode</strong>. I am interested in{" "}
            <strong>Computer Vision, LLMs, and Predictive Analysis</strong>, and I&#39;ve successfully completed several
            projects in these areas. Furthermore, I have a solid understanding of <strong>cloud concepts</strong> and
            hands-on experience with <strong>Microsoft Azure</strong>. I am also <strong>2x cloud certified</strong>,
            holding the <strong>DP-100: Microsoft Azure Data Scientist Associate</strong> certification. To complement
            this, I utilize version control systems like <strong>Git and GitHub</strong> to manage my projects
            efficiently. I also have a <strong>YouTube Channel</strong> and <strong>Personal Blog</strong> where I try
            to share everything I learn.
          </p>
        </div>
      </div>
      {/* Nested Sections */}
      <div className="space-y-6">
        {/* Education Section */}
        <div className="border rounded-lg p-4">
          <div className=" pb-2 mb-2">
            <h2 className="text-xl font-bold">Education</h2>
          </div>
          <div className="mb-4 border rounded-lg p-4">
            <div className=" pb-2 mb-2">
              <h3 className="text-lg font-bold">BRAC University, Dhaka</h3>
            </div>
            <div>
              <p className="text-sm text-gray-600">Jan 2022 - Dec 2025</p>
              <p>Bachelor of Science - BS, Computer Science</p>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className=" pb-2 mb-2">
              <h3 className="text-lg font-bold">St. Joseph Higher Secondary School, Dhaka</h3>
            </div>
            <div>
              <p className="text-sm text-gray-600">Jul 2018 - Oct 2020</p>
              <p>Higher Secondary - Science</p>
              <p>
                <strong>GPA:</strong> 5.00/5.00
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="border rounded-lg p-4">
          <div className=" pb-2 mb-2">
            <h2 className="text-xl font-bold">Experience</h2>
          </div>
          <div className="border rounded-lg p-4">
            <div className=" pb-2 mb-2">
              <h3 className="text-lg font-bold">Markopolo.ai</h3>
            </div>
            <div>
              <p className="text-sm text-gray-600">Feb 2024 - Present</p>
              <p>Data Science Intern</p>
              <div className="mt-2 border rounded-lg p-4">
                <p>
                  Tasks included gathering data from the internet using <strong>Python scripts</strong> and manual
                  methods, identifying keywords, labeling data, analyzing brands, and understanding customer sentiment.
                </p>
              </div>
              <div className="mt-2 border rounded-lg p-4">
                <p>
                  Worked with <strong>MFS and Beverage</strong> brands in Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="border rounded-lg p-4">
          <div className=" pb-2 mb-2">
            <h2 className="text-xl font-bold">Projects</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Aruco Marker Distance Measurement",
                description:
                  "Developed a system to accurately measure distances using Aruco markers. Implemented Computer Vision techniques to detect markers in images or video streams, enabling precise distance calculations.",
                link: "https://github.com/debjotyms/aruco-marker-distance-measurement",
              },
              {
                title: "Face Tracking",
                description:
                  "Created a face tracking system utilizing the OpenCV library. Developed algorithms to detect and track human faces in real-time from video input.",
                link: "https://github.com/debjotyms/face-tracking-opencv",
              },
              {
                title: "Intrusion Detection System",
                description:
                  "Created an intrusion detection system using a dataset from Kaggle. Implemented algorithms to analyze network traffic and identify potential security breaches.",
                link: "https://github.com/debjotyms/Intrusion-Detection-Streamlit-CSE484",
              },
            ].map((project, index) => (
              <div className="border rounded-lg p-4 mb-4" key={index}>
                <div className=" pb-2 mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
                <div>
                  <p>{project.description}</p>
                  <p>
                    Project Link:{" "}
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">
                      {project.link}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="border rounded-lg p-4">
          <div className=" pb-2 mb-2">
            <h2 className="text-xl font-bold">Technical Skills</h2>
          </div>
          <div>
            <p>
              <strong>Programming Languages:</strong> C++, Python
            </p>
            <p>
              <strong>ML/AI:</strong> NumPy, Pandas, Seaborn, Scikit-learn, TensorFlow, PyTorch
            </p>
            <p>
              <strong>Web Technologies:</strong> HTML, CSS, Bootstrap, Django
            </p>
            <p>
              <strong>DBMS:</strong> MySQL, SQLite
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border rounded-lg p-4">
          <div className=" pb-2 mb-2">
            <h2 className="text-xl font-bold">Certifications</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Microsoft Certified: Azure Data Scientist Associate",
                date: "Jun 2024",
                id: "8C564412AD29B5F2",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/debjotyms/8C564412AD29B5F2",
              },
              {
                title: "Microsoft Certified: Azure AI Fundamentals",
                date: "Apr 2024",
                id: "1FA23F4AAEF5D096",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/debjotyms/1FA23F4AAEF5D096",
              },
              {
                title: "GitHub Foundations",
                date: "Jun 2024",
                url: "https://www.credly.com/go/7QpDtNlH",
              },
            ].map((cert, index) => (
              <div className="border rounded-lg p-4 mb-4" key={index}>
                <div className=" pb-2 mb-2">
                  <h3 className="text-lg font-bold">{cert.title}</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{cert.date}</p>
                  <p>
                    <strong>Credential ID:</strong> {cert.id || "N/A"}
                  </p>
                  <p>
                    Credential URL:{" "}
                    <a
                      href={cert.url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer">
                      {cert.url}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold flex items-center mb-4">Volunteering</h2>
          <div className="space-y-4">
            {[
              {
                title: "Microsoft Learn Student Ambassador",
                role: "Community Leader",
                date: "Jan 2023 – Present",
                description:
                  "As a Microsoft Learn Student Ambassador, I help students create robust tech communities, develop technical and career skills, and organize learning events.",
                linkText: "Microsoft Profile",
                linkUrl:
                  "https://mvp.microsoft.com/en-US/studentambassadors/profile/244eb950-2577-4b5e-b71e-fadeb6c2265b",
              },
              {
                title: "DevChangeMakers",
                role: "Community Manager",
                date: "Apr 2023 – May 2024",
                description:
                  "Facilitated collaboration, organized events, and cultivated a supportive environment for students to learn and grow together.",
                linkText: "Facebook Group",
                linkUrl: "https://www.facebook.com/groups/718399220046600",
              },
              {
                title: "TensorFlow User Group Bangladesh",
                role: "Co-organizer",
                date: "May 2023 – May 2024",
                description:
                  "Supported the TensorFlow User Group in hosting events and sharing knowledge about TensorFlow applications and advancements.",
                linkText: "TensorFlow Group",
                linkUrl: "https://www.facebook.com/groups/178663161076600",
              },
              {
                title: "Josephite Math Club",
                role: "Graphic Designer",
                date: "Aug 2018 – Oct 2019",
                description:
                  "Designed posters for events like the Josephite Math Mania 2018. A 1x1 version of my poster was featured in the renowned newspaper Prothom Alo.",
                linkText: "Math Club",
                linkUrl: "https://www.facebook.com/2015JMC",
              },
            ].map((volunteer, index) => (
              <div className="border rounded-lg p-4" key={index}>
                <h3 className="text-lg font-bold mb-2">{volunteer.title}</h3>
                <p className="text-sm text-gray-600">
                  {volunteer.role} | {volunteer.date}
                </p>
                <p>{volunteer.description}</p>
                <p>
                  {volunteer.linkText}:{" "}
                  <a
                    href={volunteer.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                    {volunteer.linkText}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="border rounded-lg p-4">
          <div className=" pb-2 mb-2">
            <h2 className="text-xl font-bold">Achievements</h2>
          </div>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className=" pb-2 mb-2">
                <h3 className="text-lg font-bold">The Duke of Edinburgh&#39;s International Award</h3>
              </div>
              <div>
                <p>Bronze Standard - 2023</p>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <div className=" pb-2 mb-2">
                <h3 className="text-lg font-bold">Bangladesh Olympiad in Informatics (BDIO)</h3>
              </div>
              <div>
                <p>National Level Top 20 - 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-1"></div> {/* Extra space */}
    </div>
  );
};

export default CVPage;
