import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FeaturesGrid } from "@/components/features-grid"
import { StepsSection } from "@/components/steps-section"
import { MoreFeatures } from "@/components/more-features"
import { TestimonialsSection } from "@/components/testimonials"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FeaturesGrid />
        <StepsSection />
        <MoreFeatures />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  )
}


