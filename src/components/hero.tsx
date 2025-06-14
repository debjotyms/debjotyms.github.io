import {Button} from "@/components/ui/button";
import {Badge} from "./ui/badge";
import Link from "next/link";
import {FaGithub, FaYoutube} from "react-icons/fa";
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

      <Badge className="my-2 px-4 py-2 text-base" variant={"default"}>
        Debjoty Mitra
      </Badge>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-balance leading-tight lg:leading-[1.1]">
        Aspiring AI Engineer
      </h1>
      <p className="text-lg font-light max-w-xl text-center text-foreground">
        Beta MLSA @ Microsoft Learn | 2x Cloud Certified | 1x GitHub Certified | 1x Kaggle Expert | YouTube Creator |
        Runner
      </p>
      <div className="flex gap-4 py-4 md:pb-10 items-center">
        <Button variant="default" style={{backgroundColor: "#141416", borderColor: "#141416", color: "#fff"}}>
          <Link href="https://blog.debjotyms.com/">Personal Blog</Link>
        </Button>
        <Link href="https://www.youtube.com/@debjotyms" target="_blank" rel="noopener noreferrer">
          <Button variant="default" style={{backgroundColor: "#FF0000", borderColor: "#FF0000", color: "#fff"}}>
            <FaYoutube className="mr-2 h-4 w-4" />
            YouTube
          </Button>
        </Link>
        <Link href="https://github.com/debjotyms" target="_blank" rel="noopener noreferrer">
          <Button variant="default" style={{backgroundColor: "#24292e", borderColor: "#24292e", color: "#fff"}}>
            <FaGithub className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </Link>
      </div>
    </section>
  );
}
