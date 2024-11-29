import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full">
      {/* Background Image */}
      <Image
        src="/hero/hero-bg.png"
        alt="Modern architectural design"
        fill
        priority
        className="object-cover"
        quality={100}
      />

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Алуминиумски огради и тенди
          </h1>

          <p className="text-lg md:text-xl max-w-md text-black/70 mb-8">
            Професионална изработка на алуминиумски огради и тенди по мера од
            различни профили на приватни и деловни објекти.
          </p>

            <Link href="#services">
            <Button size="lg" className="w-fit" variant={"gooeyLeft"}>
              Дознај повеќе
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
