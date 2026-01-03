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
  blog: "Blog",
};

const CommonBreadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  const items = [
    { title: <Link href="/">Home</Link> },
    ...paths.map((path, index) => {
      const url = "/" + paths.slice(0, index + 1).join("/");
      const label = breadcrumbMap[path] || path.replace(/-/g, " ");

      return {
        title:
          index === paths.length - 1 ? (
            <span>{label}</span>
          ) : (
            <Link href={url}>{label}</Link>
          ),
      };
    }),
  ];

  return (
    <Breadcrumb
      className="h-info"
      separator={<BlueArrow />}
      items={items}
    />
  );
};

export default CommonBreadcrumb;
