import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Stories({ currStory }) {
  const [loaded, setLoaded] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFade(false);

    const img = new Image();
    img.src = currStory.url;
    img.onload = () => {
      setTimeout(() => {
        setLoaded(true);
        setFade(true);
      }, 1000);
    };
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
