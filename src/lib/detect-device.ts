"use client";

export const isWindow = typeof window !== "undefined";

export const detectDevice = () => {
  if (isWindow) return "Mobile";
  // const userAgent = navigator.userAgent.toLowerCase();

  // if (/mobile|android|iphone|ipad|tablet/.test(userAgent)) {
  //   console.log("Mobile device detected");
  //   return "Mobile";
  // } else {
  //   console.log("Desktop device detected");
  //   return "Desktop";
  // }
};

export const isMobile = detectDevice() === "Mobile";
