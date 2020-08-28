<script>
	let people = [
		{name: 'Vincent', beltColour: 'black', age: 19, id: 1},
		{name: 'Stuart', beltColour: 'orange', age: 16, id: 2},
		{name: 'Ralph', beltColour: 'brown', age: 18, id: 3}
	];

	/* 
	  1. Delete the person from people. 
	  2. Pass data through into this function.
	*/
	const handleClick = (id) => {
		console.log(id);
	};
</script>

<main>
	<!-- 
		1. Almost like a for-each Loop. 
		2. Applying a unique key to each element inside our array
		and pass that unique key-property to the loop.
		3. (person.id) of '()' is a parentheses.

		Now we didn't access to variable 'person',
		so it cannot delete as you want.
	-->
	{#each people as person (person.id)}
	  <div>
		<h4>{person.name}</h4>
		<p>{person.age} years old, {person.beltColour} belt.</p>

		<!-- Invokes data. -->
		<button on:click={handleClick(person.id)}>delete</button>
	  </div>
	<!-- 
	    1. Adding inside each-block another keyword and
		it's going to be colon else inside here.
		2. Comment out all of list-contents in variable 'people' and
		save it, then you can see, 'There are no people to show.'.
	-->
	{:else}
	  <p>There are no people to show...</p>
	{/each}
</main>
