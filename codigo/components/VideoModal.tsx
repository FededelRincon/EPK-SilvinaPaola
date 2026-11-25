"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { YouTubeFrame } from "./LiteYouTube";
import { Modal } from "./Modal";

type Props = { videoId: string; title: string; openLabel: string; closeLabel: string };

export function VideoModal({ videoId, title, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        aria-label={`${openLabel}: ${title}`}
        className="inline-flex items-center gap-2 rounded-full border border-ivory/60 px-5 py-2.5 text-sm transition-colors hover:bg-ivory hover:text-navy"
      >
        <Icon name="play" className="size-3.5" />
        {openLabel}
      </button>
      {open && (
        <Modal title={title} closeLabel={closeLabel} tone="dark" onClose={() => setOpen(false)}>
          <div className="relative aspect-video overflow-hidden rounded-photo bg-black">
            <YouTubeFrame videoId={videoId} title={title} />
          </div>
        </Modal>
      )}
    </>
  );
}
