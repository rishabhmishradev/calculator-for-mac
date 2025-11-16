// src/analytics/deviceInfo.js
export const getDeviceInfo = () => {
  try {
    const nav = window.navigator || {};
    const screenEl = window.screen || {};
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection || {};
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    return {
      // navigator basics
      userAgent: nav.userAgent || null,
      vendor: nav.vendor || null,
      platform: nav.platform || null,
      language: nav.language || null,
      languages: nav.languages || null,
      cookieEnabled: nav.cookieEnabled || false,
      // hardware / capabilities
      hardwareConcurrency: nav.hardwareConcurrency || null,
      deviceMemory: nav.deviceMemory || null,
      maxTouchPoints: nav.maxTouchPoints || 0,
      touchSupported: ("ontouchstart" in window) || (nav.maxTouchPoints && nav.maxTouchPoints > 0),
      // screen / viewport
      screen: {
        width: screenEl.width || null,
        height: screenEl.height || null,
        availWidth: screenEl.availWidth || null,
        availHeight: screenEl.availHeight || null,
        colorDepth: screenEl.colorDepth || null,
        pixelDepth: screenEl.pixelDepth || null,
        devicePixelRatio: window.devicePixelRatio || null,
      },
      viewport: {
        innerWidth: window.innerWidth || null,
        innerHeight: window.innerHeight || null,
      },
      // connection / network hints
      connection: {
        effectiveType: connection.effectiveType || null,
        type: connection.type || null,
        downlink: connection.downlink || null,
        rtt: connection.rtt || null,
        saveData: connection.saveData || false,
      },
      // battery will be filled async if available
      battery: null,
      // preferences & misc
      prefersDark,
      vendorSub: nav.vendorSub || null,
      product: nav.product || null,
      productSub: nav.productSub || null,
      mimeTypesLength: (nav.mimeTypes && nav.mimeTypes.length) || null,
      pluginsLength: (nav.plugins && nav.plugins.length) || null,
      timezone: (() => {
        try { return Intl.DateTimeFormat().resolvedOptions().timeZone || null; } catch { return null; }
      })(),
      locale: (() => {
        try { return Intl.NumberFormat().resolvedOptions().locale || null; } catch { return null; }
      })(),
      // timestamp client-side to help ordering (serverTimestamp used at write)
      clientTimestamp: Date.now(),
    };
  } catch (err) {
    console.error("getDeviceInfo error", err);
    return { error: "device-info-failed", clientTimestamp: Date.now() };
  }
};

// Async battery helper (returns object or null)
export const getBatteryInfo = async () => {
  try {
    if (!navigator.getBattery) return null;
    const battery = await navigator.getBattery();
    return {
      charging: battery.charging,
      level: typeof battery.level === "number" ? Math.round(battery.level * 100) : null, // percent 0-100
      chargingTime: battery.chargingTime,
      dischargingTime: battery.dischargingTime,
    };
  } catch (e) {
    // silently fail for unsupported browsers
    return null;
  }
};
