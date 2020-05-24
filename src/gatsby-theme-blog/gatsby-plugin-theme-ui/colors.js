import merge from "lodash.merge";
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors";

export default merge({}, defaultThemeColors, {
  text: "#333",
  primary: "#ef6351",
  background: "#fff",
  modes: {
    dark: {
      text: "rgba(255,255,255,0.9)",
      primary: "#f7a399",
      background: "#292a36",
    },
  },
});
