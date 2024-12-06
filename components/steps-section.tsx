export function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Capture your thoughts",
      description: "Keep up with your journaling practice—whether it's daily entries, weekly reflections, or occasional notes. Neoclarity's platform accepts your journal entries in any format, transforming them into meaningful insights for self-discovery."
    },
    {
      number: "02",
      title: "AI-driven Analysis",
      description: "Our advanced AI, designed with insights from psychology experts, analyzes the language, tone, and themes in your journal. It identifies emotional trends, recurring topics, and potential blind spots that may be impacting your well-being."
    },
    {
      number: "03",
      title: "Expert-informed Insights",
      description: "Neoclarity's AI is crafted in collaboration with mental health professionals, ensuring the analysis is accurate, nuanced, and sensitive to your mental health journey."
    },
    {
      number: "04",
      title: "Personalized Growth Suggestions",
      description: "Each report is more than just analysis; it's a guide to help you grow. Receive tailored exercises, reflection prompts, and actionable steps to support your mental health and personal growth with confidence."
    }
  ]

  return (
    <section className="bg-muted/50">
      <div className="container py-24 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ignite Your Potential with AI-Driven Innovations
          </h2>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
            Fuel your business growth with AI solutions that are not only dynamic and adaptive but also innovative and tailored to match the scale and vision of your ambitions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="text-center space-y-4">
              <div className="text-4xl font-bold text-purple-600">{step.number}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

