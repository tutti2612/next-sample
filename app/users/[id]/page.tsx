"use client";

export default function Page({ params }: { params: { id: number } }) {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">User {params.id}</h1>
    </main>
  );
}
