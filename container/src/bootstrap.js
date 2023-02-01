import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/cartShow";

productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));

console.log("Bootstrap.js loaded");
