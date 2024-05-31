const init = () => {
	const menu = document.querySelector<HTMLDivElement>(".menu");
	const hamburguer = document.querySelector<HTMLButtonElement>(
		".header__hamburguer"
	);
	const close = document.querySelector<HTMLButtonElement>(".menu__close");
	const backdrop = document.querySelector<HTMLDivElement>(".backdrop");
	const handleMenu = () => {
		menu?.classList.toggle("hidden-menu");
		backdrop?.classList.toggle("hidden-menu");
		hamburguer?.classList.toggle("hidden");
	};

	hamburguer?.addEventListener("click", handleMenu);
	close?.addEventListener("click", handleMenu);
	console.log(hamburguer, menu, close);
};

export { init };
