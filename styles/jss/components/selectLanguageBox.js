import { makeStyles } from "@material-ui/core/styles";

const flagHeight = "3vh";

const SelectLanguageBox = makeStyles({
  selectInput: {
    height: flagHeight,
    overflow: "hidden",
    "&::before, &::after": {
      display: "none",
    },
    "& :focus": {
      backgroundColor: "transparent",
    },
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
  },
  flagImg: {
    height: flagHeight,
    objectFit: "contain",
    borderRadius: 4,
    marginRight: 10,
  },
});

export default SelectLanguageBox;
