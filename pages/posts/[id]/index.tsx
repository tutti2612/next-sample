import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Post {router.query.id}</h1>
    </main>
  );
}
