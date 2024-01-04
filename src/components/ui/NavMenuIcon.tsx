import Image from "next/image";
import React, { FC } from "react";

interface NavMenuIconProps {
  src: string;
  alt: string;
  children: string;
}

const NavMenuIcon: FC<NavMenuIconProps> = ({ src, alt, children }) => {
  return (
    <div>
      <div className="flex flex-col items-center transition-all duration-400 hover:opacity-70">
        <Image src={src} alt={alt} width={20} height={20} priority />
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};

export default NavMenuIcon;
