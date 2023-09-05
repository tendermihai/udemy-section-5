import CarRenting from "./components/CarRenting.js";
import Cars from "./components/Cars.js";
import NewRents from "./components/NewRents/NewRents.js";

function App() {
  const cars = [
    {
      id: "1",
      carTitle: "Volkswagen Golf",
      carPrice: 70.99,
      date: new Date(2021, 2, 28),
    },
    {
      id: "2",
      carTitle: "Lamborghini",
      carPrice: 70.99,
      date: new Date(2020, 3, 28),
    },
    {
      id: "3",
      carTitle: "BMW",
      carPrice: 70.99,
      date: new Date(2023, 5, 28),
    },
  ];

  const addRentHandler = (rent) => {
    console.log("In App.js");
    console.log(rent);
  };

  return (
    <div>
      <NewRents onAddRent={addRentHandler} />
      <Cars cars={cars} />;
    </div>
  );
}

export default App;
