import ListGroup from './components/ListGroup';

function App() {
    let items = ["Apple", "Mango", "grape", "orange"];

    const handleSelectItem = (item: string) => {
      console.log(item);
    }
  

  return <div><ListGroup items={items} heading='Fruits' onSelectItem={handleSelectItem}></ListGroup></div>
}

export default App;