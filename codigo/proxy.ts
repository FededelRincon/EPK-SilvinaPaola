import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "@/lib/locale";

/** En Next 16 `proxy` reemplaza a `middleware`. */
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
}

export const config = { matcher: "/" };
