import './App.css';
import Card from './components/card';

let products = [
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
  {title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000},
]

function App() {
  return (
    <div className="App">
      <Card {...products[0]} ></Card>
      <Card {...products[1]} ></Card>
      <Card {...products[2]} ></Card>
      <Card {...products[3]} ></Card>
      <Card {...products[4]} ></Card>
      <Card {...products[5]} ></Card>
      <Card {...products[6]} ></Card>
    </div>
  );
}

export default App;
