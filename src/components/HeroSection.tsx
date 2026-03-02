import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="px-6 py-20 md:py-28">
    <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[1fr_auto]">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          Experienced Math Educator &amp; Percussionist
        </h1>
        <p className="text-lg font-medium text-muted-foreground md:text-xl">
          Clear, confidence-building math support in Chico and online.
        </p>
        <p className="max-w-xl leading-relaxed text-muted-foreground">
          With over a decade in public school classrooms and years of independent tutoring, I help students build strong foundations in mathematics through structure, patience, and thoughtful guidance. I also teach hand drums and drum kit rooted in African and Afro-diasporic traditions.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button asChild size="lg">
            <a href="#contact">Book Math Support</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#drumming">Drumming Lessons &amp; Workshops</a>
          </Button>
        </div>
      </div>

      {/* Portrait placeholder */}
      <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-muted text-muted-foreground md:h-64 md:w-64">
        <span className="text-sm">Portrait</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
