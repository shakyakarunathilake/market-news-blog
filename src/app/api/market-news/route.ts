import { NewsItemType } from "@/types/MarketNews";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res: Response = await fetch(
      `${process.env.FINNHUB_BASE_URL}/news?category=general`,
      {
        headers: { "X-Finnhub-Token": process.env.FINNHUB_API_KEY! },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch news" },
        { status: res.status },
      );
    }

    const data: NewsItemType[] = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
