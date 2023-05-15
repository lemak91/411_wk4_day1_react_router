import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import { Container, Chip, Card, CardContent } from "@mui/material";

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
  const { id } = useParams();

  const findCar = cars.find((car) => car.id === Number(id));

  console.log(findCar);

//   const year = new Date(findCar.Year)
// //   .toLocaleDateString("en-US", {
// //               month: "short",
// //               day: "2-digit",
// //               year: "numeric",
// //             })


  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          minWidth: 320,
          minHeight: 270,
          maxHeight: 320,
          maxWidth: 320,
          alignContent: "center",
          m: 5,
          border: 0.6,
          mx: "auto",
        }}
      >
        <CardContent
          sx={{
            m: 0.2,
          }}
        >
          <h3 style={{ textTransform: "capitalize", }}>{findCar.Name}</h3>
          <Chip sx={{ m: 0.5 }} label={`ID: ${findCar.id}`} />
          <Chip
            sx={{ m: 0.5 }}
            label={`Acceleration: ${findCar.Acceleration}`}
          />
          <Chip sx={{ m: 0.5 }} label={`Cylinders: ${findCar.Cylinders}`} />
          <Chip
            sx={{ m: 0.5 }}
            label={`Displacement: ${findCar.Displacement}`}
          />
          <Chip sx={{ m: 0.5 }} label={`Horsepower: ${findCar.Horsepower}`} />
          <Chip sx={{ m: 0.5 }} label={`MPG: ${findCar.Miles_per_Gallon}`} />
          <Chip sx={{ m: 0.5 }} label={`Origin: ${findCar.Origin}`} />
          <Chip
            sx={{ m: 0.5 }}
            label={`Weight: ${findCar.Weight_in_lbs} lbs`}
          />
          <Chip
            sx={{ m: 0.5 }}
            label={`Year: ${findCar.Year}`}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Car;
