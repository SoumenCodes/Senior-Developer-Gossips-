import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Zap, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 animate-fade-in">
            Senior Developer Gossips
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up">
            Where seasoned devs spill the tea on tech
          </p>
        </header>

        <section className="hero-section relative bg-card rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-left">
                Join the Elite Chat
              </h2>
              <p className="text-lg md:text-xl mb-6 animate-fade-in-left delay-100">
                Connect with fellow senior developers, share experiences, and
                stay updated with the latest industry gossip.
              </p>
              <Button size="lg" className="animate-bounce">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 animate-float">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full h-full bg-card rounded-full border-4 border-primary flex items-center justify-center">
                  <MessageSquare size={64} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<MessageSquare size={40} />}
            title="Exclusive Chats"
            description="Engage in private conversations with elite developers from around the world."
          />
          <FeatureCard
            icon={<Users size={40} />}
            title="Community Forums"
            description="Participate in topic-specific forums and share your expertise."
          />
          <FeatureCard
            icon={<Zap size={40} />}
            title="Real-time Updates"
            description="Stay informed with instant notifications on the latest tech gossip."
          />
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
