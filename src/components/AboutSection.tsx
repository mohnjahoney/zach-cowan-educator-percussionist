const AboutSection = () => (
  <section id="about" className="px-6 py-14">
    <div className="mx-auto max-w-4xl space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap text-3xl font-bold tracking-tight md:text-4xl">Meet Zach</h2>
      </div>

      {/* Video placeholder */}
      {/* <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Meet Zach</p>
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border bg-muted text-muted-foreground">
          <span className="text-sm">Video Embed Placeholder</span>
        </div>
      </div> */}
      {/* Meet Zach Video */}
      <div className="space-y-2">
        <p className="text-base font-medium text-muted-foreground">
          Meet Zach
        </p>

        <div className="overflow-hidden rounded-lg border border-foreground/10 shadow-sm">
          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/6eNn59XvcgU"
            title="Meet Zach"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Zach has spent more than a decade in public school classrooms and now works independently with homeschool and public school families throughout Chico. He's also a percussionist, apprenticed for over 20 years in Cuban, Brazilian, and West African traditions. Patient, steady, and direct — the same approach carries into both the classroom and the drum circle.
      </p>
    </div>
  </section>
);

export default AboutSection;


