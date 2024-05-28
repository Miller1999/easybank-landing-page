import Logo from "./assets/logo.svg";
import Mockups from "./assets/image-mockups.png";

const createElement = (
	tagName: string,
	className: string = "",
	html: string = "",
	attributes: { [key: string]: string } = {}
): HTMLElement => {
	const element = document.createElement(tagName);
	if (className !== "") element.classList.add(...className.split(" "));
	element.innerHTML = html;
	for (const key in attributes) {
		if (attributes.hasOwnProperty(key)) {
			element.setAttribute(key, attributes[key]);
		}
	}
	return element;
};
const createButton = (className: string, html: string): HTMLElement => {
	const button = createElement("button", className, html);
	return button;
};

const createSection = (
	className: string,
	elements: HTMLElement[]
): HTMLElement => {
	const section = createElement("section", className);
	if (elements.length !== 0) {
		elements.forEach((element) => section.append(element));
	}
	return section;
};

const createDiv = (
	className: string,
	elements: HTMLElement[] = []
): HTMLElement => {
	const div = createElement("div", className);
	if (elements.length !== 0) {
		elements.forEach((element) => div.append(element));
	}
	return div;
};

const createHeader = (): HTMLElement => {
	const header = createElement("header", "header");
	const headerImg = createElement("img", "header__image", "", { src: Logo });
	const hamburguerButton = createButton(
		"header__hamburguer",
		`<ion-icon name="menu"></ion-icon>`
	);
	header.append(headerImg, hamburguerButton);
	return header;
};

const createMain = (): HTMLElement => {
	const main = createElement("main", "main");
	const imagePresentation = createElement("img", "presentation__image", "", {
		src: Mockups,
	});
	const backgroundPresentation = createDiv("presentation__background", [
		imagePresentation,
	]);
	const presentationTitle = createElement(
		"h1",
		"presentation__info-title",
		"Next generation digital banking"
	);
	const presentationDescription = createElement(
		"p",
		"presentation__info-description",
		"Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
	);
	const presentationButton = createButton(
		"presentation__button",
		"Request Invite"
	);
	const presentationInfo = createDiv("presentation__info-container", [
		presentationTitle,
		presentationDescription,
		presentationButton,
	]);

	const presentation = createSection("presentation", [
		backgroundPresentation,
		presentationInfo,
	]);
	main.append(presentation);
	return main;
};

export { createHeader, createMain };
