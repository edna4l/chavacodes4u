"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitPing() {
  const pathname = usePathname();

  useEffect(() => {
    const key = `pinged_${pathname}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");

    fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
      }),
    }).catch(() => {});
  }, [pathname]);

  return null;
}
