"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

type Status = "idle" | "copied" | "error";
type Props = { value: string; labels: { copy: string; copied: string; error: string } };

export function CopyButton({ value, labels }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={copy}
        aria-label={labels.copy}
        title={labels.copy}
        className="grid size-9 place-items-center rounded-full text-navy-deep transition-colors hover:bg-navy hover:text-ivory"
      >
        <Icon name="copy" className="size-4" />
      </button>
      <span role="status" className="text-sm font-medium text-navy-deep">
        {status === "copied" && labels.copied}
        {status === "error" && labels.error}
      </span>
    </span>
  );
}
