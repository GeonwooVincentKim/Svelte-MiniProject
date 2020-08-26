<script>
	let name = "Vincent";
	let beltColour = "Black";
	let src = "";

	const handleClick = () => {
		beltColour = 'orange';
	};
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>{beltColour} belt</p>
	<button on:click={handleClick}>Update belt colour</button>
</main>

<style>
	main { text-align: center; padding: 1em; max-width: 240px; margin: 0 auto; }
	h1 { color: #ff3e00; text-transform: uppercase; font-size: 4em; font-weight: 100; }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>