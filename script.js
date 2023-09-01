const form = document.getElementById("bookingForm");
const confirmationMessage = document.getElementById("confirmation");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  confirmationMessage.style.display = "block";
});

form.addEventListener("click", function (event) {
  if (event.target.getAttribute("type") === "calculate") {
    event.preventDefault();

    const totalDays = parseInt(document.getElementById("totalDays").value);
    const totalPersons = parseInt(document.getElementById("totalPersons").value);
    const roomType = document.getElementById("roomType").value;
    const amenities = Array.from(document.getElementById("amenities").options)
      .filter(option => option.selected)
      .map(option => option.value);

    const advanceAmount = parseInt(document.getElementById("advanceAmount").value);
    const perDayExtraPersonCost = 1000;
    const roomRates = {
      Delux: 2500,
      Suite: 4000,
    };
    const amenityRates = {
      AC: 1000,
      Locker: 300,
    };

    const totalRoomCost = roomRates[roomType] * totalDays;
    const totalAmenitiesCost = amenities.reduce((total, amenity) => total + amenityRates[amenity], 0) * totalDays;
    const totalCost = totalRoomCost + totalAmenitiesCost;

    document.getElementById("totalRoomCost").textContent = `${totalRoomCost}/-`;
    document.getElementById("totalAmenitiesCost").textContent = `${totalAmenitiesCost}/-`;
    document.getElementById("totalCost").textContent = `${totalCost}/-`;

    const dueBalance = totalCost - advanceAmount;
    document.getElementById("dueBalance").textContent = `${dueBalance}/-`;
  }
});
