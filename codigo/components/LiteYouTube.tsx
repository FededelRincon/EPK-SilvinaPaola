"use client";

import Image from "next/image";
import { Icon } from "./icons";

type Props = {
  videoId: string;
  title: string;
  poster: string;
  posterAlt: string;
  playLabel: string;
  playing: boolean;
  onPlay: () => void;
};

/** No carga el iframe de YouTube hasta que `playing` es verdadero. */
export function LiteYouTube({ videoId, title, poster, posterAlt, playLabel, playing, onPlay }: Props) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-photo bg-black shadow-deep">
      {playing ? (
        <YouTubeFrame videoId={videoId} title={title} />
      ) : (
        <button
          type="button"
          onClick={onPlay}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 -outline-offset-4"
        >
          <Image src={poster} alt={posterAlt} fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover opacity-80" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full bg-ivory text-navy shadow-deep transition-transform group-hover:scale-105">
              <Icon name="play" className="size-6" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

/** Solo se monta tras un clic del visitante, por eso arranca reproduciendo. */
export function YouTubeFrame({ videoId, title }: { videoId: string; title: string }) {
  return (
    <iframe
      key={videoId}
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
      title={title}
      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="absolute inset-0 size-full"
    />
  );
}
