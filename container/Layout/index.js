import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { AiTwotoneShop } from "react-icons/ai";

const Layout = ({ children }) => {
  const links = [
    { href: "/", title: "Home", active: true, icon: <AiTwotoneShop /> },
    { href: "/", title: "Home", active: false, icon: <AiTwotoneShop /> },
    { href: "/", title: "Home", active: false, icon: <AiTwotoneShop /> },
    { href: "/", title: "Home", active: false, icon: <AiTwotoneShop /> },
  ];
  return (
    <Wrapper>
      <div className="content-wrapper">
        <div className="sidebar">
          <div className="sidebar-card">
            <div className="navbar-brand">
              <div className="logo">
                <img
                  src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct.png"
                  alt=""
                />
              </div>
              <span class="ms-1 font-weight-bold">Soft UI Dashboard</span>
            </div>
            <ul className="list-unstyled p-3">
              {links.map((v, i) => (
                <li key={i}>
                  <Link href={v.href}>
                    <a className={v.active ? "active" : ""}>
                      <div className="icon">{v.icon}</div>
                      <span>{v.title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
    </Wrapper>
  );
};

export default Layout;
