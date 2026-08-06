import TestimonialCard from "./TestimonialCard";

const offerings = [
  "Elementary & middle school math tutoring",
  "Structured homeschool learning guidance",
  "One-on-one or small group sessions",
  "In-person in Chico or online",
  "Starting at $50/hour (ask about group rates)",
];

const MathSection = () => (
  <section id="math" className="px-6 py-14">
    <div className="mx-auto max-w-4xl space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="whitespace-nowrap text-3xl font-bold tracking-tight md:text-4xl">
          Mathematics &amp; Homeschool Support
        </h2>
      </div>

      <ul className="grid gap-3 border-l-2 border-accent pl-4 text-base text-foreground">
        {offerings.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="text-xl font-medium italic text-muted-foreground">
        In-person in Chico or online. One-on-one or small group.
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
