import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import HomeView from "./views/HomeView";
function App() {
  return (
    <>
      <Navbar className="w-full" />
      <HomeView />
    </>
  );
}

export default App;
