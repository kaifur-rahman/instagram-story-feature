import { useState, useEffect } from "react";
import { stories } from "../data/data";
import Stories from "./Stories";
import Button from "./Button";
import Box from "@mui/material/Box";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Layout() {
  const [currImage, setCurrImage] = useState(stories[0]);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);

  const handleNext = () => {
    const currIdx = stories.findIndex((story) => story.id === currImage.id);
    if (currIdx + 1 < stories.length) {
      setCurrImage(stories[currIdx + 1]);
    }
  };
  const handlePrev = () => {
    const currIdx = stories.findIndex((story) => story.id === currImage.id);
    if (currIdx > 0) {
      setCurrImage(stories[currIdx - 1]);
    }
  };
  useEffect(() => {
    const currIdx = stories.findIndex((story) => story.id === currImage.id);

    setDisablePrev(currIdx === 0);
    setDisableNext(currIdx === stories.length - 1);

    const timer = setTimeout(() => {
      if (currIdx + 1 < stories.length) {
        setCurrImage(stories[currIdx + 1]);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currImage]);

  return (
    <>
      {/* Mobile View: show stories */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* prev button */}
        <Button
          Icon={ArrowLeftIcon}
          handleAction={handlePrev}
          disabled={disablePrev}
          dir={"left"}
        />
        {/* stories */}
        <Stories currStory={currImage} />
        {/* next button */}
        <Button
          Icon={ArrowRightIcon}
          handleAction={handleNext}
          disabled={disableNext}
          dir={"right"}
        />
      </Box>

      {/* Desktop View: show message */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#555",
          textAlign: "center",
          px: 2,
        }}
      >
        Please open this in mobile. This is not supported on desktop.
      </Box>
    </>
  );
}
