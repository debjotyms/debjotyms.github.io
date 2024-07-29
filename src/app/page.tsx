import Hero from "@/components/hero";
import Certifications from "@/components/certifications";

export default function Page() {
  return (
    <main className="px-4 flex items-center flex-col md:container">
      <Hero />
      <Certifications />
    </main>
  );
}
