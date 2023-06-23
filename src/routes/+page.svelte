<script lang="ts">
	// import { onMount, onDestroy } from 'svelte';

	// onMount(() => console.log('Mounted home page'));
	// onDestroy(() => console.log('Destroyed home page'));
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch('/api/newsletter', {
			method: 'POST',
			body: data,
		});
	}
</script>

<h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button>Subscribe</button>
</form>
