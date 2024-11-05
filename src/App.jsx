import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar.jsx";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CamperCatalog = lazy(() => import("./pages/CamperCatalog.jsx"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage.jsx"));
function App() {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CamperCatalog />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
