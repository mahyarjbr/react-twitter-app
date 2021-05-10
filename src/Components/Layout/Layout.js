import React from "react";

import useStyles from "./Style";
import RightSideBar from './../RightSideBar/RightSideBar';

function Layout() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RightSideBar />

      <div class={classes.mainPart}>main part </div>
      <div class={classes.leftSideBar}>left side bar </div>
    </div>
  );
}

export default Layout;
