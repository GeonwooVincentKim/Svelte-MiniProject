import App from './App.svelte';
/*
	No longer need to import css file.
*/
// import "style.css";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;