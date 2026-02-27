export default function CareerPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Career & Impact</h1>
        <p className="text-zinc-300 leading-7 max-w-3xl">
          Shaq is one of the most recognizable athletes ever. He was dominant on
          the court, but he also built a huge presence off the court through
          media, business, and personality.
        </p>
      </section>

      <section className="grid gap-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm uppercase tracking-wider text-yellow-200 mb-2">
            Early Career
          </p>
          <p className="text-zinc-300 leading-7">
            Shaq entered the NBA as a dominant player and quickly became a star
            because of his size, skill, and energy.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm uppercase tracking-wider text-yellow-200 mb-2">
            Championship Years
          </p>
          <p className="text-zinc-300 leading-7">
            He won multiple championships and became known as one of the most
            unstoppable big men in NBA history.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm uppercase tracking-wider text-yellow-200 mb-2">
            Media + Entertainment
          </p>
          <p className="text-zinc-300 leading-7">
            He became a major personality outside basketball through TV,
            commercials, interviews, and entertainment.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-sm uppercase tracking-wider text-yellow-200 mb-2">
            Business + Legacy
          </p>
          <p className="text-zinc-300 leading-7">
            Shaq kept building his brand through business and investments,
            showing how success can keep growing after your main career.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
        <h2 className="font-bold text-xl mb-2">What Makes Him Different?</h2>
        <ul className="list-disc pl-5 text-zinc-300 space-y-2 leading-7">
          <li>Dominant player with a strong work ethic</li>
          <li>Confident personality and leadership</li>
          <li>Turned fame into business opportunities</li>
          <li>Stayed relevant after basketball through media</li>
        </ul>
      </section>
    </div>
  );
}