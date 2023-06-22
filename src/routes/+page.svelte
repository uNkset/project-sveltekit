<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	onMount(() => console.log('Mounted home page'));
	onDestroy(() => console.log('Destroyed home page'));
</script>

<h1>Home Page</h1>
