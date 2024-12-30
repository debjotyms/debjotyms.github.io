'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        <a href="https://github.com/debjoytms" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/debjoytms" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:debjoytms@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            In my second year of college, I became interested in <strong>Machine Learning</strong>. Since then, along with other development practices, I&#39;ve been teaching myself AI and ML. Additionally, I practice regularly on <strong>LeetCode</strong>. I am interested in <strong>Computer Vision, LLMs, and Predictive Analysis</strong>, and I&#39;ve successfully completed several projects in these areas. Furthermore, I have a solid understanding of <strong>cloud concepts</strong> and hands-on experience with <strong>Microsoft Azure</strong>. I am also <strong>2x cloud certified</strong>, holding the <strong>DP-100: Microsoft Azure Data Scientist Associate</strong> certification. To complement this, I utilize version control systems like <strong>Git and GitHub</strong> to manage my projects efficiently. I also have a <strong>YouTube Channel</strong> and <strong>Personal Blog</strong> where I try to share everything I learn.
          </p>
        </CardContent>
      </Card>

      {/* Nested Card Sections */}
      <div className="space-y-6">
        {/* Education Section */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>BRAC University, Dhaka</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Jan 2022 - Dec 2025</p>
                <p><em>Bachelor of Science - BS, Computer Science</em></p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>St. Joseph Higher Secondary School, Dhaka</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Jul 2018 - Oct 2020</p>
                <p><em>Higher Secondary - Science</em></p>
                <p><strong>GPA:</strong> 5.00/5.00</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Markopolo.ai</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Feb 2024 - Present</p>
                <p><em>Data Science Intern</em></p>
                <ul className="list-disc list-inside mt-2">
                  <li>
                    Tasks included gathering data from the internet using <strong>Python scripts</strong> and manual methods, identifying keywords, labeling data, analyzing brands, and understanding customer sentiment.
                  </li>
                  <li>
                    Worked with <strong>MFS and Beverage</strong> brands in Bangladesh.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            {[
              {
                title: "Aruco Marker Distance Measurement",
                description:
                  "Developed a system to accurately measure distances using Aruco markers. Implemented Computer Vision techniques to detect markers in images or video streams, enabling precise distance calculations.",
                link: "https://github.com/debjoytms/aruco-marker-distance-measurement",
              },
              {
                title: "Face Tracking",
                description:
                  "Created a face tracking system utilizing the OpenCV library. Developed algorithms to detect and track human faces in real-time from video input.",
                link: "https://github.com/debjoytms/face-tracking-opencv",
              },
              {
                title: "Intrusion Detection System",
                description:
                  "Created an intrusion detection system using a dataset from Kaggle. Implemented algorithms to analyze network traffic and identify potential security breaches.",
                link: "https://github.com/debjoytms/Intrusion-Detection-Streamlit-CSE484",
              },
            ].map((project, index) => (
              <Card className="mb-4" key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                  <p>
                    Project Link:{" "}
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link}
                    </a>
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Technical Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Programming Languages:</strong> C++, Python</p>
            <p><strong>ML/AI:</strong> NumPy, Pandas, Seaborn, Scikit-learn, TensorFlow, PyTorch</p>
            <p><strong>Web Technologies:</strong> HTML, CSS, Bootstrap, Django</p>
            <p><strong>DBMS:</strong> MySQL, SQLite</p>
          </CardContent>
        </Card>

        {/* Certifications Section */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            {[
              {
                title: "Microsoft Certified: Azure Data Scientist Associate",
                date: "Jun 2024",
                id: "8C564412AD29B5F2",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/debjoytms/8C564412AD29B5F2",
              },
              {
                title: "Microsoft Certified: Azure AI Fundamentals",
                date: "Apr 2024",
                id: "1FA23F4AAEF5D096",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/debjoytms/1FA23F4AAEF5D096",
              },
              {
                title: "GitHub Foundations",
                date: "Jun 2024",
                url: "https://www.credly.com/go/7QpDtNlH",
              },
            ].map((cert, index) => (
              <Card className="mb-4" key={index}>
                <CardHeader>
                  <CardTitle>{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{cert.date}</p>
                  <p><strong>Credential ID:</strong> {cert.id || "N/A"}</p>
                  <p>
                    Credential URL:{" "}
                    <a
                      href={cert.url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.url}
                    </a>
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Achievements Section */}
        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>The Duke of Edinburgh&#39;s International Award</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Bronze Standard - 2023</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bangladesh Olympiad in Informatics (BDIO)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>National Level Top 20 - 2019</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="py-1"></div> {/* Extra space */}
    </div>
  );
};

export default CVPage;