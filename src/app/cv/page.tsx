// app/cv/page.jsx

'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FaDownload } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const CVPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Download Button */}
      <div className="flex justify-center mb-8">
        <a href="/Debjoy_Mitra_CV.pdf" download>
          <Button variant="primary" className="flex items-center">
            <FaDownload className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </a>
      </div>

      {/* Header with Links */}
      <div className="flex justify-center space-x-6 mb-8">
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
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            In my second year of college, I became interested in <strong>Machine Learning</strong>. Since then, along with other development practices, I've been teaching myself AI and ML. Additionally, I practice regularly on <strong>LeetCode</strong>. I am interested in <strong>Computer Vision, LLMs, and Predictive Analysis</strong>, and I've successfully completed several projects in these areas. Furthermore, I have a solid understanding of <strong>cloud concepts</strong> and hands-on experience with <strong>Microsoft Azure</strong>. I am also <strong>2x cloud certified</strong>, holding the <strong>DP-100: Microsoft Azure Data Scientist Associate</strong> certification. To complement this, I utilize version control systems like <strong>Git and GitHub</strong> to manage my projects efficiently. I also have a <strong>YouTube Channel</strong> and <strong>Personal Blog</strong> where I try to share everything I learn.
          </p>
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">BRAC University, Dhaka</h3>
            <p className="text-sm text-gray-600">Jan 2022 -- Dec 2025</p>
            <p><em>Bachelor of Science -- BS, Computer Science</em></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">St. Joseph Higher Secondary School, Dhaka</h3>
            <p className="text-sm text-gray-600">Jul 2018 -- Oct 2020</p>
            <p><em>Higher Secondary -- Science</em></p>
            <p><strong>GPA:</strong> 5.00/5.00</p>
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Markopolo.ai</h3>
            <p className="text-sm text-gray-600">Feb 2024 -- Present</p>
            <p><em>Data Science Intern</em></p>
            <ul className="list-disc list-inside mt-2">
              <li>
                As a Data Science Intern, I focus on tasks like gathering data from the internet (using <strong>Python scripts and manual methods</strong>), identifying important words, labeling data, analyzing brands, and understanding customer sentiment.
              </li>
              <li>
                Worked on these tasks for two major <strong>MFS and Beverage</strong> brands in Bangladesh.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Projects Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Aruco Marker Distance Measurement */}
          <div className="mb-4">
            <h4 className="text-md font-semibold">Aruco Marker Distance Measurement</h4>
            <ul className="list-disc list-inside mt-2">
              <li>
                Developed a system to accurately measure distances using <strong>Aruco markers</strong>. Implemented <strong>Computer Vision</strong> techniques to detect markers in images or video streams, enabling precise distance calculations.
              </li>
              <li>
                Project Link: <a href="https://github.com/debjoytms/aruco-marker-distance-measurement" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">github.com/debjoytms/aruco-marker-distance-measurement</a>
              </li>
            </ul>
          </div>

          {/* Face Tracking */}
          <div className="mb-4">
            <h4 className="text-md font-semibold">Face Tracking</h4>
            <ul className="list-disc list-inside mt-2">
              <li>
                Created a face tracking system utilizing the <strong>OpenCV</strong> library. Developed algorithms to detect and track human faces in real-time from video input.
              </li>
              <li>
                Project Link: <a href="https://github.com/debjoytms/face-tracking-opencv" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">github.com/debjoytms/face-tracking-opencv</a>
              </li>
            </ul>
          </div>

          {/* Intrusion Detection System */}
          <div>
            <h4 className="text-md font-semibold">Intrusion Detection System</h4>
            <ul className="list-disc list-inside mt-2">
              <li>
                Created an intrusion detection system using a dataset from <strong>Kaggle</strong>. Implemented algorithms to analyze network traffic and identify potential security breaches.
              </li>
              <li>
                Project Link: <a href="https://github.com/debjoytms/Intrusion-Detection-Streamlit-CSE484" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">github.com/debjoytms/Intrusion-Detection-Streamlit-CSE484</a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Technical Skills Section */}
      <Card className="mb-6">
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
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Microsoft Certified: Azure Data Scientist Associate</h3>
            <p className="text-sm text-gray-600">Jun 2024</p>
            <p><strong>Credential ID:</strong> 8C564412AD29B5F2</p>
            <p>
              Credential URL: <a href="https://learn.microsoft.com/api/credentials/share/en-us/debjoytms/8C564412AD29B5F2" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Credential Link</a>
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold">Microsoft Certified: Azure AI Fundamentals</h3>
            <p className="text-sm text-gray-600">Apr 2024</p>
            <p><strong>Credential ID:</strong> 1FA23F4AAEF5D096</p>
            <p>
              Credential URL: <a href="https://learn.microsoft.com/api/credentials/share/en-us/debjoytms/1FA23F4AAEF5D096" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Credential Link</a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">GitHub Foundations</h3>
            <p className="text-sm text-gray-600">Jun 2024</p>
            <p>
              Credential URL: <a href="https://www.credly.com/go/7QpDtNlH" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Credly Link</a>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Volunteering Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Volunteering</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Microsoft Learn Student Ambassador</h3>
            <p className="text-sm text-gray-600">Jan 2023 -- Present</p>
            <p><em>Community Leader</em></p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Learn Student Ambassadors are a global group of campus leaders who help create robust tech communities and develop technical and career skills for the future.
              </li>
              <li>
                Profile Link: <a href="https://my.microsoft.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">my.microsoft.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">DevChangeMakers</h3>
            <p className="text-sm text-gray-600">Apr 2023 -- May 2024</p>
            <p><em>Community Manager</em></p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Facilitated collaboration, organized events, and cultivated a supportive environment for students.
              </li>
              <li>
                Community Link: <a href="https://facebook.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">facebook.com</a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Achievements Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li><strong>The Duke of Edinburgh's International Award</strong>, Bronze Standard -- 2023</li>
            <li><strong>Bangladesh Olympiad in Informatics (BDIO)</strong>, National Level Top 20 -- 2019</li>
          </ul>
        </CardContent>
      </Card>

      {/* Relevant Coursework Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Relevant Coursework</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Computer Science:</strong> Object-Oriented Programming, Data Structures, Algorithms, DBMS</p>
          <p><strong>Mathematics:</strong> Linear Algebra, Probability Theory, Statistics, Calculus</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CVPage;