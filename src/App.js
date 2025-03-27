import "./App.css";
import Card from "./components/card";

let products = [
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
  { title: "Onikoma X20 (3.5) gaming headset", score: "5", price: 10_000_000 },
];

function App() {
  return (
    <div className="App">
      {products.map((item) => (
        <Card {...item}></Card>
      ))}
    </div>
  );
}

export default App;
