import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && <Alert onclose={() => setShowAlert(false)}> This is an alert. </Alert>}
      <Button color="primary" onClick={() => setShowAlert(true) }>
        My button
      </Button>
    </div>
  );
}

export default App;
