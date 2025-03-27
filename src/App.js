import "./App.css";
import Card from "./components/card";

let products = [
  {
    id: "0",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
  {
    id: "1",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
  {
    id: "2",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
  {
    id: "3",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
  {
    id: "4",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
  {
    id: "5",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
  {
    id: "6",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
  {
    id: "7",
    title: "Onikoma X20 (3.5) gaming headset",
    score: "5",
    price: 10_000_000,
  },
];

function App() {
  return (
    <div className="App">
      {products.map((item) => (
        <Card key={item.id} {...item}></Card>
      ))}
    </div>
  );
}

export default App;
