const countryMap = {
  "America": ["California", "Florida", "Hawaii", "Texas"],
  "Asia": ["China", "Japan", "Pakistan", "Thailand"],
  "Australia": ["New South Wales", "Queensland", "Victoria"],
  "Europe": ["France", "Germany", "Poland", "United Kingdom"]
};

const continentSelect = document.getElementById("continent");
const countrySelect = document.getElementById("country");

continentSelect.addEventListener("change", function () {
  const countries = countryMap[continentSelect.value];

  countrySelect.innerHTML = "";
  for (const country of countries) {
    const optionElement = document.createElement("option");
    optionElement.innerText = country;
    countrySelect.appendChild(optionElement);
  }
});
