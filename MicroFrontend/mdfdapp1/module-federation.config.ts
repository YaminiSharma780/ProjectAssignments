export const mfConfig = {
  name: "mdfdapp1",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/Header.tsx",
    "./Footer": "./src/Footer.tsx"
  },
  shared: ["react", "react-dom"],
};
