import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(_request: NextRequest) {
  try {
    const url = "https://adigitalhome.com/";

    // Fetch the website content
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch website: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extract images from the page
    const images: Array<{
      src: string;
      alt: string;
      title?: string;
      category?: string;
      width?: number;
      height?: number;
    }> = [];

    // Look for images in various selectors that might contain gallery images
    $("img").each((index: number, element: cheerio.Element) => {
      const $img = $(element);
      const src = $img.attr("src");
      const alt = $img.attr("alt") || "";
      const title = $img.attr("title") || "";
      const width = parseInt($img.attr("width") || "0");
      const height = parseInt($img.attr("height") || "0");

      if (
        src &&
        !src.startsWith("data:") &&
        !src.includes("logo") &&
        !src.includes("icon")
      ) {
        // Convert relative URLs to absolute URLs
        const absoluteSrc = src.startsWith("http")
          ? src
          : `https://adigitalhome.com${src.startsWith("/") ? "" : "/"}${src}`;

        // Try to determine category based on context and image analysis
        let category = "general";
        const parentText = $img.parent().text().toLowerCase();
        const grandParentText = $img.parent().parent().text().toLowerCase();
        const imgSrc = absoluteSrc.toLowerCase();

        // Category detection logic
        if (
          parentText.includes("residential") ||
          grandParentText.includes("residential") ||
          imgSrc.includes("home") ||
          imgSrc.includes("house") ||
          imgSrc.includes("residential")
        ) {
          category = "residential";
        } else if (
          parentText.includes("commercial") ||
          grandParentText.includes("commercial") ||
          imgSrc.includes("office") ||
          imgSrc.includes("business") ||
          imgSrc.includes("commercial")
        ) {
          category = "commercial";
        } else if (
          parentText.includes("lighting") ||
          grandParentText.includes("lighting") ||
          parentText.includes("shade") ||
          grandParentText.includes("shade") ||
          imgSrc.includes("light") ||
          imgSrc.includes("lamp") ||
          imgSrc.includes("shade")
        ) {
          category = "lighting";
        } else if (
          parentText.includes("audio") ||
          grandParentText.includes("audio") ||
          parentText.includes("video") ||
          grandParentText.includes("video") ||
          parentText.includes("theater") ||
          grandParentText.includes("theater") ||
          imgSrc.includes("speaker") ||
          imgSrc.includes("tv") ||
          imgSrc.includes("theater")
        ) {
          category = "audio-video";
        } else if (
          parentText.includes("security") ||
          grandParentText.includes("security") ||
          parentText.includes("camera") ||
          grandParentText.includes("camera") ||
          imgSrc.includes("camera") ||
          imgSrc.includes("security")
        ) {
          category = "security";
        }

        // Filter out small images and icons
        if (width > 100 || height > 100 || (width === 0 && height === 0)) {
          images.push({
            src: absoluteSrc,
            alt,
            title,
            category,
            width,
            height,
          });
        }
      }
    });

    // Also look for background images in CSS
    $('[style*="background"]').each(
      (index: number, element: cheerio.Element) => {
        const $el = $(element);
        const style = $el.attr("style") || "";
        const backgroundMatch = style.match(
          /background(?:-image)?:\s*url\(['"]?([^'")\s]+)['"]?\)/i
        );

        if (backgroundMatch) {
          const src = backgroundMatch[1];
          if (
            src &&
            !src.startsWith("data:") &&
            !src.includes("logo") &&
            !src.includes("icon")
          ) {
            const absoluteSrc = src.startsWith("http")
              ? src
              : `https://adigitalhome.com${
                  src.startsWith("/") ? "" : "/"
                }${src}`;

            // Determine category based on element context
            let category = "general";
            const elementText = $el.text().toLowerCase();
            const parentText = $el.parent().text().toLowerCase();

            if (
              elementText.includes("residential") ||
              parentText.includes("residential")
            ) {
              category = "residential";
            } else if (
              elementText.includes("commercial") ||
              parentText.includes("commercial")
            ) {
              category = "commercial";
            } else if (
              elementText.includes("lighting") ||
              elementText.includes("shade")
            ) {
              category = "lighting";
            } else if (
              elementText.includes("audio") ||
              elementText.includes("video") ||
              elementText.includes("theater")
            ) {
              category = "audio-video";
            } else if (
              elementText.includes("security") ||
              elementText.includes("camera")
            ) {
              category = "security";
            }

            images.push({
              src: absoluteSrc,
              alt: "",
              title: "",
              category,
            });
          }
        }
      }
    );

    // Filter out duplicates and low-quality images
    const uniqueImages = images
      .filter(
        (img, index, self) => index === self.findIndex((t) => t.src === img.src)
      )
      .filter(
        (img) =>
          img.src.includes(".jpg") ||
          img.src.includes(".jpeg") ||
          img.src.includes(".png") ||
          img.src.includes(".webp") ||
          img.src.includes(".gif")
      );

    // Sort images by category for better organization
    const sortedImages = uniqueImages.sort((a, b) => {
      const categoryOrder = [
        "residential",
        "commercial",
        "lighting",
        "audio-video",
        "security",
        "general",
      ];
      const aIndex = categoryOrder.indexOf(a.category || "general");
      const bIndex = categoryOrder.indexOf(b.category || "general");
      return aIndex - bIndex;
    });

    return NextResponse.json({
      success: true,
      images: sortedImages,
      count: sortedImages.length,
      categories: {
        residential: sortedImages.filter(
          (img) => img.category === "residential"
        ).length,
        commercial: sortedImages.filter((img) => img.category === "commercial")
          .length,
        lighting: sortedImages.filter((img) => img.category === "lighting")
          .length,
        "audio-video": sortedImages.filter(
          (img) => img.category === "audio-video"
        ).length,
        security: sortedImages.filter((img) => img.category === "security")
          .length,
        general: sortedImages.filter((img) => img.category === "general")
          .length,
      },
    });
  } catch (error) {
    console.error("Error scraping gallery images:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to scrape gallery images",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
