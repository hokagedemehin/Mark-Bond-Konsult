import React from "react";
import Head from "next/head";
import { BackToTop } from "material-ui-back-to-top";
import { NavBar } from "../../AllImports";

export const Layout = ({ children, name, desc }) => {
  // console.log(window.innerHeight);
  return (
    <div className="">
      <Head>
        <title>Mark-Bond Konsult - {name}</title>
        <link rel="icon" href="/logo/mark_bond_consult1.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <main className="min-h-screen bg-gray-300">{children}</main>
      <BackToTop size="small" />
    </div>
  );
};
