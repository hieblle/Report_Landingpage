import { Badge } from "@/components/ui/badge"
import { FileText, Trophy, Box, Layers, Image, Users } from 'lucide-react'

const features = [
  {
    title: "Deep Emotional Insights",
    description: "Unlock a detailed analysis of your emotional patterns, uncovering recurring themes and stressors, alongside strategies to harness your strengths.",
    icon: FileText
  },
  {
    title: "Customized Growth Roadmap",
    description: "Gain tailored recommendations for achieving a better work-life balance, improving relationships, and enhancing overall well-being through actionable insights.",
    icon: Trophy
  },
  {
    title: "Resilience Tracking",
    description: "Discover your Resilience Score, a unique measure of your psychological strength, complete with visual data and breakdowns across areas like emotional stability, self-efficacy, and physical health.",
    icon: Box
  },
  {
    title: "Stress Management Toolkit",
    description: "Learn about energy-giving and draining activities in your daily life, with strategies to maximize positivity and minimize stressors",
    icon: Layers
  },
  {
    title: "Reflections & Goals",
    description: "Access reflection questions designed to deepen self-awareness and align your actions with long-term aspirations.",
    icon: Image
  },
  {
    title: "Holistic Perspective",
    description: "Enjoy personalized narratives and stories derived from your entries, bringing humor and relatability to your experiences while fostering self-understanding.",
    icon: Users
  }
]

export function MoreFeatures() {
  return (
    <section className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <Badge variant="purple" className="mb-4">MORE FEATURES</Badge>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Unlock the power of your story
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Transform your journal into a personalized roadmap for emotional clarity, resilience, and personal growth.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = feature.icon
          return (
            <div key={i} className="space-y-4">
              <div className="bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

