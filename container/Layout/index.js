import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { AiFillCreditCard, AiTwotoneShop } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";
import { BiSearch, BiTable } from "react-icons/bi";
import { IoPerson, IoRocketSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { FormControl, InputGroup } from "react-bootstrap";
import { Slide } from "@material-ui/core";
// import { FormControl, InputGroup } from "react-bootstrap";
const Layout = ({ children }) => {
  const links = [
    { href: "/", title: "Home", icon: <AiTwotoneShop /> },
    {
      href: "/profile",
      title: "Profile",
      icon: <IoPerson />,
    },
    { href: "/billing", title: "Billing", icon: <AiFillCreditCard /> },
    { href: "/sign_up", title: "Sign Up", icon: <IoRocketSharp /> },
    { href: "/Table", title: "Table", icon: <BiTable /> },
  ];

  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <Wrapper>
      <div className="content-wrapper">
        <div className="sidebar shadow">
          <div className="sidebar-card">
            <div className="navbar-brand">
              <div className="logo">
                <img
                  src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/logo-ct.png"
                  alt=""
                />
              </div>
              <span className="ms-1 font-weight-bold">Soft UI Dashboard</span>
            </div>
            <ul className="list-unstyled p-3">
              {links.map((v, i) => (
                <li key={i}>
                  <Slide direction="right" delay={i * 100}>
                    <Link href={v.href}>
                      <a className={asPath == v.href ? "active" : ""}>
                        <div className="icon shadow">{v.icon}</div>
                        <span>{v.title}</span>
                      </a>
                    </Link>
                  </Slide>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="header shadow d-flex justify-content-between">
            <div className="left-side">
              <span className="">Pages </span>
              <span className="">
                {" "}
                /
                {asPath == "/" ? (
                  <span className="ms-1 fw-bold">Home</span>
                ) : (
                  <span className="ms-1 fw-bold">
                    {asPath.toUpperCase().substring(1)}
                  </span>
                )}
              </span>
            </div>
            <div className="right-side d-flex align-items-center">
              <InputGroup className="w-50">
                <InputGroup.Text id="basic-addon1">
                  <BiSearch />
                </InputGroup.Text>
                <FormControl
                  placeholder="Type here..."
                  aria-label="Type here..."
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <div className="sign-in">
                <IoPerson />
                <span>Sign In</span>
              </div>

              <FiSettings />
              <IoMdNotifications />
            </div>
          </div>
          <div className="pages">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Layout;
