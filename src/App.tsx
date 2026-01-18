import ListGroup from './components/ListGroup';

function App() {
    let items = ["Apple", "Mango", "grape", "orange"];
  

  return <div><ListGroup items={items} heading='Fruits'></ListGroup></div>
}

export default App;