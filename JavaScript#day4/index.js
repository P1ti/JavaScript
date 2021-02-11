 //Exercises

  // for loop
  let numberOfPassengers = 10;

  for (let i = 0; i < numberOfPassengers; i++) {
    console.log("Passenger boarded");
  }
  console.log("All passengers boarded");

  //while loop
  let numberOfPassengers = 10;
  let i = 0;

  while (i < numberOfPassengers) {
    console.log("Passenger boarded");
    i++;
  }
  console.log("All passengers boarded");

  //for looping using an array
  const passengers = [
    "Karter Hudson",
    "Aahil Faulkner",
    "Coby Mcarthur",
    "Grant Campbell",
    "Herbert Whyte"
  ];

  for (let i in passengers) {
    console.log("Passenger: " + passengers[i] + " boarded");
  }

  //for looping using an array with objects
  const passengers = [
    {
      name: "Karter Hudson",
      ticketNumber: 12
    },
    {
      name: "Aahil Faulkner",
      ticketNumber: 14
    },
    {
      name: "Coby Mcarthur",
      ticketNumber: 16
    }
  ];

  for (let passenger of passengers) {
    console.log("Passenger: " + passenger.name + " ticket number " + passenger.ticketNumber);
  }
