import { makeStyles } from "@material-ui/core/styles";
import { backgroundLightGray, textMainGray } from "../themes/colors";

const ListCardWithIcon = makeStyles((theme) => ({
  listCardWithIcon: {},
  listCardItem: {
    display: "flex",
    height: "100%",
    padding: theme.spacing(3),
    backgroundColor: backgroundLightGray,
    borderRadius: 4,
    overflow: "scroll",
  },
  listCardItem__icon: {
    marginRight: theme.spacing(2),
    marginTop: 4,
    color: theme.palette.secondary.main,
    fontSize: "xx-large",
  },
  listCardItem__title: {
    fontWeight: "bold",
    color: textMainGray,
    marginBottom: theme.spacing(2),
  },
}));

export default ListCardWithIcon;
