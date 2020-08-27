<script>
	let firstName = "Vincent";
	let lastName = "Kim";
	let beltColour = "black";

	/*
	  1. Make sure you have to convert file-form
		 as 'png' not 'jpg'.
	  
	  2. You should save your file into public file-directory,
	     not to create a new one in file-directory named 'src'.
	*/
	let imgSrc = "images.png";

	const handleClick = () => {
		beltColour = 'orange';
	};
	
	const handleInput = (e) => {
		// Update on Screen in Real-Time.
		beltColour = e.target.value;
	};
</script>

<main>
	<h1>Hello {name}!</h1>
	<p style="color: {beltColour}">{beltColour} belt</p>
	<button on:click={handleClick}>Update belt colour</button>

	<!-- Two way bounding, 'handleInput' and 'beltColour'. -->
	<!-- <input type="text" on:input={handleInput} value={beltColour}> -->
	
	<!-- 
		One way bounding, but it controlls all of things 
		by using 'beltColour'. 
	-->
	<input type="text" bind:value={beltColour}>

	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={imgSrc}>
</main>
