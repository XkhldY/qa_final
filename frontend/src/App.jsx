import { useState } from "react";

const candidateBenefits = [
  "Personalized job matches",
  "Career coaching & resume reviews",
  "Access to exclusive opportunities",
];

const employerBenefits = [
  "Curated candidate pool",
  "Streamlined hiring process",
  "Dedicated account manager",
];

const jobCards = [
  {
    title: "Frontend Engineer",
    company: "TechNova",
    location: "Remote",
    salary: "$110k–$135k",
  },
  {
    title: "Product Manager",
    company: "Acme Corp",
    location: "New York, NY",
    salary: "$120k–$150k",
  },
  {
    title: "Data Scientist",
    company: "InsightWorks",
    location: "Austin, TX",
    salary: "$115k–$140k",
  },
  {
    title: "UX/UI Designer",
    company: "PixelSprint",
    location: "San Francisco, CA",
    salary: "$100k–$125k",
  },
  {
    title: "Backend Developer",
    company: "CloudShift",
    location: "Remote",
    salary: "$105k–$130k",
  },
  {
    title: "DevOps Engineer",
    company: "StellarOps",
    location: "Boston, MA",
    salary: "$120k–$145k",
  },
];

const blogPosts = [
  {
    title: "How to Stand Out in Today’s Job Market",
    excerpt: "Tips and strategies for candidates to make a lasting impression and land their dream job.",
    link: "#",
  },
  {
    title: "Top 5 Qualities Employers Look For",
    excerpt: "Discover what traits hiring managers value most when selecting candidates for top positions.",
    link: "#",
  },
  {
    title: "Building High-Performing Teams: Insights for Employers",
    excerpt: "Learn how to attract and retain top talent to boost your company’s growth and culture.",
    link: "#",
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#candidates", label: "Candidates" },
    { href: "#employers", label: "Employers" },
    { href: "#jobs", label: "Jobs" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <nav className="fixed w-full z-30 top-0 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <a href="#" className="text-2xl font-bold text-acme">Acme Recruiting</a>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-acme-accent transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden flex items-center text-acme-accent"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-acme-accent font-medium py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-acme-light/40 to-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-acme mb-4">
          Connecting exceptional candidates with world-class employers
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Acme Recruiting makes hiring and job searching effortless. We match top talent with the best opportunities so everyone wins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-3 rounded-lg text-white bg-acme-accent font-semibold text-lg shadow hover:bg-acme transition"
            onClick={() => scrollToSection("jobs")}
          >
            Browse Jobs
          </button>
          <button
            className="px-8 py-3 rounded-lg text-acme border border-acme font-semibold text-lg hover:bg-acme hover:text-white transition"
            onClick={() => scrollToSection("employers")}
          >
            Hire Talent
          </button>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-acme mb-8 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function BenefitsList({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map((benefit, i) => (
        <li
          key={benefit}
          className="bg-acme-light/30 py-6 px-5 rounded-xl text-center text-acme font-medium text-lg shadow-sm"
        >
          {benefit}
        </li>
      ))}
    </ul>
  );
}

function JobsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {jobCards.map((job, i) => (
        <div key={i} className="bg-white border border-gray-100 rounded-xl shadow p-6 flex flex-col">
          <div className="font-semibold text-acme-accent text-lg">{job.title}</div>
          <div className="text-gray-700 font-medium">{job.company}</div>
          <div className="text-gray-500">{job.location}</div>
          <div className="mt-2 text-acme font-bold">{job.salary}</div>
        </div>
      ))}
    </div>
  );
}

function BlogGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, i) => (
        <div key={i} className="bg-acme-light/10 border border-acme-light rounded-xl shadow p-6 flex flex-col">
          <div className="font-semibold text-acme text-lg mb-1">{post.title}</div>
          <div className="text-gray-700 mb-3">{post.excerpt}</div>
          <a
            href={post.link}
            className="mt-auto text-acme-accent hover:underline font-medium"
          >
            Read more &rarr;
          </a>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-acme text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">&copy; {new Date().getFullYear()} Acme Recruiting. All rights reserved.</div>
        <div className="flex space-x-4">
          {/* Social placeholders */}
          <a href="#" className="hover:text-acme-accent transition" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.93c-.8.36-1.67.61-2.58.72a4.55 4.55 0 002-2.5 9.06 9.06 0 01-2.89 1.1 4.52 4.52 0 00-7.7 4.13C7.09 9.18 4.1 7.8 2.12 5.47c-.5.84-.78 1.82-.78 2.87 0 1.98 1 3.73 2.53 4.76-.93-.03-1.8-.29-2.57-.7v.07c0 2.77 1.97 5.08 4.6 5.6-.47.13-.96.2-1.47.2-.36 0-.7-.03-1.04-.1.7 2.2 2.74 3.8 5.17 3.84A9.05 9.05 0 012 19.54a12.8 12.8 0 006.95 2.04c8.34 0 12.9-6.91 12.9-12.91 0-.2 0-.39-.02-.58A9.18 9.18 0 0024 4.59a9 9 0 01-2.54.7z"/></svg>
          </a>
          <a href="#" className="hover:text-acme-accent transition" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75c.97 0 1.75.78 1.75 1.75s-.78 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
          </a>
          <a href="#" className="hover:text-acme-accent transition" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.67 0h-21.34c-.73 0-1.33.6-1.33 1.33v21.34c0 .73.6 1.33 1.33 1.33h11.5v-9.29h-3.13v-3.62h3.13v-2.67c0-3.1 1.89-4.79 4.65-4.79 1.32 0 2.45.1 2.78.14v3.22h-1.91c-1.5 0-1.8.71-1.8 1.76v2.34h3.6l-.47 3.62h-3.13v9.29h6.13c.73 0 1.33-.6 1.33-1.33v-21.34c0-.73-.6-1.33-1.33-1.33z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <NavBar />
      <main>
        <Hero />
        <Section id="candidates" title="For Candidates">
          <div className="mb-6 text-center text-lg text-gray-700">
            Unlock your career potential with Acme Recruiting.
          </div>
          <BenefitsList items={candidateBenefits} />
        </Section>
        <Section id="employers" title="For Employers">
          <div className="mb-6 text-center text-lg text-gray-700">
            Hire smarter and faster with our curated talent network.
          </div>
          <BenefitsList items={employerBenefits} />
        </Section>
        <Section id="jobs" title="Jobs">
          <JobsGrid />
        </Section>
        <Section id="blog" title="From Our Blog">
          <BlogGrid />
        </Section>
      </main>
      <Footer />
    </div>
  );
}