import faker from "faker";

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  element.innerHTML = cartText;
};

// to run it on the development environment
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-cart");

  // assuming that our container doesn't have an element with id 'dev-products'
  if (element) {
    mount(element);
  }
}
export { mount };
