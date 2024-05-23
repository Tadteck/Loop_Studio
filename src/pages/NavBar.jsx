import { Stack } from "@mui/material";
import { ReactComponent as logo } from "../components/images/logo.svg";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Stack>
        <img src={logo} alt="logo" />
      </Stack>
    </div>
  );
};

export default NavBar;
