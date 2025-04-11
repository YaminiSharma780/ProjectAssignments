import "./App.css";
import InfiniteScroll from "../src/components/InfiniteScroll";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div id="outer-container">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <InfiniteScroll />
      </div>
    </div>
  );
}

export default App;
