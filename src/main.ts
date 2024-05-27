import "normalize.css";
import "./style.sass";
import { createHeader } from "./UIElements";

const app = document.querySelector("#app");

const header = createHeader();

app?.append(header);
