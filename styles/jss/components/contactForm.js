import { makeStyles } from "@material-ui/core/styles";
import { contentCenter } from "../themes/common";

const ContactForm = makeStyles((theme) => ({
  contactForm: {},
  submitButton: {
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    inlineInputWrapper: {
      "& :not(:last-child)": {
        paddingRight: theme.spacing(3),
      },
    },
  },
}));

export default ContactForm;
