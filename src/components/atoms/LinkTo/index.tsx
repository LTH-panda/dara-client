import Link from "next/link";
import React from "react";

type LinkToProps = {
  href: string;
  children: React.ReactNode;
};

function LinkTo({ href, children }: LinkToProps) {
  return (
    <Link href={href} passHref>
      <a href="replace">{children}</a>
    </Link>
  );
}

export default LinkTo;
