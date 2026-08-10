import Link from "next/link";
import Image from "next/image";

export default function KnowledgeProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-[#FEC619] text-sm font-semibold">
            Knowledge Products
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#000066] leading-tight">
            Books by Samuel Ikani
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Explore practical publications focused on Monitoring &
            Evaluation, research, advocacy, policy, learning, and
            evidence-based decision-making.
          </p>

        </div>

        {/* BOOK PREVIEW */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">

          {/* BOOK 1 */}
          <div className="bg-[#F8F9FC] rounded-3xl border border-gray-200 p-8">

            <div className="relative h-[320px] w-full">
              <Image
                src="/images/books/from-input-to-impact.png"
                alt="From Input to Impact"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#000066]">
              From Input to Impact
            </h3>

            <p className="mt-3 text-gray-600">
              The Complete Guide to Monitoring, Evaluation, Research & Learning
            </p>

          </div>

          {/* BOOK 2 */}
          <div className="bg-[#F8F9FC] rounded-3xl border border-gray-200 p-8">

            <div className="relative h-[320px] w-full">
              <Image
                src="/images/books/from-influence-to-impact.png"
                alt="From Influence to Impact"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#000066]">
              From Influence to Impact
            </h3>

            <p className="mt-3 text-gray-600">
              A Practical Guide to Monitoring and Evaluation of Advocacy and
              Policy Campaigns
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">

          <Link
            href="/knowledge-products"
            className="inline-flex items-center bg-[#000066] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0B3AA4] transition shadow-lg"
          >
            Explore Knowledge Products →
          </Link>

        </div>

      </div>
    </section>
  );
}