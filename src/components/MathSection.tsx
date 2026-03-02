import TestimonialCard from "./TestimonialCard";

const offerings = [
  "Elementary & middle school math tutoring",
  "Structured homeschool learning guidance",
  "One-on-one or small group sessions",
  "In-person in Chico or online",
  "Starting at $60/hour",
];

const MathSection = () => (
  <section id="math" className="border-t px-6 py-20">
    <div className="mx-auto max-w-4xl space-y-10">
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        Mathematics &amp; Homeschool Support
      </h2>

      <ul className="grid gap-2 text-foreground">
        {offerings.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-lg font-medium italic text-muted-foreground">
        Clear structure. Patient guidance. Lasting confidence.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <TestimonialCard
          quote="Zach helped my son rebuild his confidence in math. His calm and structured approach made learning feel manageable again."
          attribution="Parent, Chico"
        />
        <TestimonialCard
          quote="Zach teaches the way he lives — thoughtfully, patiently, and with deep respect for the work. Our family has always appreciated his calm presence and steady guidance."
          attribution="Parent, Chico"
        />
      </div>
    </div>
  </section>
);

export default MathSection;
