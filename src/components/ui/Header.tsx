import React, { FC } from "react";
import { Button } from "./button";
import Link from "next/link";
import NavMenuIcon from "./NavMenuIcon";

const Header: FC = () => {
  return (
    <div className=" h-16 bg-lime-300 p-8 flex items-center justify-between">
      <p>Header-LOGO</p>
      <div className="flex items-center justify-between gap-8">
        <Link href={`/`}>
          <NavMenuIcon src="/Home Page.png" alt="ホームのアイコン">
            HOME
          </NavMenuIcon>
        </Link>
        <Link href={`/`}>
          <NavMenuIcon src="/Cactus.png" alt="サボテンのアイコン">
            ABOUT
          </NavMenuIcon>
        </Link>
        <Link href={`/`}>
          <NavMenuIcon src="/Sign Up.png" alt="サインのアイコン">
            SIGN UP
          </NavMenuIcon>
        </Link>
      </div>
    </div>
  );
};

export default Header;
