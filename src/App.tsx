import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="primary" onClick={() => console.log('clicked.')}>
        My button
      </Button>
    </div>
  );
}

export default App;
