import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does Neoclarity protect my privacy?",
    answer: "Your privacy is our top priority. All journal entries are encrypted end-to-end, and we follow strict data protection protocols. Our AI analysis happens locally on your device, ensuring your personal thoughts remain completely private. We never share or sell your data, and you have full control over what information you choose to share."
  },
  {
    question: "Can I import my existing journal entries?",
    answer: "Yes! Neoclarity supports importing journal entries from various formats including plain text, PDF, and popular journaling apps. Our smart import feature preserves your entry dates and formatting, making the transition seamless. You can also manually copy-paste entries or start fresh with our platform."
  },
  {
    question: "How often do I receive insights reports?",
    answer: "You receive a comprehensive insights report once a month, typically at the end of each month. However, you can customize this frequency based on your preferences. Premium users can access on-demand reports and real-time insights whenever they need them."
  },
  {
    question: "What kind of patterns can Neoclarity identify?",
    answer: "Our AI can identify various patterns including emotional trends, recurring themes, behavioral cycles, and potential triggers. It analyzes factors like mood variations, energy levels, sleep patterns, and their correlations. The system also recognizes personal growth opportunities and areas where you might benefit from additional support."
  },
  {
    question: "Do I need to write every day for the AI to work effectively?",
    answer: "No, Neoclarity is designed to work with any journaling frequency. Whether you write daily, weekly, or occasionally, our AI adapts to your pattern and provides meaningful insights. The more you write, the more detailed the analysis can be, but quality insights are possible even with occasional entries."
  }
]

export function FAQSection() {
  return (
    <section className="bg-muted/50">
      <div className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Find Answers to Your Questions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Everything you need to know about Neoclarity and how it can help transform your journaling practice.
          </p>
        </div>

        <div className="mx-auto max-w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

