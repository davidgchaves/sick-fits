import React from "react";
import Link from "next/link";

const Nav = _props => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default Nav;
