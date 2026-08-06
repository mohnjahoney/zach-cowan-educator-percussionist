interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

const TestimonialCard = ({ quote, attribution }: TestimonialCardProps) => (
  <blockquote className="rounded-lg border bg-card p-6">
    <p className="text-lg leading-relaxed text-card-foreground italic">"{quote}"</p>
    <footer className="mt-4 text-base font-medium text-muted-foreground">— {attribution}</footer>
  </blockquote>
);

export default TestimonialCard;
