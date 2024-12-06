import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="container py-24">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Transform your journaling into actionable insights.
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Empower your personal growth journey with Neoclarity. Our monthly reports use AI developed in collaboration with psychology experts to analyze your journal entries, revealing patterns, identifying blind spots, and guiding you toward meaningful change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Get your Report now</Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 via-purple-50 to-blue-50 rounded-xl" />
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Dashboard Preview"
            width={800}
            height={600}
            className="relative rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}

