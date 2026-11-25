"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { LiteYouTube } from "./LiteYouTube";

type Props = {
  songs: readonly { id: string; title: string }[];
  poster: string;
  posterAlt: string;
  labels: { songs: string; select: string; play: string };
};

export function EpPlayer({ songs, poster, posterAlt, labels }: Props) {
  const [active, setActive] = useState<string | null>(null);
  const current = songs.find(({ id }) => id === active) ?? songs[0];

  return (
    <div>
      <h4 className="font-semibold">{labels.songs}</h4>
      <p className="mt-1 text-sm text-ivory/85">{labels.select}</p>
      <ol className="mt-4 divide-y divide-ivory/15 border-y border-ivory/15">
        {songs.map(({ id, title }, index) => {
          const selected = id === active;
          return (
            <li key={id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(id)}
                className={`flex w-full items-center gap-4 px-3 py-3 text-left transition-colors hover:bg-navy-deep ${selected ? "bg-navy-deep font-semibold" : ""}`}
              >
                <span className="w-5 text-sm tabular-nums text-ivory/80">{index + 1}</span>
                <span className="grow font-serif">{title}</span>
                <span
                  className={`grid size-7 place-items-center rounded-full ${selected ? "bg-ivory text-navy" : "border border-ivory/50"}`}
                >
                  <Icon name="play" className="size-3" />
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="mt-6">
        <LiteYouTube
          videoId={current.id}
          title={current.title}
          poster={poster}
          posterAlt={posterAlt}
          playLabel={labels.play}
          playing={active !== null}
          onPlay={() => setActive(current.id)}
        />
      </div>
    </div>
  );
}
