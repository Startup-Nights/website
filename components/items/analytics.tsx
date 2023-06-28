import TagManager from 'react-gtm-module';
import { useEffect } from "react";

export const useAnalytics = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5JJCJM9' });
  }, []);
};