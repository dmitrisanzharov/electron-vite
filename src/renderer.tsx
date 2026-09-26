import { createRoot } from "react-dom/client";
import App from "./App";
function ReactRoot() {
    return (
        <App />
    );
}

const root = createRoot(document.getElementById("app")!);

root.render(<ReactRoot />);
