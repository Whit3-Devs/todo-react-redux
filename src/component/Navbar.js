import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import '../assets/css/Navbar.css'

const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  console.log(type)
  return (
    <nav className="navbar">
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        size='lg'
      />
      <span className="navbar__linksContainer">
        <Button size="lg" color="primary" bordered borderWeight="3px">
          <Link to="/">
            Home
          </Link>
        </Button>
        <Button size="lg" color="primary" bordered borderWeight="3px">
          <Link to="/description">
            Description
          </Link>
        </Button>
        <Button size="lg" color="primary" bordered borderWeight="3px">
          <Link to="/about">
            About
          </Link>
        </Button>
      </span>
    </nav>
  );
};

export default Navbar;
