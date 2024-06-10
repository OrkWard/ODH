export function localize(str: string) {
  return chrome.i18n.getMessage(str);
}
