import Sidebar from "./components/Sidebar";
import Route from "./routing/Route";
import ButtonPage from "./pages/ButtonPage"
import DropdownPage from "./pages/DropdownPage"
import AccordionPage from "./pages/AccordionPage"
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
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
        <Route to="/modal">
          <ModalPage />
        </Route>
        <Route to="/table">
          <TablePage />
        </Route>
        <Route to="/counter">
          <CounterPage />
        </Route>
    </div>
    </div>
  );
}

export default App;
