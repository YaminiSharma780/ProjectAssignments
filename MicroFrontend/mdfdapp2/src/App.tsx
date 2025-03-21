import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "mdfdapp1/Header";
import Footer from "mdfdapp1/Footer";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <main>
      <ErrorBoundary>
        <Header app={{ name: "mdfdapp2" }}/>
      </ErrorBoundary>
      <Footer />
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
