import Logo from "./assets/logo.svg";

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

export { createHeader };
