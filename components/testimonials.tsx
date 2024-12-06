import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    quote: "Astroship has transformed the way we manage our projects. Its well-designed interface and powerful features make it a must-have tool for any startup. We've seen a great increase in our productivity and collaboration.",
    author: "John Doe",
    role: "CEO at TechCorp",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "As a marketing professional, I love using Astroship to streamline our marketing campaigns. The automation features and data analytics help us make data-driven decisions and optimize our business strategies.",
    author: "Jane Smith",
    role: "Marketing Manager at InnovateTech",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "Astroship has revolutionized the way we handle customer support. The ticketing system and knowledge base have significantly reduced response times, leading to happier customers. Thanks to this incredible tool.",
    author: "Mike Johnson",
    role: "CTO at CloudNine",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

export function TestimonialsSection() {
  return (
    <div className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Client <span className="text-purple-600">Testimonials</span>
        </h2>
        <p className="text-muted-foreground md:text-xl">
          Astroship is trusted by the world's leading companies and brands.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="bg-muted/50">
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

