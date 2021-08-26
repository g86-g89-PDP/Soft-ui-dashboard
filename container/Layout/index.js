import React from "react";
import Wrapper from "./Wrapper";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <div className="sidebar">
          <div className="sidebar-card">Sidebar</div>
        </div>
        <div className="content">
          <div className="header shadow">
            <div className="logo">
              <img src="vercel.svg" alt="" />
            </div>
          </div>
          <div className="pages">{children}</div>
        </div>
      </div>
      {children}
    </Wrapper>
  );
};

export default Layout;
