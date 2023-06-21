import Analytics from "analytics";
import { Router } from "next/router";
import googleAnalyticsPlugin from "@analytics/google-analytics";
import googleTagManager from "@analytics/google-tag-manager";
import { useEffect } from "react";

const analytics = Analytics({
  app: "startup-nights",
  plugins: [
    googleTagManager({
      containerId: "GTM-5JJCJM9",
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