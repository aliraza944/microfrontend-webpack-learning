import faker from "faker";

const mount = (element) => {
  let products = "";

  for (let i = 0; i < 10; i++) {
    products += `
        <div>${faker.commerce.productName()}</div>
    `;
  }
  element.innerHTML = products;
};

// to run it on the development environment
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");

  // assuming that our container doesn't have an element with id 'dev-products'
  if (element) {
    mount(element);
  }
}

// to run it on the container
export { mount };
