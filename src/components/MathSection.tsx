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
          quote="Zach was a teacher at my children's after-school program a few years back.
Both my son and daughter enjoyed singing and learning with Zach. He always made
them feel welcome and helped them both learn and grow. Last school year, Zach
became my son's 8th grade math tutor. Zach helped him to be successful and gain
straight As in math. Zach took time to get to know him as a learner and person, and my
son looked forward to his math tutoring sessions. Zach's kind heart, patience, and
desire to help children learn made a positive impact on my children."
          attribution="Holly D., homeschool parent, Chico"
        />
        <TestimonialCard
          quote="Zach has both acted as a teacher and tutor for my son over a 7-year period. Zach has
always been responsive to my son's needs, offering comfort, encouragement, and
guidance. He has helped him in his math studies and keeps my son on track to
complete his homework in a timely manner. He has always checked in with me
concerning my son's progress in tutoring in the school setting; his interactions with my
son have been positive and encouraging."
          attribution="Andie S., homeschool parent"
        />
        <TestimonialCard
          quote="Zach taught music to our children and tutored our daughter privately in drums and
guitar during the 2024-2025 school year. He was always prepared, respectful, and
engaging-bringing joy and energy into our home each week."
          attribution="Julie E., parent of 4 tutoring students"
        />
      </div>
    </div>
  </section>
);

export default MathSection;
