"use client";

import Script from "next/script";
import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import SectionHeading from "@/components/common/SectionHeading";

const VendorForm: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [iframeKey, setIframeKey] = useState(0);

  const search = useMemo(() => searchParams?.toString() ?? "", [searchParams]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadEmbeds = () =>
      (
        window as unknown as { Tally?: { loadEmbeds?: () => void } }
      ).Tally?.loadEmbeds?.();

    loadEmbeds();
    const t = window.setTimeout(loadEmbeds, 300);
    return () => window.clearTimeout(t);
  }, [pathname, search, iframeKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const bump = () => setIframeKey((k) => k + 1);

    // `usePathname()` doesn't change for hash-only navigation.
    const onHashChange = () => bump();
    const onVisible = () => {
      if (document.visibilityState === "visible") bump();
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

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
          key={`${pathname}?${search}::${iframeKey}`}
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
