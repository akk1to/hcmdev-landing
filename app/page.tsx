import { HeroSection } from "./_sections/hero"
import { CompaniesSection } from "./_sections/companies"
import { ProductsSection } from "./_sections/products"
import { TeamSection } from "./_sections/team"
import { TestimonialsSection } from "./_sections/testimonials"
import { PricingSection } from "./_sections/pricing"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CompaniesSection />
      <ProductsSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
    </main>
  )
}
