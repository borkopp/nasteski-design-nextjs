import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full">
      {/* Overlay to ensure text readability */}
      <div className="absolute block lg:hidden inset-0 bg-black/10 z-10" />

      {/* Background Image with mobile optimization */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-bg.png"
          alt="Modern architectural design"
          fill
          priority
          className="object-cover lg:object-center object-[40%_center]"
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full container mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center min-h-[100vh] max-w-xl">
          <div className="py-8 md:py-0">
            <h1
              className="text-3xl max-w-[300px] lg:max-w-none sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 
 text-black drop-shadow-sm"
            >
              Алуминиумски огради и тенди
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl max-w-[250px] lg:max-w-none text-black/80 mb-6 md:mb-8
                        drop-shadow-sm font-medium "
            >
              Професионална изработка на алуминиумски огради и тенди по мера од
              различни профили на приватни и деловни објекти.
            </p>

            <Link href="#services" className="inline-block">
              <Button
                size="lg"
                className="w-fit text-base md:text-lg hover:scale-105 transition-transform"
                variant="gooeyLeft"
              >
                Дознај повеќе
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Optional: Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ArrowDown className="w-6 h-6 text-black/70" />
        </div>
      </div>
    </section>
  );
}
