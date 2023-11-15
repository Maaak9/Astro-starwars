<script>
	let buttonText = 'Svelte Button';
  let count = 0;

  function increaseCount() {
    count += 1;
  }
</script>

<button on:click={increaseCount}>{`${buttonText}: ${count}`}</button>

<style>
	button {
    padding: 12px 25px;
    background: rgb(10, 83, 83);
    color: white;
  }
</style>