import ReactDOM from "react-dom/client";

import "@vkontakte/vkui/dist/cssm/styles/themes.css";
import "./CSS/disableScrollBar.css";
import "./CSS/disableTextSelection.css";

import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
