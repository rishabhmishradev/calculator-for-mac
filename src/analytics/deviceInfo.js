export const getDeviceInfo = async () => {
  const battery = await getBatteryInfo();

  return {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages,
    online: navigator.onLine,
    cookiesEnabled: navigator.cookieEnabled,

    screen: {
      width: window.screen.width,
      height: window.screen.height,
      colorDepth: screen.colorDepth,
      pixelRatio: window.devicePixelRatio,
      orientation: screen.orientation?.type || "Unknown",
    },

    appVersion: "1.0.0",
    os: getOS(),
    deviceType: /Mobi|Android/i.test(navigator.userAgent)
      ? "Mobile"
      : "Desktop",

    hardware: {
      ramGB: navigator.deviceMemory || "Unknown",
      cpuThreads: navigator.hardwareConcurrency || "Unknown",
      gpu: getGPUInfo(),
    },

    battery: battery,

    network: getNetworkInfo(),

    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    locale: Intl.DateTimeFormat().resolvedOptions().locale,
  };
};

const getOS = () => {
  let ua = navigator.userAgent;
  if (ua.includes("Win")) return "Windows";
  if (ua.includes("Mac")) return "MacOS";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad/i.test(ua)) return "iOS";
  if (ua.includes("Linux")) return "Linux";
  return "Unknown";
};

const getBatteryInfo = async () => {
  if (!navigator.getBattery) return "Not Supported";
  const b = await navigator.getBattery();
  return {
    level: Math.round(b.level * 100),
    charging: b.charging,
  };
};

const getNetworkInfo = () => {
  const nav = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
  if (!nav) return "Not Supported";

  return {
    type: nav.type,
    effectiveType: nav.effectiveType,
    downlink: nav.downlink,
    rtt: nav.rtt,
  };
};

const getGPUInfo = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return "Not Supported";

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    return debugInfo
      ? {
          vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
          renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
        }
      : "Limited Access";
  } catch (e) {
    return "Error";
  }
};
