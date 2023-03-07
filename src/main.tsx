import React from "react";
import ReactDOM from "react-dom/client";

import "./CSS/disableScrollBar.css";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./app";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(<App />);
