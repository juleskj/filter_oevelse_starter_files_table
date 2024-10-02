const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    /*
    let colorIsEl;
    if (each.isElectric === true) {
      colorIsEl = "lightgreen";
    } else {
      let colorIsEl = "";
    }*/

    let colorIsEl = each.isElectric ? "lightgreen" : "";
    let colorIsTandem = each.isTandem ? "lightgreen" : "";

    tbodyPointer.innerHTML += `<tr >
  <td>${each.type || " "}</td>
  <td>${each.fuel ? `${each.fuel}` : "El"}</td>
  <td>${each.passengers || "none"}</td> 
  <td>${each.stops ? `${each.stops}` : "No stops"}</td>
  <td>${each.ownedBy || "none"}</td>
<td style="background-color: ${colorIsEl}; ">${
      each.isElectric ? `Electric ${each.type}` : "Not Electric"
    }</td>
  <td style="background-color: ${colorIsTandem}; " >${
      each.isTandem ? "Er en tandem" : "Er ikke en tandem"
    }</td>
</tr>`;
  });
}

const showElVehiclesBtn = document.querySelector(".showElVehicles");
//her tjekker jeg om hvilke vehicles som har isEletric der er true

showElVehiclesBtn.addEventListener("mousedown", isElVehicles);
//her tjekker jeg om køretøjet er elektrik
function isElVehicles(vehicles) {
  console.log("clicked");
  if (vehicles.isElectric === true) {
    return vehicles;
  }

  const isEl = vehicles.filter(isElVehicles);
  console.log(isEl);
}

//her tjekker jeg om passengers er større end 2
function has2PlusSeats(vehicles) {
  if (vehicles.passengers > 2) {
    return vehicles.passengers;
  }
}

const twoSeats = vehicles.filter(has2PlusSeats);
console.log(twoSeats);
//her tjekker jeg om de elertiske køretøjer er ejet af jonas
function checkOwner(vehicles) {
  if (vehicles.isElectric === true && vehicles.ownedBy === "Jonas") {
    return vehicles.ownedBy;
  }
}

const ownedByJonas = vehicles.filter(checkOwner);
console.log(ownedByJonas);
//her tjekker om de rugbrød fuled også kan have mere end en passesgere
function rugbrod2PlusSeats(vehicles) {
  if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
    return vehicles.passengers;
  }
}

const rugbrodFueled = vehicles.filter(rugbrod2PlusSeats);
console.log(rugbrodFueled);
