
type GtagEventProps = {
  cta_location: string;
  cta_text: string;
  destination_url: string;
  page_path: string;
  hostname: string;
  event_callback?: () => void;
};

/**
 * Standardized tracking for CTA clicks from LP to App.
 * Ensures GA4 event is fired with consistent parameters before redirection.
 */
export const trackCtaClick = (location: string, text: string, url: string = "https://app.financasemcampo.com.br/signup") => {
  const eventParams: GtagEventProps = {
    cta_location: location,
    cta_text: text,
    destination_url: url,
    page_path: window.location.pathname,
    hostname: window.location.hostname,
  };

  const isGtagLoaded = typeof window !== "undefined" && (window as any).gtag;
  const isFbqLoaded = typeof window !== "undefined" && (window as any).fbq;

  if (isGtagLoaded || isFbqLoaded) {
    let callbackCalled = false;
    const handleRedirect = () => {
      if (!callbackCalled) {
        callbackCalled = true;
        window.location.href = url;
      }
    };

    // Set timeout as fallback in case tracking fails or takes too long
    const timeoutId = setTimeout(handleRedirect, 500);

    // 1. GA4 Event
    if (isGtagLoaded) {
      (window as any).gtag("event", "lp_cta_click", {
        ...eventParams,
        event_callback: () => {
          clearTimeout(timeoutId);
          handleRedirect();
        },
      });
    }

    // 2. Meta Pixel Events
    if (isFbqLoaded) {
      // Custom Event
      (window as any).fbq("trackCustom", "LP_CTA_Click", {
        cta_location: location,
        cta_text: text,
        destination_url: url,
        page_path: window.location.pathname,
        hostname: window.location.hostname,
      });

      // Standard Event: Lead (Only for signup destination)
      if (url.includes("app.financasemcampo.com.br/signup")) {
        (window as any).fbq("track", "Lead", {
          content_name: "Landing Page CTA",
          content_category: "signup",
          cta_location: location,
          cta_text: text,
          destination_url: url,
        });
      }

      // If GA4 was also triggered, we rely on the 500ms timeout or GA4's callback 
      // (Meta Pixel doesn't have a native callback in its basic 'track' command)
      // If ONLY Meta Pixel is loaded, we redirect after triggering
      if (!isGtagLoaded) {
        clearTimeout(timeoutId);
        handleRedirect();
      } else {
        // If both are loaded, GA4 callback or timeout will handle redirect
        // We ensure GA4 callback clears the timeout
      }
    }
  } else {
    // Fallback if no tracking is present
    window.location.href = url;
  }
};

