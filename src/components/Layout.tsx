import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

export default Layout;
