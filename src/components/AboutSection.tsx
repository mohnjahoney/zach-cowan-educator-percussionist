const AboutSection = () => (
  <section id="about" className="border-t px-6 py-20">
    <div className="mx-auto max-w-4xl space-y-10">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Meet Zach</h2>

      {/* Video placeholder */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Meet Zach</p>
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border bg-muted text-muted-foreground">
          <span className="text-sm">Video Embed Placeholder</span>
        </div>
      </div>

      <p className="max-w-2xl leading-relaxed text-muted-foreground">
        Zach is an educator and percussionist with over 20 years of apprenticeship in Cuban, Brazilian, and African music traditions. He has spent more than a decade supporting math learners in public school classrooms and now works independently with students and homeschool families. His work bridges rhythm, history, and meaningful learning.
      </p>
    </div>
  </section>
);

export default AboutSection;
