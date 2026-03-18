"use client";

import { cn } from "@/lib/utils";
import { earlyAccessData } from "@/lib/constants";
import SectionHeading from "@/components/common/SectionHeading";

const HowItWorksSection = () => {
  const { titleBefore, titleHighlight, steps } =
    earlyAccessData.howItWorksSection || {};

  return (
    <section
      aria-label="How it works"
      className="w-full bg-[#F7F8FA] 2xl:pt-[100px] 2xl:pb-[100px] xl:pt-[80px] xl:pb-[80px] sm:pt-[64px] sm:pb-[64px] pt-[52px] pb-[52px] px-6 md:px-12 lg:px-[100px]"
    >
      <SectionHeading
        as="h2"
        id="how-it-works-heading"
        titleBefore={titleBefore}
        titleHighlight={titleHighlight}
      />

      <div className="flex flex-col gap-6 lg:hidden max-w-xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-full bg-[#A389E9] py-4 px-5 sm:py-5 sm:px-6"
          >
            <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-[#090A0F] font-bold text-lg">
                {step.stepNumber}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold text-base sm:text-lg">
                {step.title}
              </h3>
              <p className="text-white/95 text-sm sm:text-base mt-0.5">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden lg:block max-w-[1170px] mx-auto relative">
        <div
          className="absolute left-1/2 top-0 bottom-0 my-7 w-2 -translate-x-1/2 bg-[#090A0F]"
          aria-hidden
        />
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={cn(
                "relative flex items-center gap-6 mb-12 last:mb-0",
                isLeft ? "flex-row" : "flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "flex-1 flex items-center rounded-[170px] bg-[#A389E9] py-[5px] px-[7px]",
                  isLeft
                    ? "flex-row-reverse justify-end mr-20"
                    : "flex-row justify-start ml-20"
                )}
              >
                <div className="shrink-0 size-20 rounded-full bg-white flex items-center justify-center">
                  <span className="text-[#090A0F] font-semibold text-[34px] pb-2">
                    {step.stepNumber}
                  </span>
                </div>
                <div
                  className={cn(
                    "min-w-0 flex-1",
                    isLeft ? "text-right mr-4" : "text-left ml-4"
                  )}
                >
                  <h3 className="text-white font-semibold text-lg xl:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-white/95 text-base mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[36px] rounded-full bg-white z-10 shrink-0 flex items-center justify-center"
                aria-hidden
              >
                <div className="bg-[#967EE2] size-6 rounded-full flex items-center justify-center">
                  <div className="bg-[#9F87E7] size-3.5 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1" aria-hidden />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
