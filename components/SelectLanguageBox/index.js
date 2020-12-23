import React from "react";
import styles from "../../styles/jss/components/selectLanguageBox";
import { FormControl, Select, MenuItem, Typography } from "@material-ui/core";
import { LIST_LANGUAGE } from "../../constants/Const";

export default function SelectLanguageBox(props) {
  const classes = styles();
  const { value, onChange } = props;
  return (
    <FormControl size="small">
      <Select
        name="selectLanguageBox"
        value={value}
        onChange={onChange}
        className={classes.selectInput}
        classes={{ root: classes.selectInput }}
      >
        {LIST_LANGUAGE.map((lang, index) => (
          <MenuItem key={index} value={lang.code}>
            <div className={classes.menuItem}>
              <img
                src={lang.flag}
                alt={lang.flag}
                className={classes.flagImg}
              />
              <Typography variant="caption" display="block">
                {lang.name}
              </Typography>
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
