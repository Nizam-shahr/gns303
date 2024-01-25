import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  return (
    <>
      <Hero />
      <Skills />
      <CTA />
    </>
  );
}
