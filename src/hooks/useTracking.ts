import { useEffect, useRef, useCallback } from 'react';

export const useTracking = () => {
  const hasTrackedViewContent = useRef(false);
  const hasTrackedWishlist = useRef(false);

  const trackEvent = useCallback((eventName: string) => {
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent(eventName);
    }
  }, []);

  // ViewContent - dispara imediato ao carregar
  useEffect(() => {
    if (!hasTrackedViewContent.current) {
      trackEvent('ViewContent');
      hasTrackedViewContent.current = true;
    }
  }, [trackEvent]);

  // AddToWishlist - retorna cleanup function para IntersectionObserver
  const observePriceSection = useCallback((element: HTMLElement | null) => {
    if (!element || hasTrackedWishlist.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTrackedWishlist.current) {
          trackEvent('AddToWishlist');
          hasTrackedWishlist.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [trackEvent]);

  // InitiateCheckout - para usar no onClick do botão de compra
  const trackInitiateCheckout = useCallback(() => {
    trackEvent('InitiateCheckout');
  }, [trackEvent]);

  return { 
    trackEvent,
    observePriceSection,
    trackInitiateCheckout 
  };
};
