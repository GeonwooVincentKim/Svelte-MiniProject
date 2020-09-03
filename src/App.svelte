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

	const handleClick_colour = () => {
		beltColour = 'orange';
	};
	
	const handleInput = (e) => {
		// Update on Screen in Real-Time.
		beltColour = e.target.value;
	};
	
	let people = [
		{name: 'Vincent', beltColour: 'black', age: 19, id: 1},
		{name: 'Stuart', beltColour: 'orange', age: 16, id: 2},
		{name: 'Ralph', beltColour: 'brown', age: 18, id: 3}
	];

	/* 
	  Relating to 'filter' function.
	  1. Delete the person from people. 

	  2. Pass data through into this function.

	  3. 'Filter' is just a regular JavaScript method and it
	  filters through the array so we can remove certain items out.

	  4. 'Fliter' take a callback-function right here.
	  5. Takes each person as we cycle through the array,
	  and fires a callback function for each person,
	  and we take person in here, '()'.

	  5. If we return true, then it keeps that person in the array,
	  otherwise if we return false, then it removes that person
	  from the array.

	  6. Check if that is not equal to the ID because if they're not 
	  equal then we want to keep that person in the array.
	*/
	const handleClick = (e, id) => {
		people = people.filter((person) => person.id != id);
		console.log(e);
	};
	
	// But it display 'num' when I change it's value.
	let num = 5;
</script>

<!-- 
	If you want to output something if number is over 20, 
	it could say {#if} (curly braces bash if).
 -->

<main>
	{#if num > 20}
 		<p>Greater than 20</p>
	{/if}
</main>
