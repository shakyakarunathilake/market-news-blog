import NewsItem from "@/components/molecules/NewsItem/NewsItem";
import ContentWrapper from "@/components/molecules/ContentWrapper/ContentWrapper";
import { NewsItemType } from "@/types/MarketNews";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import BlottStudioLogo from "@/assets/logos/blott-studio.png";
import { revalidate } from "./api/market-news/route";

async function getMarketNews(): Promise<{
  data: NewsItemType[] | null;
  error?: string;
}> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/market-news`,
      {
        next: { revalidate: revalidate, tags: ["market-news"] },
      },
    );

    if (!res.ok) {
      const errorText = await res.text();

      return {
        error: errorText,
        data: null,
      };
    }

    const data = await res.json();

    return { error: undefined, data };
  } catch (error) {
    return {
      error: "Oops! Something went wrong. Please try again later.",
      data: null,
    };
  }
}

export default async function Page() {
  noStore();
  const { data: marketNews, error } = await getMarketNews();

  return (
    <main className="container mx-auto h-full w-full px-5 py-[44px] font-sans">
      <div className="flex justify-center pb-[58px] lg:pb-[56.8px]">
        <Image
          src={BlottStudioLogo}
          alt="Blott Studio Logo"
          width={200}
          height={48.2}
        />
      </div>
      <ContentWrapper error={error}>
        <div className="pb-[44px] lg:pb-[48px]">
          <h1 className="w-full text-[40px] leading-[47px] font-normal tracking-[0%] uppercase md:w-2/3 lg:w-1/2 lg:text-[70px] lg:leading-[98%]">
            <span className="font-serif">Latest news from the world of</span>{" "}
            <span className="font-mono">FINANCE</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-y-[44px] md:grid-cols-2 md:gap-x-[16px] lg:grid-cols-4 lg:gap-y-[60px]">
          {marketNews?.map((marketNewsItem, index) => (
            <div
              key={marketNewsItem.id}
              className={index === 0 ? "lg:col-span-2" : "lg:col-span-1"}
            >
              <NewsItem newsItem={marketNewsItem} />
            </div>
          ))}
        </div>
      </ContentWrapper>
    </main>
  );
}
