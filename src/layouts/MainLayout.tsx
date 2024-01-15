import Header from "@/components/Header";
import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="bg-[#192026]">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
