import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-purple-600" />
      <div className="container relative py-24">
        <div className="mx-auto max-w-[800px] text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Ready to begin?
          </h1>
          <p className="mx-auto max-w-[600px] text-xl text-purple-100">
            Take the first step in your self-discovery journey with Neoclarity. Receive your first report free and start gaining insights today!
          </p>
          <div>
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

