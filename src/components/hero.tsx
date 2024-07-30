import {Button} from "@/components/ui/button";
import {Badge} from "./ui/badge";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="w-32 h-32 overflow-hidden rounded-full border-gray-300 mb-4">
        <Image
          src="/images/me.jpg" // Replace with your image path
          alt="Descriptive text" // Replace with appropriate alt text
          layout="responsive"
          width={96} // Width of the image
          height={96} // Height of the image
          className="object-cover"
        />
      </div>

      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-30 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-3xl blur-lg group-hover:opacity-50 group-hover:-inset-1 group-hover:duration-1000 animate-tilt"></div>
        <Badge className="my-2 px-4 py-2 text-lg glow" variant={"secondary"}>
          Debjoty Mitra
        </Badge>
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
        Aspiring MLOps Engineer
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
        Beta MLSA @ Microsoft Learn | 2x Cloud Certified | 1x GitHub Certified | 1x Kaggle Expert | YouTube Creator |
        Runner
      </p>
      <div className="flex gap-4 py-4 md:pb-10 items-center">
        <Button variant={"default"}>
          <Link href="https://debjotyms.hashnode.dev/">Personal Blog</Link>
        </Button>
        <Link href="https://github.com/debjotyms" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </div>
    </section>
  );
}
