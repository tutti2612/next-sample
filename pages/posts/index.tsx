import Link from "next/link";

export default function Posts() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Users</h1>
      <ul>
        <li>
          <Link href="/posts/1">Post 1</Link>
        </li>
        <li>
          <Link href="/posts/2">Post 2</Link>
        </li>
        <li>
          <Link href="/posts/3">Post 3</Link>
        </li>
      </ul>
    </main>
  );
}
