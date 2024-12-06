import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const features = [
  {
    title: "Long-term perspective",
    description: "Gain insights you never knew were there.",
    badge: "Timeline",
    badgeVariant: "purple" as const,
    image: "/placeholder.svg?height=400&width=600",
    size: "large" as const
  },
  {
    title: "Make sense of your data",
    description: "We show you how to turn your notes into actionable changes.",
    badge: "Steps",
    badgeVariant: "secondary" as const,
    image: "/placeholder.svg?height=400&width=500",
    size: "medium" as const
  },
  {
    title: "Identify Patterns",
    description: "Discover what’s holding you back—and how to break free.",
    badge: "Recognition",
    badgeVariant: "secondary" as const,
    image: "/placeholder.svg?height=300&width=400",
    size: "small" as const
  },
  {
    title: "Deep Analysis",
    description: "Dive into your psyche further than conversations alone can take you.",
    badge: "AI & Psychologists",
    badgeVariant: "purple" as const,
    image: "/placeholder.svg?height=300&width=400",
    size: "small" as const
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and protected. Only you have access to your personal insights.",
    badge: "local",
    badgeVariant: "secondary" as const,
    image: "/placeholder.svg?height=300&width=400",
    size: "small" as const
  }
]

export function FeaturesGrid() {
  return (
    <section className="container py-24">
      <div className="space-y-6 text-center md:space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Uncover patterns that can <span className="text-purple-600">transform your life</span>
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Our journal report goes deeper than traditional therapy: with long-term tracking and in-depth analyses, we reveal blind spots and recurring patterns that often remain hidden, even during therapy.
        </p>
      </div>

      <div className="pt-12 space-y-8">
        {/* First row - two different sized cards */}
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <FeatureCard feature={features[0]} />
          </div>
          <div className="md:col-span-2">
            <FeatureCard feature={features[1]} />
          </div>
        </div>

        {/* Second row - three equal sized cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.slice(2).map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-muted/50 p-2 transition-all hover:shadow-xl">
      <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-4">
        <Badge variant={feature.badgeVariant} className="mb-2">
          {feature.badge}
        </Badge>
        <h3 className="text-2xl font-bold">{feature.title}</h3>
        <p className="text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </div>
  )
}

