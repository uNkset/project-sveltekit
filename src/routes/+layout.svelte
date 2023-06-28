<script lang="ts">
  import '../app.css'
</script>

<nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
  </ul>
</nav>

<slot />

<style>
  /* :global(body) {
    padding: 2rem;
  } */

  :global(input, button) {
    border-radius: 1rem;
  }
</style>
