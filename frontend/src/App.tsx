import "./App.css";
import { MenuWireframe } from "./features/menu/wireframes/menu.wireframe";

import { devTools } from "@ngneat/elf-devtools";
devTools();

function App() {
  return (
    <div className="App">
      <MenuWireframe />
    </div>
  );
}

export default App;
