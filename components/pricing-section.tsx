import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Ideal for individuals starting their journey",
    features: [
      "1 in-depth AI-generated report per month",
      "Access to standard therapeutic insights",
      "Basic progress tracking tools",
      "Email support",
      "Self-guided recommendations"
    ],
    cta: "Get Started",
    ctaVariant: "outline" as const,
    color: "text-purple-600"
  },
  {
    name: "Enhanced",
    price: "149",
    description: "Perfect for consistent self-care with professional input",
    features: [
      "Up to 3 reports per month",
      "Therapist-reviewed insights",
      "Enhanced progress tracking and analytics",
      "Priority email support",
      "Personalized self-care strategies"
    ],
    cta: "Get Started",
    ctaVariant: "default" as const,
    popular: true
  },
  {
    name: "Professional",
    price: "Custom",
    description: "Designed for clinics, therapists, or advanced care needs",
    features: [
      "Custom number of reports per month",
      "Full team collaboration with therapists",
      "Dedicated account manager",
      "Integration with EHR systems",
      "24/7 support and custom solutions"
    ],
    cta: "Contact us",
    ctaVariant: "outline" as const,
    color: "text-purple-600"
  }
]

export function PricingSection() {
  return (
    <section className="container py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter">Pricing</h2>
        <p className="text-xl text-muted-foreground">
          Simple & Predictable pricing. No Surprises.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-purple-600 shadow-lg' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <Badge variant="secondary" className="bg-red-500 text-white hover:bg-red-600">
                  Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <h3 className={`text-xl font-semibold ${plan.color || ''}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">
                  {typeof plan.price === 'string' ? (
                    plan.price === 'Custom' ? plan.price : `$${plan.price}`
                  ) : (
                    `$${plan.price}`
                  )}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant={plan.ctaVariant} className="w-full">
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

