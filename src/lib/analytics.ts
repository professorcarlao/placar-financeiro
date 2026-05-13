
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

  if (typeof window !== "undefined" && (window as any).gtag) {
    let callbackCalled = false;
    const handleRedirect = () => {
      if (!callbackCalled) {
        callbackCalled = true;
        window.location.href = url;
      }
    };

    // Set timeout as fallback in case gtag fails or takes too long
    const timeoutId = setTimeout(handleRedirect, 500);

    (window as any).gtag("event", "lp_cta_click", {
      ...eventParams,
      event_callback: () => {
        clearTimeout(timeoutId);
        handleRedirect();
      },
    });
  } else {
    // Fallback if gtag is not present
    window.location.href = url;
  }
};
