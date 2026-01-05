"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Spin } from "antd";

export default function HydrationLoader() {
    const pathname = usePathname();
    const isFirstLoad = useRef(true);
    const [showLoader, setShowLoader] = useState(true);

    // Initial page load / refresh
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
            isFirstLoad.current = false;
        }, 400); // initial hydration delay

        return () => clearTimeout(timer);
    }, []);

    // Route change loader (skip first load)
    useEffect(() => {
        if (isFirstLoad.current) return;

        setShowLoader(true);

        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 350); // route change delay

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!showLoader) return null;

    return (
        <div className="global-loader">
            <Spin size="large" />
        </div>
    );
}