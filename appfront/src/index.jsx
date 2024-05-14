import { createRoot } from "react-dom/client";
import App from "./app";

const divDoIndex = document.getElementById('root');
const root = createRoot(divDoIndex);

root.render(<App />);