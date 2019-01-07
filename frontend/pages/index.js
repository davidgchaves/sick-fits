import React from "react";
import Link from "next/link";

const Index = props => (
  <div>
    <h1>Index</h1>
    <Link href="/sell">
      <a>Go to Sell Page</a>
    </Link>
  </div>
);

export default Index;
