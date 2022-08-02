import { Header } from "components/modules";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  // Layout 만 비즈니스 로직 작성
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default Layout;
