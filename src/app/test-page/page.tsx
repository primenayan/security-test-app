"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function TestPageContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "World";

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Welcome, {name}</p>
    </div>
  );
}

export default function TestPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestPageContent />
    </Suspense>
  );
}
