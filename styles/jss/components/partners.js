import { makeStyles } from "@material-ui/core/styles";
import { contentCenter, filter, filterNone } from "../themes/common";

const Partners = makeStyles({
  partners: {
    ...contentCenter,
    width: "100%",
    "& img": {
      width: 200,
      height: 110,
      objectFit: "contain",
      ...filter,
    },
  },
});

export default Partners;
