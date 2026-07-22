"use client";

import { useSearchParams } from "next/navigation";

export default function TestPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "World";

  return (
    <div>
      <h1>Hello, {name}</h1>
      <div dangerouslySetInnerHTML={{ __html: `<p>Welcome, ${name}</p>` }} />
    </div>
  );
}
