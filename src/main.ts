import "normalize.css";
import "./style.sass";
import { createHeader, createMain } from "./UIElements";

const app = document.querySelector("#app");

const header = createHeader();
const main = createMain();

app?.append(header, main);
