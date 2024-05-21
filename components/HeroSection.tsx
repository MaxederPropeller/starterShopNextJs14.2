import Image from "next/image";
import H1 from "./styledComponents/h1";
import H2 from "./styledComponents/h2";
import P from "./styledComponents/p";

import HeroImage from "@/public/next.svg";

export default function HeroSection() {
  const content = {
    title: "Hallo Adrienne",
    subtitle: "A starter for Next.js with TypeScript, Tailwind CSS, and ESLint.",
    description: "Get started by editing the files in the `pages` directory.",
  };

  return (
    <div className="flex h-screen flex-col justify-center relative">
        {/* <Image 
          src={HeroImage}
          alt="Hero Image"
          width={500}
          height={500}

          className="absolute top-0 right-0 z-0"
        /> */}

        <div className="absolute top-0 right-0 -z-10 bg-slate-400 h-full w-full" />
        <H1 content={content.title} />
        <H2 content={content.subtitle} />
        <P content={content.description} />
  
    </div>
  );
}
