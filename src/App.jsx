import Tree from "./components/Tree";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Tree />
      <Analytics />
    </div>
  );
}

export default App;
