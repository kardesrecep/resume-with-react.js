import React from "react";
import MobileMenu from "./mobile-menu/MobileMenu";
import Avatar from "./avatar/Avatar";
import "./header.css"
import Name from "./name/Name";
import SocialIcons from "./social-icons/SocialIcons";
import MainNavbar from "./main-navbar/MainNavbar";
import Copyright from "./copyright/Copyright";

const Header = () => {
  return (
    <header className="header pull-left">
      <MobileMenu />
      <Avatar />
      <Name/>
      <SocialIcons/>
      <MainNavbar/>
      <Copyright/>
    </header>
  );
};

export default Header;
