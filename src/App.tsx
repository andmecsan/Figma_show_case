import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ExampleView } from "./ExampleView";

function App() {
  return (
    <div className="App" style={{ height: '100vw'}}>
      <Router>
        <Routes>
          <Route index element={<ExampleView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
