import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="px-6 py-14 md:py-24">
    <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[1fr_auto]">
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          Math Educator &amp; Percussionist
        </h1>
        <p className="text-xl font-medium text-muted-foreground md:text-2xl">
          Guidance in math for homeschool and public school students.
          Drum instruction and performance rooted in decades of apprenticeship. 
        </p>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Available in Chico and online.
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
      <div className="mx-auto h-64 w-64 overflow-hidden rounded-2xl ring-2 ring-background md:h-72 md:w-72">
        <img
          src="images/zach-portrait.jpg"
          alt="Zach portrait"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
