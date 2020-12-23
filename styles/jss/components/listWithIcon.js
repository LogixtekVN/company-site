import { makeStyles } from "@material-ui/core/styles";
import { blueMain } from "../themes/colors";

const ListWithIcon = makeStyles({
  listWithIcon: {
    listStyleType: "none",
    "& li": {
      display: "flex",
      paddingTop: 10,
    },
    "& .MuiIcon-root": {
      marginRight: 10,
    },
    "& .MuiIcon-colorAction": {
      color: blueMain,
    },
  },
});

export default ListWithIcon;
