import { ThemeProvider } from "@app/core/ui/theme/theme-provider";
import { devTools } from "@ngneat/elf-devtools";
import { MenuWireframe } from "./features/menu/wireframes/menu.wireframe";
import { GlobalStyle } from "./GlobalStyle";
devTools();

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <GlobalStyle />
        <MenuWireframe />
      </div>
    </ThemeProvider>
  );
}

export default App;
