import "normalize.css";
import "./style.sass";
import { createFooter, createHeader, createMain } from "./UIElements";

const app = document.querySelector("#app");

const header = createHeader();
const main = createMain();
const footer = createFooter();

app?.append(header, main, footer);
