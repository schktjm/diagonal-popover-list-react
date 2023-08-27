import React from "react";
import ReactDOM from "react-dom/client";

import { PopoverList } from "../../packages"; // ライブラリのインポート

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PopoverList />
  </React.StrictMode>
);
