<script>
  import { page } from '$app/stores'
</script>

{#if $page.data.user}
  <h1>Welcome {$page.data.user}</h1>
{/if}
<h1>Yo</h1>
