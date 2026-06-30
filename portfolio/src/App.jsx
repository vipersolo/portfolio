import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <BrowserRouter>

      <NavigationBar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;