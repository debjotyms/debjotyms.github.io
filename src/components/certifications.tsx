import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "./ui/button";
import Link from "next/link";
import {FaAward, FaCertificate, FaGithub} from "react-icons/fa";
import Footer from "./footer";

const certifications = [
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    description:
      "Earning the DP-100 certification was a significant achievement that tested my expertise in designing and implementing data science solutions on Microsoft Azure. The Associate level exam required a deep understanding of data preparation, feature engineering, model training, and evaluation, as well as deploying and managing models.",
    image: "/images/dp100.JPG",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/debjotyms/8C564412AD29B5F2?sharingId=studentamb_249093",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    description:
      "This certification demonstrates foundational knowledge of artificial intelligence (AI) and how it can be implemented using Microsoft Azure. The AI-900 exam covers fundamental concepts related to AI, including machine learning, computer vision, natural language processing, and conversational AI.",
    image: "/images/ai900.JPG",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/debjotyms/1FA23F4AAEF5D096?sharingId=studentamb_249093",
  },
  {
    title: "GitHub Foundations",
    description:
      "The GitHub Foundations Certification Exam tested my knowledge and skills in version control and collaboration using GitHub. During the exam, I demonstrated proficiency in essential GitHub features, including repository management, branching and merging, pull requests, and collaboration workflows.",
    image: "/images/ghf.JPG",
    link: "https://www.credly.com/badges/a2d02002-8c14-4bcf-a938-cc8bf49c22a0/public_url",
  },
];

export default function Certifications() {
  return (
    <div>
      <section className="mx-auto md:grid-cols-2 grid lg:grid-cols-3 w-full gap-4 md:pb-8 lg:pb-20">
        {certifications.map((project, index) => (
          <Card key={index} className="w-full flex flex-col justify-between">
            <CardHeader>
              <div className="flex py-2 gap-3">
                <Link href={project.link} passHref>
                  <Button variant={"outline"}>
                    <FaAward className="mr-2 h-4 w-4" />
                    Show Credential
                  </Button>
                </Link>
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src={project.image}
                alt="Project"
                width={2000}
                height={2000}
                className="rounded-lg w-full aspect-[16/9] object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </section>
      <Footer />
    </div>
  );
}
