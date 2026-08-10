import Image from "next/image";

export default function KnowledgeProductsPage() {
  const books = [
    {
      title: "From Input to Impact",
      subtitle:
        "The Complete Guide to Monitoring, Evaluation, Research & Learning",
      image: "/from-input-to-impact.png",
    },
    {
      title: "From Influence to Impact",
      subtitle:
        "A Practical Guide to Monitoring and Evaluation of Advocacy and Policy Campaigns",
      image: "/from-influence-to-impact.png",
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-[#000066] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-[#FEC619] text-sm font-semibold">
            Knowledge Products
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-black">
            Books
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">
            Explore publications by Samuel Ikani focused on evaluation
            systems, policy development, and evidence-based decision-making.
          </p>

        </div>
      </section>

      {/* BOOKS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            {books.map((book) => (
              <article
                key={book.title}
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >

                <div className="bg-gray-50 flex justify-center p-8">
                  <div className="relative w-full max-w-[320px] aspect-[3/4]">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="p-8">

                  <h2 className="text-2xl md:text-3xl font-bold text-[#000066]">
                    {book.title}
                  </h2>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {book.subtitle}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}