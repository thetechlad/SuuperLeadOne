import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Mail, Linkedin, ShieldCheck, MessageCircle, Zap, Star, Gift } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447412823824";

interface PricingOption {
  label: string;
  price: string;
  unit?: string;
}

interface PackageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  pricing: PricingOption[];
  features: string[];
  featured?: boolean;
  badge?: string;
  freeBadge?: string;
}

function PackageCard({ icon, title, description, pricing, features, featured, badge, freeBadge }: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1 ${
        featured ? "gradient-border-featured glow-primary" : "gradient-border"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs font-bold tracking-wide uppercase shadow-lg">
            {badge}
          </Badge>
        </div>
      )}

      <div className="flex flex-col flex-1 rounded-2xl bg-card p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${featured ? "bg-primary/15" : "bg-secondary"}`}>
            {icon}
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>

        {/* Pricing */}
        <div className="space-y-3 mb-6">
          {pricing.map((p, i) => (
            <div key={i} className={`rounded-xl p-4 ${featured && i === pricing.length - 1 ? "bg-primary/10 border border-primary/20" : "bg-secondary/60"}`}>
              <div className="text-xs text-muted-foreground mb-1">{p.label}</div>
              <div className="flex items-baseline gap-1">
                <span className={`font-display text-2xl font-bold ${featured && i === pricing.length - 1 ? "text-gradient" : "text-foreground"}`}>
                  {p.price}
                </span>
                {p.unit && <span className="text-muted-foreground text-xs">{p.unit}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Free addon badge */}
        {freeBadge && (
          <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-gold/10 border border-gold/20">
            <Gift className="w-4 h-4 text-gold shrink-0" />
            <span className="text-xs font-semibold text-gold">{freeBadge}</span>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-foreground">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant={featured ? "gold" : "buy"} size="lg" className="w-full text-base rounded-xl h-12">
            <MessageCircle className="w-4 h-4 mr-1" />
            Buy Now
          </Button>
        </a>
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-6">
            <Zap className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Premium Data Tools</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            Supercharge Your
            <span className="text-gradient block sm:inline"> Outreach</span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Verified emails, LinkedIn data, and email verification — everything you need to scale your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <PackageCard
            icon={<Mail className="w-5 h-5 text-primary" />}
            title="100M Emails"
            description="Massive email database for cold outreach at scale. Get verified contacts ready to convert."
            pricing={[
              { label: "10 Million Emails", price: "PKR 5,000" },
              { label: "Full 100M Database", price: "PKR 20,000" },
            ]}
            features={[
              "100 million verified emails",
              "Categorized by industry & niche",
              "Bulk export in CSV / Excel",
              "Regular database updates",
            ]}
            featured
            badge="Best Value"
            freeBadge="FREE Email Verifier + LinkedIn Scraper included!"
          />

          <PackageCard
            icon={<Linkedin className="w-5 h-5 text-primary" />}
            title="LinkedIn Scraper"
            description="Extract targeted leads from LinkedIn with powerful filters and automation."
            pricing={[
              { label: "Full Access", price: "PKR 9,999" },
            ]}
            features={[
              "Unlimited LinkedIn scraping",
              "Export names, emails & titles",
              "Advanced search filters",
              "Easy-to-use interface",
            ]}
            freeBadge="FREE Email Verifier included!"
          />

          <PackageCard
            icon={<ShieldCheck className="w-5 h-5 text-primary" />}
            title="Email Verifier"
            description="Clean your email lists and boost deliverability with real-time verification."
            pricing={[
              { label: "Full Access", price: "PKR 10,000" },
            ]}
            features={[
              "Real-time email validation",
              "Catch-all detection",
              "Reduce bounce rates to near zero",
              "Bulk verification support",
            ]}
          />
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl gradient-border">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold animate-pulse-glow" />
              <span className="text-sm font-medium text-muted-foreground">Ready to get started?</span>
              <Star className="w-4 h-4 text-gold animate-pulse-glow" />
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="buy" size="lg" className="rounded-xl h-12 px-8 text-base gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp: +44 7412 823824
              </Button>
            </a>
            <p className="text-xs text-muted-foreground">Instant reply • Secure payment • 24/7 support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
