import { setAccessToken } from "apis/@client";
import { Header } from "components/modules";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") setAccessToken(data.user.jwtToken);
  }, [status]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
