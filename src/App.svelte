<script>
	let firstName = "Vincent";
	let lastName = "Kim";
	
	/*
		To output the result of beltColour right here,
		Delete "color: {beltColor}".
	*/
	let beltColour = "black";

	/* 
	    The Reactive-Value.
	    - 1. Use a template string to concatenate firstName and lastName
		regularly.
		
		- 2. Reactive-Statement is watching whatever values we use
		inside it. In this case, 'beltColour'.
	*/
	$: fullName = `${firstName} ${lastName}`;

	// Run this code-blocks statement everytime.
	$: {
		console.log(beltColour);
		console.log(fullName);
	}

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

	let people = [
		{name: 'Vincent', beltColour: 'black', age: 19, id: 1},
		{name: 'Vincent', beltColour: 'black', age: 19, id: 2},
		{name: 'Vincent', beltColour: 'black', age: 19, id: 3},
	];
</script>

<main>
	<!-- Output full-name here. -->
	<p style="color: {beltColour}">{fullName} - has {beltColour} belt</p>
	<button on:click={handleClick}>Update belt colour</button>

	<!-- Two way bounding, 'handleInput' and 'beltColour'. -->
	<!-- <input type="text" on:input={handleInput} value={beltColour}> -->
	
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>
	<!-- 
		One way bounding, but it controlls all of things 
		by using 'beltColour'. 
	-->
	<input type="text" bind:value={beltColour}>

	<!-- svelte-ignore a11y-missing-attribute -->
	<img src={imgSrc}>

	<div>
		<h4>{people[0].name}</h4>
		<p>{people[0].beltColour}</p>
	</div>
	<div>
		<h4>{people[1].name}</h4>
		<p>{people[1].beltColour}</p>
	</div>
	<div>
		<h4>{people[2].name}</h4>
		<p>{people[2].beltColour}</p>
	</div>
</main>
