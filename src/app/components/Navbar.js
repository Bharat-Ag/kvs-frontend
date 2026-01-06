"use client";

import Image from "next/image";
import Link from "next/link";
import { assets, DDIcon } from "../../../public/assets/svgs/svg";
import { Dropdown } from "antd";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { OurServicesData } from "../arrayData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  /* ---------- ACTIVE LOGIC ---------- */
  const isServicesActive = pathname.startsWith("/services");
  const isBlogsActive = pathname.startsWith("/blogs");
  const isProductsActive = pathname.startsWith("/products");

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", dropdown: true },
    { title: "Products", href: "/products" },
    { title: "FAQs", href: "/faqs" },
    { title: "About Us", href: "/about" },
    { title: "Blogs", href: "/blogs" },
  ];

  const servicesMenu = {
    items: OurServicesData.map((item, index) => ({
      key: index,
      label: (
        <Link href={`/services/${item?.url}`} onClick={() => setIsNavOpen(false)}>
          {item?.title}
        </Link>
      ),
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

  /* ---------- MOBILE DETECT ---------- */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ---------- OUTSIDE CLICK LOGIC ---------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth < 1200 && navRef.current && !navRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <nav className={isScrolled ? "nav-scrolled" : ""}>
      <header ref={navRef} className={`${isNavOpen ? "nav-open" : ""}`}>
        <div className="container">
          <div className="inner-area">
            <div className="branding">
              <Link href="/" title="Kavi Shree Exim" onClick={() => setIsNavOpen(false)}>
                <Image src={assets.siteLogo} alt="Kavishree logo" priority />
              </Link>
            </div>

            <div className="mid-navlinks">
              <button className="menu_close_btn d-block d-xl-none position-absolute" onClick={() => setIsNavOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>

              <ul className="navbar-nav">
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
                          trigger={isMobile ? ["click"] : ["hover"]}
                          rootClassName="cmn-dd-theme"
                        >
                          <div className="services-nav d-flex align-items-center">
                            {/* TEXT */}
                            <Link
                              href="/services"
                              onClick={(e) => {
                                setIsNavOpen(false);
                                if (isMobile) e.stopPropagation();
                              }}
                              className={`navLink fw-semibold ${isServicesActive ? "active" : ""
                                }`}
                            >
                              Services
                            </Link>

                            <button type="button" className="dd-btn" onClick={(e) => e.stopPropagation()} aria-label="Open services menu">
                              <DDIcon />
                            </button>
                          </div>
                        </Dropdown>
                      ) : (
                        <Link href={link.href} onClick={() => setIsNavOpen(false)} className={`navLink fw-semibold ${isActive ? "active" : ""}`}>
                          {link.title}
                        </Link>
                      )}
                    </li>
                  );
                })}

                <li>
                  <Link href="/contact" onClick={() => setIsNavOpen(false)} className="white-outline-btn inq-nav rounded-full flex-box d-flex d-sm-none mx-auto">
                    Inquiry Now
                  </Link>
                </li>
              </ul>
            </div>

            <Link href="/contact" onClick={() => setIsNavOpen(false)} className="white-outline-btn inq-nav rounded-full flex-box d-none d-sm-flex">
              Inquiry Now
            </Link>

            <div className="burger-menu d-block d-xl-none">
              <div className="menu-inner" onClick={() => setIsNavOpen(!isNavOpen)}>
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
