import { MenuWireframe } from "./features/menu/wireframes/menu.wireframe";

import { devTools } from "@ngneat/elf-devtools";
import { GlobalStyle } from "./GlobalStyle";
devTools();

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MenuWireframe />
    </div>
  );
}

export default App;
