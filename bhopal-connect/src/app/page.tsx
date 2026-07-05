"use client";

import { HeroSection } from "@/components/landing/Hero";
import { StatsTicker } from "@/components/landing/StatsTicker";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { LocalizationSection } from "@/components/landing/LocalizationSection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsTicker />

      {/* We are reusing the previously robust sections but wrapping them for spacing */}
      <div className="relative z-10 bg-background">
        <ProblemSection />
        <SolutionSection />
        <LocalizationSection />

        {/* Simple Footer CTA Re-implementation for consistency */}
        <section className="py-32 relative overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container max-w-screen-xl px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Built for <span className="text-primary">Bhopal</span>.<br />
              Ready for <span className="text-accent">Growth</span>.
            </h2>
            <div className="flex justify-center gap-6 mt-12">
              <Link href="/signup">
                <Button size="xl" className="h-16 px-12 text-xl rounded-full bg-white text-black hover:bg-zinc-200 transition-colors">
                  Get Started Now <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
