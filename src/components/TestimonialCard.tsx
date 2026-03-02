interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

const TestimonialCard = ({ quote, attribution }: TestimonialCardProps) => (
  <blockquote className="rounded-lg border bg-card p-6">
    <p className="leading-relaxed text-card-foreground italic">"{quote}"</p>
    <footer className="mt-4 text-sm font-medium text-muted-foreground">— {attribution}</footer>
  </blockquote>
);

export default TestimonialCard;
