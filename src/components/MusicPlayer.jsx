import { useEffect, useRef, useState } from "react";
import { weddingData } from "../data/weddingData";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const { music } = weddingData;
  const [playing, setPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio || !music.enabled) return;

    audio.volume = 0.6;
    audio.loop = true;

    const tryPlay = async () => {
      // Don't try to play if user has already left/hidden the page
      if (document.hidden) return;

      try {
        await audio.play();
        setPlaying(true);

        document.removeEventListener("touchstart", tryPlay);
        document.removeEventListener("click", tryPlay);
      } catch {
        setPlaying(false);
      }
    };

    // Try automatically after 3.5 seconds
    const playTimer = setTimeout(tryPlay, 3500);

    // Mobile fallback
    document.addEventListener("touchstart", tryPlay);
    document.addEventListener("click", tryPlay);

    // 🔴 STOP MUSIC when user leaves/minimizes the page
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
        setPlaying(false);
      }
    };

    // 🔴 STOP MUSIC when page is being unloaded/navigated away
    const handlePageHide = () => {
      audio.pause();
      audio.currentTime = 0;
      setPlaying(false);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      // Clear the 3.5 second timer
      clearTimeout(playTimer);

      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("click", tryPlay);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
      window.removeEventListener("pagehide", handlePageHide);

      // 🔴 Always stop music when component is removed
      audio.pause();
      audio.currentTime = 0;
    };
  }, [music.enabled]);

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio || hasError) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.warn("Audio playback failed:", err);
        setHasError(true);
      }
    }
  };

  if (!music.enabled) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={music.src}
        onError={() => setHasError(true)}
        preload="none"
      />

      <button
        className={`music-btn ${
          playing ? "music-btn-playing" : ""
        } ${hasError ? "music-btn-error" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play wedding music"}
        title={
          hasError
            ? "Music file not found"
            : playing
            ? "Pause music"
            : `Play: ${music.label}`
        }
      >
        <span className="music-ripple" aria-hidden="true" />

        {hasError ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
          </svg>
        ) : playing ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}
      </button>
    </>
  );
}