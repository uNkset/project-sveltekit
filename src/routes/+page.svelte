<script lang="ts">
  // import { onMount, onDestroy } from 'svelte';

  // onMount(() => console.log('Mounted home page'));
  // onDestroy(() => console.log('Destroyed home page'));
  // async function subscribe(event: Event) {
  // 	const form = event.target as HTMLFormElement;
  // 	const data = new FormData(form);

  // 	await fetch('/api/newsletter', {
  // 		method: 'POST',
  // 		body: data,
  // 	});
  // }

  import type { Post } from '@prisma/client'

  async function getPosts() {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()

    return posts
  }
</script>

<h1>Posts</h1>

{#await getPosts()}
  <p>Loading...</p>
{:then posts}
  <p>Showing {posts.length} posts</p>

  {#each posts as { slug, title }}
    <ul>
      <li>
        <a href="/posts/{slug}">{title}</a>
      </li>
    </ul>
  {/each}
  <!-- <pre>
		{JSON.stringify(posts, null, 2)}
	</pre> -->
{:catch error}
  <p>error.message</p>
{/await}

<!-- <h1>Newsletter</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button>Subscribe</button>
</form> -->
