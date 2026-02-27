import Image from "next/image";

type FavoriteCard = {
  title: string;
  text: string;
};

export default function FavoritesPage() {
  const favorites: FavoriteCard[] = [
    {
      title: "Favorite Lesson",
      text: "Confidence matters, but it has to be backed up by work.",
    },
    {
      title: "Favorite Part of His Story",
      text: "He kept building after the NBA instead of thinking his career was over.",
    },
    {
      title: "What I Took From It",
      text: "I want to keep learning skills so I have more options in the future.",
    },
  ];

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Favorites</h1>
      </section>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/dunk.jpg"
              alt="Shaq dunking"
              fill
              className="object-fill"
            />
          </div>
          <p className="mt-3 text-zinc-300 text-sm">
            Shaq dunking
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="relative h-64 w-full rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/diesel.jpg"
              alt="Shaq off the court"
              fill
              className="object-fill"
            />
          </div>
          <p className="mt-3 text-zinc-300 text-sm">
            Shaq off the court
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
          >
            <h2 className="font-bold mb-2">{item.title}</h2>
            <p className="text-zinc-300 text-sm leading-6">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}