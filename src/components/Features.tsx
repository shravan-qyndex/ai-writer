import React from 'react';
import { Zap, Shield, BarChart3, Globe, Clock, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Zap,
    name: "AI-Powered Suggestions",
    description:
      "Get intelligent recommendations to enhance your writing style, tone, and clarity.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Shield,
    name: "Plagiarism Detection",
    description:
      "Ensure originality with built-in plagiarism checks for all your content.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: BarChart3,
    name: "Content Analytics",
    description:
      "Track engagement metrics and optimize your content for better performance.",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Globe,
    name: "Multilingual Support",
    description:
      "Write and edit in multiple languages with seamless translation capabilities.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: Clock,
    name: "Time-Saving Automation",
    description:
      "Automate repetitive tasks like formatting and proofreading to save time.",
    gradient: "from-cyan-400 to-sky-500",
  },
  {
    icon: HeartHandshake,
    name: "Collaborative Tools",
    description:
      "Work with your team in real-time with shared editing and feedback features.",
    gradient: "from-rose-400 to-red-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tools That Empower Your Creativity
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From brainstorming to publishing, we provide everything you need to create impactful content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.name}
              className="group relative rounded-2xl border border-border/60 bg-background p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} mb-4 shadow-sm`}
              >
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.name}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}