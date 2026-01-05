"use client";

import Image from "next/image";
import Link from "next/link";
import { assets, DDIcon } from "../../../public/assets/svgs/svg";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();

  /* ---------- ACTIVE LOGIC ---------- */
  const isServicesActive = pathname.startsWith("/services");
  const isBlogsActive = pathname.startsWith("/blogs");
  const isProductsActive = pathname.startsWith("/products");

  /* ---------- NAV DATA ---------- */
  const serviceLinks = [
    { title: "Ocean Logistics", href: "/services/ocean-logistics" },
    { title: "Air Cargo", href: "/services/air-cargo" },
    { title: "Road Freight", href: "/services/road-freight" },
  ];

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", dropdown: true },
    { title: "Products", href: "/products" },
    { title: "FAQs", href: "/faqs" },
    { title: "About Us", href: "/about" },
    { title: "Blogs", href: "/blogs" },
  ];

  const servicesMenu = {
    items: serviceLinks.map((item, index) => ({
      key: index,
      label: <Link href={item.href}>{item.title}</Link>,
    })),
  };

  /* ---------- SCROLL LOGIC ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "nav-scrolled" : ""}>
      <header className={`${isNavOpen ? "nav-open" : ""}`}>
        <div className="container">
          <div className="inner-area">
            <div className="branding">
              <Link href="/" title="Kavi Shree Exim">
                <Image src={assets.siteLogo} alt="Kavishree logo" priority />
              </Link>
            </div>
            <div className="mid-navlinks">
              <button className="menu_close_btn d-block d-xl-none position-absolute" onClick={() => {
                  setIsNavOpen(false);
                }}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <ul className="navbar-nav ">
                {navLinks.map((link, idx) => {
                  const isActive =
                    (link.title === "Services" && isServicesActive) ||
                    (link.title === "Blogs" && isBlogsActive) ||
                    (link.title === "Products" && isProductsActive) ||
                    pathname === link.href;

                  return (
                    <li key={idx} className="nav-item">
                      {link.dropdown ? (
                        <Dropdown
                          menu={servicesMenu}
                          trigger={["click"]}
                          rootClassName="cmn-dd-theme"
                        >
                          <span
                            className={`navLink fw-semibold cursor-pointer ${
                              isServicesActive ? "active" : ""
                            }`}
                          >
                            {link.title} <DDIcon />
                          </span>
                        </Dropdown>
                      ) : (
                        <Link
                          href={link.href}
                          className={`navLink fw-semibold ${
                            isActive ? "active" : ""
                          }`}
                        >
                          {link.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <Link
              href="/contact"
              title="Inquiry Now"
              className="white-outline-btn inq-nav rounded-full flex-box d-none d-sm-flex "
            >
              Inquiry Now
            </Link>
            <div className="burger-menu d-block d-xl-none ">
              <div
                className="menu-inner"
                onClick={() => {
                  setIsNavOpen(!isNavOpen);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
