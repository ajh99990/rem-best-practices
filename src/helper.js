import Bowser from "bowser"
export function isMobile() {
  const ua = window.navigator.userAgent
  const platformType = Bowser.getParser(ua).getPlatformType(true);
  return platformType === "mobile";
}