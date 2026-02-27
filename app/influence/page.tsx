import Image from "next/image";

export default function InfluencePage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          Why Shaq Is Influential to Me
        </h1>
        <p className="text-zinc-300 leading-7 max-w-3xl">
          Shaq is influential to me because he shows what it looks like to be
          confident, work hard, and keep building beyond one thing. He didn’t
          stop after basketball — he kept growing into business and media while
          still being himself.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        {/* 1) Confidence */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <div className="relative w-full h-40 md:h-44">
              <Image
                src="/shaq-trophy.jpg"
                alt="Shaq celebrating on the court"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <p className="text-xs text-zinc-400 mt-3">
            Confidence — not afraid to stand out.
          </p>

          <h2 className="font-bold text-lg mt-3 mb-2">1) Confidence</h2>
          <p className="text-zinc-300 leading-7">
            Shaq never seems scared to stand out. That pushes me to be more
            confident in my own work and not worry too much about other people.
          </p>
        </div>

        {/* 2) Work Ethic */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <div className="relative w-full h-40 md:h-44">
              <Image
                src="/shaq.jpg"
                alt="Shaq working hard in a game"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <p className="text-xs text-zinc-400 mt-3">
            Work ethic — showing up consistently.
          </p>

          <h2 className="font-bold text-lg mt-3 mb-2">2) Work Ethic</h2>
          <p className="text-zinc-300 leading-7">
            He became great through effort and consistency. It reminds me that
            progress comes from showing up and practicing, even when it’s not
            exciting.
          </p>
        </div>

        {/* 3) More Than One Path */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <div className="relative w-full h-40 md:h-44">
              <Image
                src="/shaq-dj.jpg"
                alt="Shaq in a media or business setting"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <p className="text-xs text-zinc-400 mt-3">
            More than one path — building beyond basketball.
          </p>

          <h2 className="font-bold text-lg mt-3 mb-2">3) More Than One Path</h2>
          <p className="text-zinc-300 leading-7">
            What I respect is that he didn’t rely on one career. He expanded
            into business, TV, branding, and even music, which inspires me to build multiple
            skills too.
          </p>
        </div>

        {/* 4) Positive Energy */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <div className="relative w-full h-40 md:h-44">
              <Image
                src="/Shaq-Smile.jpg"
                alt="Shaq smiling or laughing"
                fill
                className="object-fill"
              />
            </div>
          </div>

          <p className="text-xs text-zinc-400 mt-3">
            Positive energy — serious but still fun.
          </p>

          <h2 className="font-bold text-lg mt-3 mb-2">4) Positive Energy</h2>
          <p className="text-zinc-300 leading-7">
            He brings humor and positivity and still takes success seriously.
            That balance reminds me to work hard but also enjoy what I’m doing.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <h2 className="font-bold text-xl mb-2">Personal Reflection</h2>
        <p className="text-zinc-300 leading-7">
          Seeing someone succeed at the highest level and then still keep
          learning and building is motivating. Shaq makes me want to be more
          confident, more consistent, and more serious about improving my own
          future.
        </p>
      </section>

    </div>
  );
}