import { useEffect } from "react";

export default function restoreNavigationState() {
  useEffect(() => {
    let navProps;
    if (typeof window !== "undefined") {
      if (document.cookie) {
        try {
          navProps = JSON.parse(document.cookie);
          scrollTo({
            top: navProps?.scrollPos || 0,
          });
        } catch (err) {
          return;
        }
      }
    }
  }, []);
}
