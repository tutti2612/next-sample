import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">TOP</h1>
      <ul>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </main>
  );
}
