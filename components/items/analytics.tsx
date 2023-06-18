import Analytics from "analytics";
import { Router } from "next/router";
import googleAnalyticsPlugin from "@analytics/google-analytics";
import googleTagManager from "@analytics/google-tag-manager";
import Script from "next/script";
import { useEffect } from "react";

const analytics = Analytics({
  app: "startup-nights",
  plugins: [
    googleAnalyticsPlugin({
      measurementIds: ["G-MNEKNWTZFY"],
    }),
    googleTagManager({
      containerId: "G-MNEKNWTZFY",
    }),
  ],
});

export const useAnalytics = () => {
  useEffect(() => {
    // Fire initial page view
    if (process.env.NODE_ENV === "production") {
      analytics.page();
    }
    // Fire page views on routing
    const handleRouteChange = (url) => {
      if (process.env.NODE_ENV === "production") {
        // We need to wrap it in a rAF to ensure the correct data is sent to Segment
        // https://github.com/zeit/next.js/issues/6025
        requestAnimationFrame(() => {
          analytics.page();
        });
      }
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => Router.events.off("routeChangeComplete", handleRouteChange);
  }, []);

  return analytics;
};

export const LinkedInPixel = () => {
  return (
    <>
      <Script src="/linkedin.js" strategy="beforeInteractive" />
      <noscript>
        <img
          height="1"
          width="1"
          className="hidden"
          src="https://px.ads.linkedin.com/collect/?pid=5621425&fmt=gif"
        />
      </noscript>
    </>
  );
};

export const MetaPixel = () => {
  return (
    <>
      <Script src="/meta.js" strategy="beforeInteractive" />
      <noscript>
        <img
          height="1"
          width="1"
          className="hidden"
          src="https://www.facebook.com/tr?id=202093386119683&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  );
};

export const TiktokPixel = () => {
  return <Script src="/tiktok.js" strategy="beforeInteractive" />;
};
