import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Apple", "Banana", "Grape", "Avacodo"];

  let count = 1;

  const handleOnSelectItem = (item: string, value: number) => {
    console.log(item + ':' + value++);
  }

  return (
    <div>
      <ListGroup items={items} heading="Fruits" count={count} onSelectItem={handleOnSelectItem}></ListGroup>
    </div>
  );
}

export default App;
