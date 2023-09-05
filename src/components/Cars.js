import CarRenting from "./CarRenting";
import Card from "./Card";

const Cars = ({ cars }) => {
  return (
    <Card className="cars">
      <h2>Prices are shown for a week</h2>
      <CarRenting
        carTitle={cars[0].carTitle}
        carPrice={cars[0].carPrice}
        date={cars[0].date}
      />

      <CarRenting
        carTitle={cars[1].carTitle}
        carPrice={cars[1].carPrice}
        date={cars[1].date}
      />

      <CarRenting
        carTitle={cars[2].carTitle}
        carPrice={cars[2].carPrice}
        date={cars[2].date}
      />
    </Card>
  );
};

export default Cars;
