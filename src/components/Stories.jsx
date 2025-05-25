import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Stories({ currStory }) {
  const [loaded, setLoaded] = useState(false);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoaded(false);
    setFade(false);
    setProgress(0);

    const img = new Image();
    img.src = currStory.url;
    img.onload = () => {
      setTimeout(() => {
        setLoaded(true);
        setFade(true);
      }, 1000);
    };

    // Animate progress bar
    let frame;
    const duration = 5000;
    const start = Date.now();
    function animateProgress() {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);
      if (percent < 100) {
        frame = requestAnimationFrame(animateProgress);
      }
    }
    animateProgress();

    return () => cancelAnimationFrame(frame);
  }, [currStory]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      {/* Top progress bar */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "rgba(255,255,255,0.2)",
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "white",
            transition: "width 0.1s linear",
          }}
        />
      </Box>

      {!loaded && (
        <CircularProgress
          sx={{
            color: "white",
            position: "absolute",
            zIndex: 5,
          }}
        />
      )}

      {loaded && (
        <img
          key={currStory.id}
          src={currStory.url}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      )}
    </Box>
  );
}
