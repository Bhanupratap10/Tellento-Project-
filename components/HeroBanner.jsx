import { Briefcase, Building2, Users, ShieldCheck, Rocket, Sparkles, Search } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative py-14 text-center bg-gradient-to-b from-[#1a0b2e] via-[#0d0d1a] to-[#0b0b14] overflow-hidden">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold">
        Find Your{" "}
        <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient">
          Dream Job
        </span>{" "}
        <span className="text-white">Now</span>
      </h1>
      <p className="mt-3 text-zinc-300 max-w-xl mx-auto text-sm md:text-base">
        Explore thousands of opportunities from trusted companies. Use smart filters and AI tools to apply faster.
      </p>

      {/* Search Box */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3">
        <div className="flex items-center bg-[#1c1c28] border border-zinc-700 rounded-lg w-72 md:w-96 px-3 py-2 focus-within:border-rose-500">
          <Search className="h-5 w-5 text-zinc-400 mr-2" />
          <input
            type="text"
            placeholder="Search jobs, skills or companies"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
        <button className="btn-pink px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
          Find Jobs
        </button>
      </div>

      {/* Popular Tags */}
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {["Social Science Teacher", "Math Faculty", "Physics JEE Expert"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 rounded-full bg-[#1c1c28] border border-pink-500/30 text-xs md:text-sm text-zinc-300 hover:border-pink-500 cursor-pointer"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: ShieldCheck, title: "Top 1% Candidates", desc: "Hire faster with quality profiles" },
          { icon: Rocket, title: "AI Screening", desc: "Save time with automation" },
          { icon: Sparkles, title: "Advanced Filters", desc: "Instant job matching" },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card-dark p-5 text-center hover:-translate-y-1 transition">
            <Icon className="mx-auto h-8 w-8 text-rose-400" />
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="text-sm text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-8 max-w-2xl mx-auto text-zinc-400 text-sm leading-relaxed">
        Helping education, coaching, and tech industries hire verified talent faster. Get matched with high-paying jobs using AI-powered screening and instant interview scheduling.
      </p>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Briefcase, label: "Jobs Available", value: "7500+" },
          { icon: Building2, label: "Companies Hiring", value: "5500+" },
          { icon: Users, label: "Candidates", value: "1M+" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="card-dark p-6 text-center hover:-translate-y-1 transition">
            <Icon className="mx-auto h-8 w-8 text-rose-400" />
            <div className="text-2xl font-bold mt-2 bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
              {value}
            </div>
            <p className="text-zinc-400 text-sm">{label}</p>
          </div>
        ))}
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 5s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
