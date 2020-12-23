export const contentCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

export const absoluteFullWidthHeight = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export const filter = {
  "-webkit-filter": "grayscale(100)",
  filter: "grayscale(100)",
  "&:hover": {
    "-webkit-filter": "none",
    filter: "none",
  },
};
