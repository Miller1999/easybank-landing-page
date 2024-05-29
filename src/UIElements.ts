import Logo from "./assets/logo.svg";
import Mockups from "./assets/image-mockups.png";
import api from "./assets/icon-api.svg";
import budgeting from "./assets/icon-budgeting.svg";
import onboarding from "./assets/icon-onboarding.svg";
import online from "./assets/icon-online.svg";
import money from "./assets/image-currency.jpg";
import restaurant from "./assets/image-restaurant.jpg";
import plane from "./assets/image-plane.jpg";
import confetti from "./assets/image-confetti.jpg";

const featuresItems = [
	{
		img: online,
		title: "Online Banking",
		description:
			"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
	},
	{
		img: budgeting,
		title: "Simple Budgeting",
		description:
			"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
	},
	{
		img: onboarding,
		title: "Fast Onboarding",
		description:
			"We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
	},
	{
		img: api,
		title: "Open API",
		description:
			"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
	},
];

const articlesItems = [
	{
		author: "Claire Robinson",
		image: money,
		title: "Receive money in any currency with no fees",
		description:
			"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
	},
	{
		author: "Wilson Hutton",
		image: restaurant,
		title: "Treat yourself without worrying about money",
		description:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
	},
	{
		author: "Wilson Hutton",
		image: plane,
		title: "Take your Easybank card wherever you go",
		description:
			"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
	},
	{
		author: "Claire Robinson",
		image: confetti,
		title: "Our invite-only Beta accounts are now live!",
		description:
			"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
	},
];

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

const createCard = (
	icon: string,
	title: string,
	description: string
): HTMLElement => {
	const card = createElement("article", "card");
	const cardIcon = createElement("img", "card__icon", "", { src: icon });
	const cardTitle = createElement("h3", "card__title", title);
	const cardDescription = createElement("p", "card__description", description);
	card.append(cardIcon, cardTitle, cardDescription);
	return card;
};

const createArticle = (
	image: string,
	author: string,
	title: string,
	description: string
): HTMLElement => {
	const article = createElement("article", "article__item");
	const articleImage = createElement("img", "article__item-image", "", {
		src: image,
	});
	const articleAuthor = createElement(
		"span",
		"article__item-author",
		`By ${author}`
	);
	const articleTitle = createElement("h3", "article__item-title", title);
	const articleDescription = createElement(
		"p",
		"article__item-description",
		description
	);
	const articleInfo = createDiv("article__info", [
		articleAuthor,
		articleTitle,
		articleDescription,
	]);
	article.append(articleImage, articleInfo);
	return article;
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
	const featuresTitle = createElement(
		"h2",
		"features__info-title",
		"Why choose Easybank?"
	);
	const featuresDescription = createElement(
		"p",
		"features__info-description",
		"We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."
	);
	const featuresInfo = createDiv("features__info-container", [
		featuresTitle,
		featuresDescription,
	]);
	const featuresElements: HTMLElement[] = [];
	featuresItems.forEach((feature) => {
		const card = createCard(feature.img, feature.title, feature.description);
		featuresElements.push(card);
	});

	const featuresContainer = createDiv("features__container", featuresElements);
	const features = createSection("features", [featuresInfo, featuresContainer]);
	const articlesTitle = createElement(
		"h2",
		"articles__title",
		"Latest Articles"
	);
	const articlesElements: HTMLElement[] = [];
	articlesItems.forEach((article) => {
		const newArticle = createArticle(
			article.image,
			article.author,
			article.title,
			article.description
		);
		articlesElements.push(newArticle);
	});
	const articleContainer = createDiv("articles__container", articlesElements);
	const articles = createSection("articles", [articlesTitle, articleContainer]);
	main.append(presentation, features, articles);
	return main;
};

export { createHeader, createMain };
