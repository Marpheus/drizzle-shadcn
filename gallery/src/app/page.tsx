import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/0d62c1a7-015a-41c1-952f-767141bcad1b-urw2mp.jpg",
  "https://utfs.io/f/ad2b4b25-3a6b-4077-a628-cbf30b788d45-d9lcld.jpg",
  "https://utfs.io/f/ac321117-eb1e-4491-827a-f2e60005ddfe-7riew7.jpg",
  "https://utfs.io/f/3b4ebb94-5d2e-4e30-aeae-e227a913ae1c-8ff45e.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" className="h-auto w-full" />
          </div>
        ))}
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
      </div>
    </main>
  );
}
