import "./App.css";
import Button from "./components/Atoms/Button/Button";

function App() {
  return (
    <div
      style={{
        top: 0,
        display: "flex",
        paddingTop: "20px",
        justifyContent: "center",
      }}
    >
      <div className="header">
        <div className="header-leave">
          <Button title="LEAVE" />
        </div>
        <div className="header-title">My Room</div>
      </div>
    </div>
  );
}

export default App;
