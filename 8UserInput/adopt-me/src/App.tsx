import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.querySelector("div#root")!; // tell the compiler that the container can't be null. There will not be a check if we do this so it's not safe
// alternative runtime check:
// const container = document.querySelector("div#root");
// if (!container) {
//   throw new Error("Root container missing");
// }
const root = createRoot(container);
root.render(<App />);
