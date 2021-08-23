// Variables
const container = document.querySelector(".container");
const sliderCode = document.querySelectorAll(".colorSlider");
const hexCode = document.querySelector(".hex");
const red = document.querySelector(".redCode");
const green = document.querySelector(".greenCode");
const blue = document.querySelector(".blueCode");

// Show R/G/B number based on slider range
const sliderEvent = (event) => {
  const target = event.target;
  if (target.matches(".colorSlider")) {
    const number = target.nextElementSibling;
    number.value = target.value;
  }
  hexCodeEvent();
};

// Show hex code based on R/G/B number
const hexCodeEvent = () => {
  // Convert the range value to a 16-radix number
  // Due to number.toString, so use parseInt to covert the type
  const redCode = parseInt(red.value).toString(16);
  const greenCode = parseInt(green.value).toString(16);
  const blueCode = parseInt(blue.value).toString(16);

  // Use if condition to have '0' at the first place of each code.
  const redHex = redCode.length < 2 ? "0" + redCode : redCode;
  const greenHex = greenCode.length < 2 ? "0" + greenCode : greenCode;
  const blueHex = blueCode.length < 2 ? "0" + blueCode : blueCode;

  hexCode.textContent = `#${redHex}${greenHex}${blueHex}`;
  backgroundColor();
};

// Change background color
function backgroundColor() {
  return (document.body.style.backgroundColor = hexCode.textContent);
}

// Input number to change R/G/B number
function inputCode(event) {
  hexCodeEvent();
  const target = event.target;

  if (target.matches(".num")) {
    let value = target.value;

    // Alert setting
    if (
      parseInt(value) > 255 ||
      parseInt(value) < 0 ||
      value.length === 0 ||
      Number.isNaN(Number(value))
    ) {
      alert`請輸入小於255且大於0的整數`;
    }

    const slider = target.previousElementSibling;
    slider.value = value;
  }
}

// Show default value at first
(function defaultValue() {
  sliderCode.forEach((item) => {
    const number = item.nextElementSibling;
    number.value = item.value;
  });
  hexCodeEvent();
})();

// Add event listener
sliderCode.forEach((element) => {
  element.addEventListener("mousemove", sliderEvent);
});
container.addEventListener("input", inputCode);