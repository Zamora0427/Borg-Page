import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";

const modules = [
  {
    title: "CRM & Pipeline",
    detail: "Keep every lead, deal stage, owner, and follow-up task visible in one pipeline.",
  },
  {
    title: "Conversations Inbox",
    detail: "Manage SMS, email, calls, and web chat from one place so no message gets missed.",
  },
  {
    title: "Automation Workflows",
    detail: "Trigger fast follow-up, reminders, and nurture campaigns without manual work.",
  },
  {
    title: "Booking & Calendar",
    detail: "Convert interested leads into appointments with scheduling linked to your pipeline.",
  },
  {
    title: "Websites & Funnels",
    detail: "Launch conversion-focused pages that feed lead data directly into your CRM.",
  },
  {
    title: "Reviews & Reputation",
    detail: "Automate review requests and strengthen local trust where customers make decisions.",
  },
  {
    title: "AI Assistance",
    detail: "Use AI-supported responses and workflows to speed engagement and support quality.",
  },
  {
    title: "Analytics & Reporting",
    detail: "Track response speed, appointments, pipeline movement, and campaign performance.",
  },
];

const painPoints = [
  "Missed calls and delayed follow-up reduce close rates.",
  "Too many disconnected tools create process gaps.",
  "Manual lead handling slows down staff and owners.",
  "Lead status is unclear, so forecasting is unreliable.",
  "Inconsistent nurturing leads to lost opportunities.",
];

const valueStack = [
  "CRM and pipeline management",
  "SMS, email, and call automation",
  "AI-powered chat and support assistance",
  "Funnels and landing pages",
  "Website management",
  "Booking and calendar tools",
  "Review and reputation workflows",
  "Social media management",
  "Analytics and reporting",
];

const industries = ["Local Businesses", "Med Spas", "Contractors", "Real Estate Professionals", "Service Businesses"];

const pricing = [
  { name: "Starter", price: "$297/mo", featured: false },
  { name: "Pro", price: "$497/mo", featured: true },
  { name: "Agency / Growth", price: "$997/mo", featured: false },
];

const testimonials = [
  {
    quote:
      "Love my website! I asked for simple but modern and welcoming, got exactly what I asked for. Great customer service ready to address any concerns or adjustments I wanted.",
    name: "Cpviews C.",
  },
  {
    quote:
      "I enjoyed the communication, information, and suggestions. The cost was within my budget and I didn’t sacrifice quality. I recommend this place.",
    name: "Alejandra C.",
  },
  {
    quote: "Zamora Marketing is absolutely great! Great at responding to people and great services all around.",
    name: "Daniel F.",
  },
  {
    quote: "So professional, modern, easy, and worry-free. Highly recommended.",
    name: "Joe N.",
  },
  {
    quote: "Fantastic company for anyone looking for a website. Very knowledgeable and extremely professional.",
    name: "Ryan B.",
  },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-950 via-[#0b1225] to-slate-950">
      <header className="container-shell py-6">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-sm font-semibold tracking-wide text-white">Zamora Marketing Platform</p>
          <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
            <a href="#platform">Platform</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
          </nav>
          <a
            href="/contact-us"
            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Book a Demo
          </a>
        </div>
      </header>

      <section className="container-shell grid gap-12 py-14 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-100">CRM + Automation + AI for Growing Businesses</p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            One platform to capture leads, automate follow-up, and close more deals.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Zamora Marketing Platform gives your team one connected operating system for lead capture, nurture, booking, pipeline visibility,
            and reputation growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact-us" className="rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white hover:bg-brand-600">
              Start With a Demo
            </a>
            <a href="/contact-us" className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Talk to Our Team
            </a>
          </div>
          <div className="mt-7 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
            <p>Built for small business growth</p>
            <p>Software + implementation support</p>
            <p>Replace multiple monthly tools</p>
          </div>
        </div>

        <div className="card shadow-glow p-6">
          <div className="rounded-xl border border-white/10 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Platform Workflow</p>
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-300">Always On</span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                "New lead captured from website, funnel, or ad",
                "Automated SMS/email follow-up starts immediately",
                "Lead activity updates in CRM pipeline in real time",
                "Booking link sent and appointment scheduled",
                "Post-visit review request or next-step nurture triggers",
              ].map((line) => (
                <div key={line} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell" id="platform">
        <div className="card grid gap-4 p-6 text-center text-sm text-slate-300 md:grid-cols-3 md:text-left">
          <p>Based in New Braunfels, Texas</p>
          <p>Serving growth-focused local and service businesses</p>
          <p>Automation, CRM, AI, websites, and funnels in one system</p>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeading
          id="product-modules"
          title="Product Modules, Built Like a Revenue System"
          description="Each module works on its own, but the full value comes from how they connect across your customer journey."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => (
            <article key={module.title} className="card p-5">
              <h3 className="font-semibold text-white">{module.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{module.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell grid gap-8 py-16 lg:grid-cols-2">
        <article className="card p-6">
          <h3 className="text-2xl font-bold text-white">Common growth bottlenecks</h3>
          <ul className="mt-5 space-y-3 text-slate-300">
            {painPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </article>
        <article className="card p-6">
          <h3 className="text-2xl font-bold text-white">How Zamora Marketing Platform solves them</h3>
          <p className="mt-5 text-slate-300">
            Instead of patching together apps, your business gets one connected platform for lead management, communication, automation,
            appointment conversion, and reporting. Teams respond faster and operate with clarity.
          </p>
          <a href="/contact-us" className="mt-6 inline-block rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white">
            See the Platform in Action
          </a>
        </article>
      </section>

      <section className="container-shell py-16" id="how-it-works">
        <SectionHeading
          title="How It Works"
          description="From first inquiry to repeat business, your system runs through one clean workflow."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {[
            "Lead comes in",
            "Instant follow-up",
            "Nurture begins",
            "Appointment booked",
            "Pipeline updates",
            "Review request / next-step automation",
          ].map((step, idx) => (
            <div key={step} className="card p-4 text-sm text-slate-200">
              <p className="text-xs font-medium text-brand-100">Step {idx + 1}</p>
              <p className="mt-1">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          title="Value Stack"
          description="Replace multiple subscriptions with one platform designed to run your full growth engine."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {valueStack.map((item) => (
            <div key={item} className="card flex items-center justify-between p-4 text-slate-100">
              <span>{item}</span>
              <span className="text-brand-100">Included</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading title="Who It’s For" description="Designed for businesses that need consistent lead flow and better follow-up systems." />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <div key={industry} className="card p-5 text-center font-medium text-slate-200">
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16" id="pricing">
        <SectionHeading
          title="Pricing"
          description="SaaS plans for businesses that need software, systems, and implementation support."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.name} name={plan.name} price={plan.price} featured={plan.featured} />
          ))}
        </div>
      </section>

      <section className="container-shell py-16" id="testimonials">
        <SectionHeading title="Client Feedback" description="Real feedback from businesses that chose Zamora Marketing." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="card p-5 text-slate-200">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-brand-100">— {testimonial.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16 pt-10">
        <div className="card bg-gradient-to-r from-brand-700/40 to-brand-500/20 p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Run your growth with one platform, not disconnected tools.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Zamora Marketing combines SaaS technology and business systems to help you improve speed-to-lead, booking rates, and pipeline
            consistency.
          </p>
          <p className="mt-6 text-lg font-semibold text-white">Call 877-848-7881</p>
          <a href="/contact-us" className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-slate-900">
            Book Your Demo
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="container-shell grid gap-6 text-sm text-slate-300 md:grid-cols-2">
          <div>
            <p className="font-semibold text-white">Zamora Marketing</p>
            <p>New Braunfels, Texas</p>
            <p>877-848-7881</p>
            <p>Email: [CONFIRM ACTUAL EMAIL BEFORE FINAL DEPLOY]</p>
          </div>
          <nav className="flex flex-wrap items-start gap-4 md:justify-end">
            <a href="#platform">Platform</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="/contact-us">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
