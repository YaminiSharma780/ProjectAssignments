import ReactDOM from "react-dom/client";
import "./index.css";
import { lazy, Suspense, useState } from "react";
// import Header from "mdfdapp1/Header";
// import Footer from "mdfdapp1/Footer";

const Header = lazy(() => import("mdfdapp1/Header"));
const Footer = lazy(() => import("mdfdapp1/Footer"));

const App = () => {
  const [loadHeader, setLoadHeader] = useState(false);
  const [loadFooter, setLoadFooter] = useState(false);

  return (
    <main>
      {loadHeader && (
        <Suspense fallback={<div>Loading Header..</div>}>
          <Header />
        </Suspense>
      )}
      <button
        onClick={() => setLoadHeader(true)}
        className="h-12 w-40 text-white text-2xl bg-zinc-800 cursor-pointer"
      >
        Load Header
      </button>
      <button
        onClick={() => setLoadFooter(true)}
        className="h-12 w-40 text-white text-2xl bg-zinc-800 cursor-pointer"
      >
        Load Footer
      </button>
      {loadFooter && (
        <Suspense fallback={<div>Loading Footer..</div>}>
          <Footer />
        </Suspense>
      )}
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
