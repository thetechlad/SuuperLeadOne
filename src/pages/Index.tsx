import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Check,
  Mail,
  Linkedin,
  ShieldCheck,
  MessageCircle,
  Zap,
  Star,
  Gift,
  BookOpen,
  Video,
  BrainCircuit,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/447412823824";
const GUMROAD_LINK = "https://gumroad.com";

/* ───────── Types ───────── */
interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  freeBadge?: string;
  link: string;
}

/* ───────── Product Card ───────── */
function ProductCard({
  icon,
  title,
  description,
  price,
  originalPrice,
  features,
  featured,
  badge,
  freeBadge,
  link,
}: ProductCardProps) {
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
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`flex items-center justify-center w-11 h-11 rounded-xl ${
              featured ? "bg-primary/15" : "bg-secondary"
            }`}
          >
            {icon}
          </div>
          <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>

        {/* Price */}
        <div className="rounded-xl p-4 bg-secondary/60 mb-6">
          <div className="flex items-baseline gap-2">
            <span className={`font-display text-3xl font-bold ${featured ? "text-gradient" : "text-foreground"}`}>
              {price}
            </span>
            {originalPrice && (
              <span className="text-muted-foreground text-sm line-through">{originalPrice}</span>
            )}
          </div>
        </div>

        {freeBadge && (
          <div className="flex items-center gap-2 mb-5 px-3 py-2 rounded-lg bg-gold/10 border border-gold/20">
            <Gift className="w-4 h-4 text-gold shrink-0" />
            <span className="text-xs font-semibold text-gold">{freeBadge}</span>
          </div>
        )}

        <ul className="space-y-2.5 mb-8 flex-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-secondary-foreground">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button variant={featured ? "gold" : "buy"} size="lg" className="w-full text-base rounded-xl h-12 gap-2">
            <ExternalLink className="w-4 h-4" />
            Buy on Gumroad
          </Button>
        </a>
      </div>
    </div>
  );
}

/* ───────── Mini Product Card ───────── */
interface MiniProductProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  link: string;
}

function MiniProduct({ icon, title, price, description, link }: MiniProductProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl gradient-border p-[1px] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex flex-col flex-1 rounded-2xl bg-card p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary">
              {icon}
            </div>
            <h4 className="font-display font-bold text-foreground">{title}</h4>
          </div>
          <span className="font-display text-xl font-bold text-gradient">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
          Buy Now <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
}

/* ───────── Page ───────── */
const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Header Section ── */}
        <header className="rounded-3xl gradient-border-featured glow-primary p-[2px] mb-14 sm:mb-20">
          <div className="rounded-3xl bg-card px-6 sm:px-12 py-12 sm:py-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-6">
              <Zap className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Premium Digital Products
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
              Scale Your Business
              <span className="text-gradient block sm:inline"> Instantly</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Verified niche-specific emails, LinkedIn data, AI prompts, and digital products — 
              no login needed. Just pick what you need and buy directly on Gumroad.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#emails">
                <Button variant="buy" size="lg" className="rounded-xl h-12 px-6 gap-2">
                  <Mail className="w-4 h-4" /> Email Packages
                </Button>
              </a>
              <a href="#products">
                <Button variant="outline" size="lg" className="rounded-xl h-12 px-6 gap-2 border-border hover:bg-secondary">
                  <Sparkles className="w-4 h-4" /> Digital Products
                </Button>
              </a>
            </div>
          </div>
        </header>

        {/* ── Email Packages ── */}
        <section id="emails" className="mb-16 sm:mb-20 scroll-mt-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Niche-Specific Email Lists
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              Verified, categorized, and ready for outreach. Every email package comes with a 
              <span className="text-gold font-semibold"> FREE Email Verifier + LinkedIn Scraper</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ProductCard
              icon={<Mail className="w-5 h-5 text-primary" />}
              title="Starter"
              description="Perfect for testing campaigns. 10,000 niche-specific verified emails."
              price="$9"
              features={[
                "10,000 verified emails",
                "Niche & industry specific",
                "CSV / Excel export",
                "FREE Email Verifier",
                "FREE LinkedIn Scraper",
              ]}
              freeBadge="Includes Email Verifier + LinkedIn Scraper FREE"
              link={GUMROAD_LINK}
            />

            <ProductCard
              icon={<Mail className="w-5 h-5 text-primary" />}
              title="Growth"
              description="Scale your outreach with 100,000 verified, niche-targeted email contacts."
              price="$49"
              features={[
                "100,000 verified emails",
                "Niche & industry specific",
                "Bulk CSV / Excel export",
                "FREE Email Verifier",
                "FREE LinkedIn Scraper",
              ]}
              featured
              badge="Most Popular"
              freeBadge="Includes Email Verifier + LinkedIn Scraper FREE"
              link={GUMROAD_LINK}
            />

            <ProductCard
              icon={<Mail className="w-5 h-5 text-primary" />}
              title="Enterprise"
              description="Massive 1 million email database for large-scale campaigns."
              price="$99"
              features={[
                "1,000,000 verified emails",
                "Niche & industry specific",
                "Bulk CSV / Excel export",
                "FREE Email Verifier",
                "FREE LinkedIn Scraper",
              ]}
              freeBadge="Includes Email Verifier + LinkedIn Scraper FREE"
              link={GUMROAD_LINK}
            />
          </div>
        </section>

        {/* ── Tools (Standalone) ── */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Standalone Tools
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              Already have emails? Grab the tools separately for just <span className="text-foreground font-semibold">$9 each</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <MiniProduct
              icon={<ShieldCheck className="w-5 h-5 text-primary" />}
              title="Email Verifier"
              price="$9"
              description="Real-time validation, catch-all detection, and bulk verification to crush bounce rates."
              link={GUMROAD_LINK}
            />
            <MiniProduct
              icon={<Linkedin className="w-5 h-5 text-primary" />}
              title="LinkedIn Scraper"
              price="$9"
              description="Extract names, emails, and titles from LinkedIn with powerful search filters."
              link={GUMROAD_LINK}
            />
          </div>
        </section>

        {/* ── Digital Products ── */}
        <section id="products" className="mb-16 sm:mb-20 scroll-mt-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Digital Products
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              Resources to grow your business and content — instant delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <MiniProduct
              icon={<BookOpen className="w-5 h-5 text-primary" />}
              title="7 Systems to Get 100+ Clients"
              price="$4.99"
              description="Comprehensive PDF guide with proven strategies to land over 100 clients fast."
              link={GUMROAD_LINK}
            />
            <MiniProduct
              icon={<Video className="w-5 h-5 text-primary" />}
              title="10,000+ Shorts Bundle"
              price="$3"
              description="Ready-to-post short-form videos across multiple categories — instant download."
              link={GUMROAD_LINK}
            />
            <MiniProduct
              icon={<BrainCircuit className="w-5 h-5 text-primary" />}
              title="100K AI Prompts"
              price="$1.99"
              description="Massive prompt library for business, marketing, content, coding, and more."
              link={GUMROAD_LINK}
            />
          </div>
        </section>

        {/* ── WhatsApp CTA ── */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl gradient-border">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold animate-pulse-glow" />
              <span className="text-sm font-medium text-muted-foreground">Need help or have questions?</span>
              <Star className="w-4 h-4 text-gold animate-pulse-glow" />
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="buy" size="lg" className="rounded-xl h-12 px-8 text-base gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp: +44 7412 823824
              </Button>
            </a>
            <p className="text-xs text-muted-foreground">Instant reply • Secure payment via Gumroad • 24/7 support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
