import "normalize.css";
import "./style.sass";
import {
	createBackdrop,
	createFooter,
	createHeader,
	createMain,
	createMenu,
} from "./UIElements.ts";
import { init } from "./funtion";

const app = document.querySelector("#app");

const header = createHeader();
const backdrop = createBackdrop();
const menu = createMenu();
const main = createMain();
const footer = createFooter();

if (window.innerWidth < 1280) {
	app?.append(backdrop, header, menu, main, footer);
} else {
	app?.append(header, main, footer);
}

init();
