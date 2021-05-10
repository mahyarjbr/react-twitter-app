import React from "react";
import useStyles from "./Styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import { ButtonBase, Grid, Typography } from "@material-ui/core";

const RightSideBar = () => {
  const classes = useStyles();
  const hashtags = ["کرونا-ویروس", "هلو-سامر", "بایدن", "برجام","covid19"];
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-evenly"
      >
        <TwitterIcon color="primary" style={{ fontSize: "3rem" }} />
        <Typography variant="h5" color="primary">
          توییتر فارسی
        </Typography>
      </Grid>
      <Typography className={classes.hashTageTitle} variant="h5">
        داغ ترین هشتگ ها
      </Typography>
      <Grid container alignItems="flex-start" direction="column">
        {hashtags.map((item) => (
          <ButtonBase >
            <i
              style={{ fontSize: "1.5rem", marginLeft: ".8rem" }}
              className="fas fa-hashtag"
            ></i>
            <Typography  variant="h5">{item}</Typography>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
};

export default RightSideBar;
