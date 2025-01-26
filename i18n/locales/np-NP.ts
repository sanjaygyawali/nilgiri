import type en from "./en.json";

type LocaleMessageType = typeof en;

export default defineI18nLocale(async (locale) => {
  const nepaliLocale: LocaleMessageType = {
    welcome: "स्वागत छ",
    t: 1,
  };
  return nepaliLocale;
});
