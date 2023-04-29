// NavButton.js

export function MyNAvi(componentFn) {

	
	const navigationEvent = new CustomEvent('navigate', {
		detail: componentFn,
	});

	document.body.dispatchEvent(navigationEvent);

	//return button;
}
