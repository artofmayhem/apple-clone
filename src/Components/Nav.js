import React from "react";
import {
  AppBar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { ApplePng } from "../assets/index";

export default function Nav() {
  return (
    <AppBar
      className="app-bar"
      style={{ backgroundColor: "#333", display: "flex", flexDirection: "row" }}
    >
      <a href={"https://www.apple.com"}>
        <img
          src={ApplePng}
          alt="apple"
          style={{ height: "18px", width: "14px", marginLeft: "10px" }}
        />
      </a>
      <a href="https://www.apple.com/store">Store</a>
      <a href="https://www.apple.com/mac/">Mac</a>
      <a href="https://www.apple.com/ipad/">iPad</a>
      <a href="https://www.apple.com/iphone/">iPhone</a>
      <a href="https://www.apple.com/watch/">Watch</a>
      <a href="https://www.apple.com/tv/">TV</a>
      <a href="https://www.apple.com/music/">Music</a>
      <a href="https://www.apple.com/support/">Support</a>
      <a href="https://www.apple.com/us/search/">
      <SearchIcon
        fontSize={"medium"}
        style={{ fontWeight: "100", color: "#aaa" }}
      /></a>
      <a href="https://www.apple.com/us/shop/goto/bag">
      <WorkOutlineIcon
        fontSize={"medium"}
        style={{ fontWeight: "100", color: "#aaa" }}
      /></a>
    </AppBar>
  );
}
