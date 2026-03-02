import TestimonialCard from "./TestimonialCard";

const offerings = [
  "Private hand drum & drum kit lessons",
  "Small group classes",
  "Ensemble coaching & dance accompaniment",
  "Workshops for schools and community groups",
];

const DrummingSection = () => (
  <section id="drumming" className="border-t px-6 py-20">
    <div className="mx-auto max-w-4xl space-y-10">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Drumming &amp; Rhythm Instruction
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Trained over 20 years with Cuban, Brazilian, and West African musicians.<br />
          Apprenticed with master musicians including [Name1], [Name2], and [Name3].
        </p>
      </div>

      <ul className="grid gap-2 text-foreground">
        {offerings.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-lg font-medium italic text-muted-foreground">
        Rhythm as culture, history, and living community practice.
      </p>

      {/* Video placeholder */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">Drumming in Practice</p>
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border bg-muted text-muted-foreground">
          <span className="text-sm">Video Embed Placeholder</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <TestimonialCard
          quote="Studying rhythm with Zach deepened my understanding of tradition and ensemble playing. He teaches with patience and depth."
          attribution="Local Musician"
        />
        <TestimonialCard
          quote="Dancing with Zach on drum feels grounding and alive at the same time. There's a steady pulse underneath everything he plays — it gives you something real to move from."
          attribution="Traditional Dancer"
        />
        <TestimonialCard
          quote="Zach brings a quiet power to the drum. His rhythms carry warmth and vitality without overpowering the space. As a dancer, I feel supported and connected."
          attribution="Community Dance Artist"
        />
      </div>
    </div>
  </section>
);

export default DrummingSection;
