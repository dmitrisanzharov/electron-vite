import { createRoot } from "react-dom/client";

function App() {
    return (
        <>
            <h1>Hello from React + Electron!</h1>
            <p>omg it working</p>
        </>
    );
}

const root = createRoot(document.getElementById("app")!);

root.render(<App />);
