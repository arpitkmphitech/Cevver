"use client";

import Script from "next/script";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import SectionHeading from "@/components/common/SectionHeading";

const VendorForm: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadEmbeds = () =>
      (
        window as unknown as { Tally?: { loadEmbeds?: () => void } }
      ).Tally?.loadEmbeds?.();

    loadEmbeds();
    const t = window.setTimeout(loadEmbeds, 300);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div className="2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] md:px-12 lg:px-[100px] px-[20px]">
      <SectionHeading
        as="h2"
        id="vendor-form-heading"
        titleBefore="Ready to get more "
        titleHighlight="clients?"
        subtitle="Join the vendor waitlist."
      />

      <div className="mx-auto rounded-[20px] bg-[#F7F8FA] 2xl:p-[50px] xl:p-[40px] sm:p-[30px] p-[20px] max-w-[640px] sm:max-w-[792px]">
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
        <iframe
          key={pathname}
          loading="lazy"
          className="w-full"
          title="Join Vendor Waitlist"
          data-tally-src="https://tally.so/embed/dWPKON?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        />
      </div>
    </div>
  );
};

export default VendorForm;
