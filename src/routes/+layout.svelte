<script lang="ts">
  import { page } from '$app/stores'

  import '../app.css'
</script>

<!-- <pre>
  {JSON.stringify($page, null, 2)}
</pre> -->

<svelte:head>
  <title>{$page.data.post?.title}</title>
</svelte:head>

<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/posts">Posts</a>
    </li>
  </ul>
</nav>

<slot />
