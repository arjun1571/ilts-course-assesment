"use client";

import { useEffect, useState } from "react";

export default function Description({ data }: { data: any }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return <div className="text-base" dangerouslySetInnerHTML={{ __html: data?.data?.description || "" }} />;
}
