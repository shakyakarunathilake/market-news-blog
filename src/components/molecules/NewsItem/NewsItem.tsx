import RedirectButton from "@/components/atoms/RedirectButton/RedirectButton";
import { NewsItemType } from "@/types/MarketNews";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsItemPlaceholderImage from "@/assets/placeholders/news-item.png";

interface Props {
  newsItem: NewsItemType;
}

const NewsItem = ({ newsItem }: Props) => {
  return (
    <Link
      href={newsItem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-auto w-full cursor-pointer flex-col gap-4"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={newsItem.image || NewsItemPlaceholderImage}
          alt={newsItem.headline}
          fill
          className="object-cover transition-all duration-300 ease-in-out group-hover:scale-103"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          placeholder="blur"
          blurDataURL={NewsItemPlaceholderImage.src}
          loading="lazy"
        />
      </div>
      <div className="w-full">
        <h6 className="font-sans text-2xl leading-[130%] font-normal -tracking-[4%] capitalize">
          {newsItem.headline}
        </h6>
      </div>
      <div className="w-full">
        <RedirectButton label="Read Article" />
      </div>
    </Link>
  );
};

export default NewsItem;
