import Sidebar from "./components/Sidebar";
import Route from "./routing/Route";
import ButtonPage from "./pages/ButtonPage"
import DropdownPage from "./pages/DropdownPage"
import AccordionPage from "./pages/AccordionPage"

function App() {
  return (
    <div>
    <Sidebar />
    <div>
        <Route to="/button">
          <ButtonPage />
        </Route>
        <Route to="/dropdown">
          <DropdownPage />
        </Route>
        <Route to="/accordion">
          <AccordionPage />
        </Route>
    </div>
    </div>
  );
}

export default App;
