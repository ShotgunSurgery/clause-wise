"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with ClauseWise",
    features: [
      { text: "Up to 3 diagrams", included: true },
      { text: "Basic components (Auth, DB, CDN)", included: true },
      { text: "PNG export", included: true },
      { text: "Community support", included: true },
      { text: "Advanced components", included: false },
      { text: "JSON export", included: false },
      { text: "Team collaboration", included: false },
      { text: "Priority support", included: false },
    ],
    limits: {
      diagrams: "3",
      components: "Basic",
      exports: "PNG only",
      support: "Community",
    },
    popular: false,
    cta: "Get Started",
    href: "/signup",
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For professionals and growing teams",
    features: [
      { text: "Up to 50 diagrams", included: true },
      { text: "All components (Auth, DB, CDN, API, Cache, Queue, Storage, Monitoring)", included: true },
      { text: "PNG & JSON export", included: true },
      { text: "Email support", included: true },
      { text: "Custom tech stacks", included: true },
      { text: "Export history", included: true },
      { text: "Team collaboration", included: false },
      { text: "Priority support", included: false },
    ],
    limits: {
      diagrams: "50",
      components: "All",
      exports: "PNG & JSON",
      support: "Email",
    },
    popular: true,
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
  },
  {
    name: "Enterprise",
    price: "$39",
    period: "per month",
    description: "For large organizations and teams",
    features: [
      { text: "Unlimited diagrams", included: true },
      { text: "All components + custom components", included: true },
      { text: "All export formats (PNG, SVG, JSON)", included: true },
      { text: "Priority support", included: true },
      { text: "Team collaboration", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom branding", included: true },
      { text: "API access", included: true },
    ],
    limits: {
      diagrams: "Unlimited",
      components: "All + Custom",
      exports: "All formats",
      support: "Priority",
    },
    popular: false,
    cta: "Contact Sales",
    href: "/contact",
  },
];

export default function PricingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#18181b] text-white font-sans relative overflow-x-hidden">
      {/* Dotted grid background */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px'}} />
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#23232a] rounded-xl w-10 h-10 flex items-center justify-center font-bold text-lg">CS</div>
          <span className="text-2xl font-extrabold tracking-tight">ClauseWise</span>
        </div>
        <div className="flex gap-8 items-center text-lg font-medium">
          <Link href="/" className="text-white border-b-2 border-white pb-1">Home</Link>
          <a href="#" className="text-gray-400 hover:text-white transition">Dashboard</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Editor</a>
          <Link href="/pricing" className="text-gray-400 hover:text-white transition border-b-2 border-[#a259ff] pb-1">Pricing</Link>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className="text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#23232a] transition"
            onClick={() => router.push("/signup")}
          >
            Sign in
          </button>
          <Button className="bg-white text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-200">Get Started</Button>
        </div>
      </nav>
      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-20">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your legal architecture needs. Start free and upgrade as you grow.
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative flex flex-col justify-between w-full md:w-1/3 min-w-[280px] max-w-md mx-auto ${
                plan.popular 
                  ? "border-[#a259ff] shadow-lg scale-105" 
                  : "border-neutral-800"
              } bg-[#23232a] text-white transition-transform duration-200`}
              style={{ minHeight: 540 }}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#a259ff] to-[#6a82fb] text-white text-xs font-semibold px-4 py-1 rounded-full shadow z-10">Most Popular</span>
              )}
              <CardHeader className="text-center pb-4 flex flex-col items-center">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="flex items-end justify-center gap-2 mt-2 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-base mb-1">/{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-1 text-gray-300 mb-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-6 justify-between">
                {/* Limits Summary */}
                <div className="bg-[#18181b] rounded-lg p-4 space-y-2 mb-2">
                  <h4 className="font-semibold text-sm text-white mb-1">Plan Limits:</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Diagrams:</span>
                      <span className="ml-1 font-medium text-white">{plan.limits.diagrams}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Components:</span>
                      <span className="ml-1 font-medium text-white">{plan.limits.components}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Exports:</span>
                      <span className="ml-1 font-medium text-white">{plan.limits.exports}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Support:</span>
                      <span className="ml-1 font-medium text-white">{plan.limits.support}</span>
                    </div>
                  </div>
                </div>
                {/* Features */}
                <div className="space-y-2 mb-2">
                  <h4 className="font-semibold text-sm text-white mb-1">Features:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <X className="h-4 w-4 text-gray-500" />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? "text-white" 
                          : "text-gray-400"
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                {/* CTA Button */}
                <div className="flex flex-col justify-end flex-1 mt-4">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-gradient-to-r from-[#a259ff] to-[#6a82fb] text-white hover:from-[#6a82fb] hover:to-[#a259ff]" 
                        : "bg-white text-black hover:bg-gray-200"
                    } font-semibold px-5 py-2 rounded-lg shadow`}
                    asChild
                  >
                    <a href={plan.href}>
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto w-full flex flex-col gap-8 mt-8">
          <h2 className="text-2xl font-bold text-center text-white">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-6">
            <Card className="bg-[#23232a] text-white">
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes, you can change your plan at any time. When upgrading, you'll only pay the difference. 
                  When downgrading, changes take effect at the next billing cycle.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#23232a] text-white">
              <CardHeader>
                <CardTitle className="text-lg">What happens if I exceed my plan limits?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  You'll receive a notification when you're close to your limits. 
                  You can either upgrade your plan or archive old diagrams to stay within limits.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#23232a] text-white">
              <CardHeader>
                <CardTitle className="text-lg">Is there a free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes! All paid plans come with a 14-day free trial. No credit card required to start.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#23232a] text-white">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We offer a 30-day money-back guarantee. If you're not satisfied, 
                  contact our support team for a full refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Contact CTA */}
        <div className="w-full flex justify-center items-center mt-16">
          <Card className="w-full max-w-2xl bg-[#23232a] text-white flex justify-center items-center">
            <CardContent className="py-8 flex flex-col items-center w-full">
              <h3 className="text-xl font-semibold mb-2 text-white text-center">
                Need a custom plan?
              </h3>
              <p className="text-gray-300 mb-4 max-w-md text-center">
                Contact us for custom pricing and features tailored to your organization.
              </p>
              <div className="w-full flex justify-center">
                <Button asChild className="bg-gradient-to-r from-[#a259ff] to-[#6a82fb] text-white font-semibold px-5 py-2 rounded-lg shadow w-full max-w-xs">
                  <a href="/contact">Contact Sales</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
