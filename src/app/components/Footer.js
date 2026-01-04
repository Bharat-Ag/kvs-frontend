import Image from "next/image";
import Link from "next/link";
import { assets } from "../../../public/assets/svgs/svg";

export default function Footer() {
  const useFulLink = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Products", href: "/products" },
    { title: "FAQs", href: "/faqs" },
    { title: "About Us", href: "/about" },
    { title: "Blogs", href: "/blogs" },
  ];
  const serviceLink = [
    { title: "Ocean Logistics", href: "/services/ocean-logistics" },
    { title: "Air Cargo", href: "/services/air-cargo" },
    { title: "Road Freight", href: "/services/road-freight" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com",
      icon: assets.linkDnIcon,
      alt: "LinkedIn",
    },
    {
      href: "https://twitter.com",
      icon: assets.twitterIcon,
      alt: "X",
    },
    {
      href: "https://www.instagram.com",
      icon: assets.instagramIcon,
      alt: "Instagram",
    },
    {
      href: "https://www.facebook.com",
      icon: assets.facebookIcon,
      alt: "Facebook",
    },
  ];

  return (
    <footer>
      <div className="inner-area position-relative">
        <div className="container">
          <div className="ft-links d-flex">
            <div className="link-box start d-flex">
              <div className="ft-link-col">
                <span className="ftl-title fw-semibold">Useful Links</span>
                <ul className="lnk-block">
                  {useFulLink.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} title={link.title}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ft-link-col">
                <span className="ftl-title fw-semibold">Our Services</span>
                <ul className="lnk-block">
                  {serviceLink.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} title={link.title}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="link-box mid">
              <div className="ft-link-col">
                <span className="ftl-title fw-semibold">Follow us</span>
                <ul className="flex-row">
                  {socialLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} target="_blank" rel="noopener noreferrer" title={item.alt}>
                        <Image src={item.icon} alt={item.alt} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="link-box last help-fts">
              <div className="ft-link-col">
                <ul className="lnk-block">
                  <li>
                    <span className="d-block label">Email</span>
                    <a className="fw-semibold" href="mailto:contact@kavishreegroup.com">
                      contact@kavishreegroup.com
                    </a>
                  </li>
                  <li>
                    <span className="d-block label">Phone</span>
                    <a className="fw-semibold" href="tel:+918347840797">
                      +91 83478 40797
                    </a>
                  </li>
                  <li>
                    <span className="d-block label">Office Address</span>
                    <a className="fw-semibold" href="#">
                      F-124, Param Park Flats, Manjalpur,
                      <br />
                      Vadodara, Gujarat, India
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="ft-divder"></span>
        <div className="container">
          <p className="copyright text-center">Copyright © {new Date().getFullYear()} kavishreegroup. All Rights Reserved. | Design By SkyQuro Tech</p>
        </div>
        <div className="container position-relative">
          <div className="bigLogo">
            <Image src={assets.bigLogo} className="image-cover" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}