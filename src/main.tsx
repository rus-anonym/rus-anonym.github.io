import ReactDOM from "react-dom/client";

import "@vkontakte/vkui/dist/vkui.css";
import "./CSS/disableScrollBar.css";

import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
