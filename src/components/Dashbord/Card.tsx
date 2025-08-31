import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Pencil from "../../icons/Pencil";
import Delete from "../../icons/Delete";
import LinkIcon from "../../icons/LinkIcon";

function Card({ data }: any) {
  // Detect link type
  function getLinkType(url: string): "youtube" | "twitter" | "document" | "other" {
    try {
      const hostname = new URL(url).hostname;

      if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
        return "youtube";
      }
      if (hostname.includes("twitter.com") || hostname.includes("x.com")) {
        return "twitter";
      }
      if (url.endsWith(".pdf") || url.endsWith(".docx")) {
        return "document";
      }
      return "other";
    } catch {
      return "other";
    }
  }

  // Extract YouTube embed link
  function getYouTubeEmbed(url: string): string | null {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtube.com")) {
        return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
      }
      if (parsed.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed${parsed.pathname}`;
      }
      return null;
    } catch {
      return null;
    }
  }

  // Extract Tweet ID
  function getTweetId(url: string): string | null {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("twitter.com") || parsed.hostname.includes("x.com")) {
        const parts = parsed.pathname.split("/");
        return parts[parts.length - 1]; // last part is tweet ID
      }
      return null;
    } catch {
      return null;
    }
  }

  const linkType = getLinkType(data?.link);

  return (
    <div className="min-w-[200px] shadow-xl h-64 shadow-black p-3 border-black bg-gray-200 shadow-md rounded-md overflow-y-scroll ">
      <div className="flex justify-end ">
        <span className="flex gap-4 cursor-pointer">
          <span className="border shadow-xl rounded-md p-1 text-white bg-gray-500 hover:scale-x-110 hover:scale-y-110 duration-300"><LinkIcon /></span>
          <span className="border shadow-xl rounded-md p-1 text-white bg-gray-500 hover:scale-x-110 hover:scale-y-110 duration-300"><Pencil /></span>
                 <span className="border shadow-xl rounded-md p-1 text-white bg-gray-500 hover:scale-x-110 hover:scale-y-110 duration-300"><Delete /></span>

        </span>
      </div>
      <h2 className="text-2xl font-bold mb-2">{data?.title}</h2>
      <span className="text-gray-500 text-sm">{data?.type}</span>

      <div className="mt-3">
        {linkType === "youtube" && (
          <iframe
            width="100%"
            height="250"
           
            src={getYouTubeEmbed(data.link)!}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {linkType === "twitter" && getTweetId(data.link) && (
          <TwitterTweetEmbed tweetId={getTweetId(data.link)!} />
        )}

        {linkType === "document" && (
          <iframe
            src={data.link}
            width="100%"
            height="400px"
            title="Document Viewer"
          ></iframe>
        )}

        {linkType === "other" && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {data.link}
          </a>
        )}
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap mt-3">
        {data?.tags?.map((t: any, j: number) => (
          <span
            key={j}
            className="bg-[#2c586b27] px-2 py-1 rounded-full text-sm text-gray-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
