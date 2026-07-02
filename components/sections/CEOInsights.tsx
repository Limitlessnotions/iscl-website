import Link from "next/link";

export default function CEOInsights() {
  return (
    <section className="py-20 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-[#FEC619] text-sm font-semibold">
            Leadership Insights
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
            Insights From Our CEO
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Explore articles, reflections, and thought leadership pieces by
            Samuel Ikani on Monitoring & Evaluation, public policy,
            governance, research methods, development systems, and
            evidence-based decision making.
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-white rounded-3xl border border-gray-200 p-10 shadow-lg hover:shadow-2xl transition duration-300">

            <p className="text-[#FEC619] uppercase tracking-[0.25em] text-sm font-semibold">
              Latest Publication
            </p>

            <h3 className="mt-4 text-3xl font-bold text-[#000066]">
              Nigerians Are Holding the Country Together, Their Leaders Are Not
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              An opinion article by Samuel Ikani examining leadership,
              governance and the resilience of ordinary Nigerians. Published
              by multiple national news platforms on 1 July 2026.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="https://naijavoicenews.com/2026/07/01/nigerians-are-holding-the-country-together-their-leaders-are-not-opinion/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#000066] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0B3AA4] transition"
              >
                Read on Naija Voice News →
              </Link>

              <Link
                href="https://aljazirahnews.com/nigerians-are-holding-the-country-together-their-leaders-are-not/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-[#000066] text-[#000066] px-6 py-3 rounded-full font-semibold hover:bg-[#000066] hover:text-white transition"
              >
                Read on Aljazirah News →
              </Link>

              <Link
                href="/articles"
                className="inline-flex items-center text-[#000066] font-semibold hover:underline"
              >
                View All Publications →
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}