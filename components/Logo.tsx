import React from "react";
import LogoImage from "@logos/black.svg";
import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
function Logo() {
  return (
    <Link prefetch={false} className="overflow-hidden" href="/">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            alt="Dark Mode Light Mode logo"
            className="dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
