"use client";
import Image from "next/image";
import Link from "next/link";
import { assets, DDIcon } from "../../../public/assets/svgs/svg";
import { Dropdown } from "antd";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const serviceLinks = [
    { title: "Ocean Logistics", href: "/ocean-logistics" },
    { title: "Air Cargo", href: "/air-cargo" },
    { title: "Road Freight", href: "/road-freight" },
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
      <header>
        <div className="container">
          <div className="inner-area">
            <div className="branding">
              <Link href="/" title="Kavi Shree Exim">
                <Image src={assets.siteLogo} alt="Kavishree logo" />
              </Link>
            </div>

            <div className="mid-navlinks">
              <ul className="navbar-nav flex-row gap-4">
                {navLinks.map((link, idx) => (
                  <li key={idx} className="nav-item">
                    {link.dropdown ? (
                      <Dropdown menu={servicesMenu} trigger={["click"]} rootClassName="cmn-dd-theme">
                        <span className="nav-link fw-semibold text-white cursor-pointer">
                          {link.title} <DDIcon />
                        </span>
                      </Dropdown>
                    ) : (
                      <Link
                        className="nav-link fw-semibold text-white"
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="#"
              title="Inquiry Now"
              className="white-outline-btn inq-nav rounded-full flex-box"
            >
              Inquiry Now
            </Link>
          </div>
        </div>
      </header>
    </nav>
  );
}
