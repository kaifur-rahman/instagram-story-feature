import IconButton from "@mui/material/IconButton";

export default function Button({ handleAction, disabled, Icon, dir }) {
  return (
    <IconButton
      aria-label="prev-btn"
      onClick={handleAction}
      disabled={disabled}
      sx={{
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.4)",
        color: "white",
        zIndex: 10,
        left: dir == "left" ? 0 : undefined,
        right: dir == "right" ? 0 : undefined,
        ml: dir == "left" ? "1rem" : undefined,
        mr: dir == "right" ? "1rem" : undefined,
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.4)",
          transform: "scale(1.1)",
        },
        "&.Mui-disabled": {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          color: "rgba(255, 255, 255, 0.4)",
          cursor: "not-allowed",
        },
      }}
    >
      {Icon && <Icon sx={{ fontSize: "3rem" }} />}
    </IconButton>
  );
}
