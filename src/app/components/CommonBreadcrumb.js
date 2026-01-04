"use client";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BlueArrow } from "../../../public/assets/svgs/svg";

const breadcrumbMap = {
  about: "About Us",
  contact: "Contact Us",
  services: "Services",
  "ocean-logistics": "Ocean Logistics",
  "air-cargo": "Air Cargo",
  "road-freight": "Road Freight",
  "export-solutions": "Export Solutions",
  "import-services": "Import Services",
  "trade-documentation": "Trade Documentation",
  products: "Our Products",
  blogs: "Blogs",
};

const CommonBreadcrumb = ({ level }) => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  // Limit paths based on the level prop
  const limitedPaths = level ? paths.slice(0, level) : paths;

  const items = [
    { title: <Link href="/">Home</Link> },
    ...limitedPaths.map((path, index) => {
      const url = "/" + paths.slice(0, index + 1).join("/");
      const label = breadcrumbMap[path] || path.replace(/-/g, " ");

      return {
        title:
          index === limitedPaths.length - 1 ? (
            <span>{label}</span>
          ) : (
            <Link href={url}>{label}</Link>
          ),
      };
    }),
  ];

  return (
    <Breadcrumb className="h-info" separator={<BlueArrow />} items={items} />
  );
};

export default CommonBreadcrumb;