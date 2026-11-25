"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Icon } from "./icons";

type Props = {
  title: string;
  closeLabel: string;
  tone: "light" | "dark";
  onClose: () => void;
  children: ReactNode;
};

const focusable = "a[href], button, iframe";

/**
 * Se monta solo cuando está abierto. Usa <dialog> nativo: deja inerte el
 * fondo, cierra con Escape y devuelve el foco al botón que lo abrió.
 */
export function Modal({ title, closeLabel, tone, onClose, children }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();
  }, []);

  const close = () => dialogRef.current?.close();

  const focusLast = () => {
    const items = contentRef.current?.querySelectorAll<HTMLElement>(focusable);
    (items?.length ? items[items.length - 1] : closeRef.current)?.focus();
  };

  const light = tone === "light";
  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && close()}
      className={`m-auto max-h-[92dvh] w-[min(94vw,64rem)] max-w-none overflow-y-auto overscroll-contain rounded-photo backdrop:bg-black/80 ${light ? "bg-ivory text-ink" : "bg-navy text-ivory"}`}
    >
      {/* Centinelas: Tab y Shift+Tab no salen de la ventana. */}
      <span tabIndex={0} onFocus={focusLast} />
      <div
        className={`sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-3 ${light ? "bg-ivory" : "bg-navy"}`}
      >
        <p className={`font-serif text-lg ${light ? "text-navy" : ""}`}>{title}</p>
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label={closeLabel}
          className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-ivory transition-colors hover:bg-navy-deep"
        >
          <Icon name="close" />
        </button>
      </div>
      <div ref={contentRef} className="px-5 pb-6">
        {children}
      </div>
      <span tabIndex={0} onFocus={() => closeRef.current?.focus()} />
    </dialog>
  );
}
