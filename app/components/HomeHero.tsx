"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, Home, Speaker, Lightbulb } from "lucide-react";

const VIDEO_ID = "l88d5jOPYzE";
const START_TIME = 8;
const END_TIME = 47;

declare global {
  interface Window {
    YT: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          width?: string;
          height?: string;
          playerVars?: Record<string, number | string>;
          events?: { onReady?: (event: { target: YTPlayer }) => void };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YTPlayer {
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  mute: () => void;
}

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const initPlayer = () => {
      if (!containerRef.current || !window.YT) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          start: START_TIME,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            e.target.seekTo(START_TIME, true);
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode?.insertBefore(tag, firstScript);

      window.onYouTubeIframeAPIReady = initPlayer;
    }

    const interval = setInterval(() => {
      const player = playerRef.current;
      if (player?.getCurrentTime) {
        try {
          const currentTime = player.getCurrentTime();
          if (currentTime >= END_TIME) {
            player.seekTo(START_TIME, true);
          }
        } catch {
          // Player may not be ready
        }
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen lg:h-[65vh] overflow-hidden">
      {/* Full-screen YouTube video background */}
      <div className="absolute inset-0 w-full h-full">
        <div
          ref={containerRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.78vh",
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content overlay - transparent backdrop style - centered vertically, offset left */}
      <div className="absolute inset-0 z-10 flex items-center justify-center lg:justify-start lg:pl-12 xl:pl-20 p-6">
        <div className="bg-black/55 backdrop-blur-sm rounded-xl shadow-xl p-6 lg:p-8 max-w-2xl w-full">
          <div className="space-y-6">
            <Link
              href="#reviews"
              className="inline-flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-300">Trusted since 1987</span>
            </Link>

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
              Making Technology <span className="text-blue-400">Simple</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
              You spend half of your life in your house. We&apos;re here to help
              design your perfect sanctuary.
            </p>

            {/* Services links - replacing buttons */}
            <div className="space-y-3">
              <Link
                href="/services/smart-home-integration"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center group-hover:bg-blue-500/50 transition-colors">
                  <Home className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Smart Home Integration
                  </h3>
                  <p className="text-sm text-gray-300">
                    Complete home automation
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </Link>

              <Link
                href="/services/audio-video"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center group-hover:bg-green-500/50 transition-colors">
                  <Speaker className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Audio & Video</h3>
                  <p className="text-sm text-gray-300">Theater quality sound</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </Link>

              <Link
                href="/services/lighting-shades"
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center group-hover:bg-purple-500/50 transition-colors">
                  <Lightbulb className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Lighting & Shades
                  </h3>
                  <p className="text-sm text-gray-300">Intelligent control</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
