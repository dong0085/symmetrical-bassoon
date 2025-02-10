// https://symmetrical-bassoon-beta.vercel.app/

document.addEventListener("load", init);

const MODE = Object.freeze({
  DEV: "DEV",
  PROD: "PRODUCTION",
  STAGING: "STAGING",
});
//IIFE that runs before init to determine our app mode

// http://127.0.0.1:5500 - origin
// 127.0.0.1:5500 - host
// 127.0.0.1 - hostname

let mode = (() => {
  if (location.hostname == "127.0.0.1" || location.hostname == "localhost") {
    return MODE.DEV;
  }
  if (location.hostname.endsWith("github.io")) {
    return MODE.STAGING;
  }
  if (location.hostname.includes("vercel.app")) {
    return MODE.PROD;
  }

  return {
    DEV: "DEV",
    PROD: "PRODUCTION",
    STAGING: "STAGING",
  };
})();

// level = 'info' || 'warn' || 'error'
const log = (msg, level = "info") => {
  switch (level) {
    case "info":
      if (mode === MODE.DEV) {
        console.log(msg);
      }
      break;
    case "warn":
      console.warn(msg);
      break;
    case "error":
      console.error(msg);
  }
};

function init() {
  console.log("init");
  log("Hello");
  log("yikes", "warn");
  log("something gone wrong", "error");
}
