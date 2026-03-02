import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:zach@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t px-6 py-20">
      <div className="mx-auto max-w-4xl space-y-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Get in Touch</h2>

        <p className="max-w-xl leading-relaxed text-muted-foreground">
          Tell me what you're looking for — math support, drumming lessons, or a workshop — and I'll reply with a simple next step.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-5 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail size={16} className="shrink-0 text-accent" />
              <span>zach@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone size={16} className="shrink-0 text-accent" />
              <span>(530) 555-0000</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={16} className="shrink-0 text-accent" />
              <span>Chico, CA</span>
            </div>
            <p className="pt-2 text-muted-foreground">Available in-person and online.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
