import TestimonialCard from "./TestimonialCard";

const offerings = [
  "Private hand drum & drum kit lessons",
  "Small group classes",
  "Ensemble coaching & dance accompaniment",
  "Workshops for schools and community groups",
];

const DrummingSection = () => (
  <section id="drumming" className="px-6 py-14">
    <div className="mx-auto max-w-4xl space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-4">
          <h2 className="whitespace-nowrap text-3xl font-bold tracking-tight md:text-4xl">
            Drumming &amp; Rhythm Instruction
          </h2>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">
          Trained over 20 years with Cuban, Brazilian, and West African musicians.<br />
          Apprenticed with master musicians including [Name1], [Name2], and [Name3].
        </p>
      </div>

      <ul className="grid gap-3 border-l-2 border-accent pl-4 text-base text-foreground">
        {offerings.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="text-xl font-medium italic text-muted-foreground">
        Rhythm as culture, history, and living community practice.
      </p>

      <div className="grid h-[clamp(24rem,42vw,32rem)] grid-cols-1 gap-4 md:grid-cols-[2fr_3fr] md:gap-5">
        <div className="overflow-hidden rounded-lg border border-foreground/10 bg-muted shadow-sm">
          <video
            className="h-full w-full object-cover object-center"
            controls
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}images/hand-drumming-poster.jpg`}
            aria-label="Zach playing hand drums at an outdoor performance"
          >
            <source
              src={`${import.meta.env.BASE_URL}videos/hand-drumming.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="overflow-hidden rounded-lg border border-foreground/10 bg-muted shadow-sm">
          <img
            className="h-full w-full object-cover object-center"
            src={`${import.meta.env.BASE_URL}images/drumming-with-marimba.png`}
            alt="Zach playing congas alongside a marimba player"
          />
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
