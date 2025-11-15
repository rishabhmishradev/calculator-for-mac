export const getDeviceInfo = () => {
return {
userAgent: navigator.userAgent,
platform: navigator.platform,
screen: {
width: window.screen.width,
height: window.screen.height,
},
appVersion: "1.0.0",
os: getOS(),
deviceType: /Mobi|Android/i.test(navigator.userAgent)
? "Mobile"
: "Desktop",
};
};

const getOS = () => {
let ua = navigator.userAgent;
if (ua.includes("Win")) return "Windows";
if (ua.includes("Mac")) return "MacOS";
if (ua.includes("Linux")) return "Linux";
if (/Android/i.test(ua)) return "Android";
if (/iPhone|iPad/i.test(ua)) return "iOS";
return "Unknown";
};
