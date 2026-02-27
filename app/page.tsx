import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Shaquille O’Neal (Shaq)
          </h1>

          <p className="text-zinc-300 leading-7">
            This site is about Shaq and why he is influential to me. I chose him
            because he’s more than just a basketball legend — he’s also a
            businessperson, entertainer, and someone who shows confidence and
            personality while still working hard.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/influence"
              className="px-4 py-2 rounded-xl bg-yellow-200 text-black font-semibold hover:bg-yellow-300 transition"
            >
              Shaq's Influence
            </Link>

            <Link
              href="/career"
              className="px-4 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
            >
              View Career
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-md">
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/shaq-hero.jpg"
              alt="Shaquille O’Neal"
              fill
              className="object-fill"
              priority
            />
          </div>
          <p className="text-xs text-zinc-400 mt-3">
            Shaq in action.
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <h2 className="font-bold text-lg mb-2">Confidence</h2>
          <p className="text-zinc-300 text-sm leading-6">
            Shaq is confident and not afraid to be himself. That mindset pushes
            me to show up with confidence in my own work.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <h2 className="font-bold text-lg mb-2">Work Ethic</h2>
          <p className="text-zinc-300 text-sm leading-6">
            He became great through effort and consistency. It reminds me that
            getting better takes time and repetition.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <h2 className="font-bold text-lg mb-2">More Than One Lane</h2>
          <p className="text-zinc-300 text-sm leading-6">
            After basketball he expanded into business and media. That inspires
            me to build skills that give me more options later.
          </p>
        </div>
      </section>
    </div>
  );
}