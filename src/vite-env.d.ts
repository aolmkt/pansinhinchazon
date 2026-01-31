/// <reference types="vite/client" />

interface Window {
  trackEvent?: (eventName: string) => void;
  trackingData?: { external_id: string };
  fbq?: (...args: unknown[]) => void;
}
