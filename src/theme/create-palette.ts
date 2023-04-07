import { error, info, success, warning, common } from "./colors";

export function createPalette() {
  return {
    background: {
      default: common.background,
    },
    error,
    info,
    common,
    success,
    text: {
      primary: common.bodyText,
      secondary: common.subTitle,
      third: common.subText,
    },
    warning,
  };
}
