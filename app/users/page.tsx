import Link from "next/link";

export default function User() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Users</h1>
      <ul>
        <li>
          <Link href="/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/users/3">User 3</Link>
        </li>
      </ul>
    </main>
  );
}
