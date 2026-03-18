import { NextResponse } from "next/server";
import { incrementViewCount, getViewCount } from "../../../../../lib/view-store";

export async function GET(_request, { params }) {
  const resolvedParams = await params;
  const views = getViewCount(resolvedParams.slug, 20);

  return NextResponse.json({ slug: resolvedParams.slug, views });
}

export async function POST(_request, { params }) {
  const resolvedParams = await params;
  const views = incrementViewCount(resolvedParams.slug, 20);

  return NextResponse.json({ slug: resolvedParams.slug, views });
}
