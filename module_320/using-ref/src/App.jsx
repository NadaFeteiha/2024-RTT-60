import { useState, useRef } from "react";
import stock from "./assets/stock.mov";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const myRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      myRef.current.play();
    } else {
      myRef.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="75%"
        ref={myRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={stock} type="video/mp4" />
      </video>
    </>
  );
}