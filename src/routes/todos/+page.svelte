<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  async function addTodo(event: Event) {}

  async function removeTodo(event: Event) {}
</script>

<ul>
  {#each data.todos as todo}
    <li>
      <span>{todo.text}</span>
      <form on:submit|preventDefault={removeTodo} method="POST">
        <input type="hidden" name="id" value={todo.id} />
        <button class="delete" type="submit">X</button>
      </form>
    </li>
  {/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
  <input type="text" name="todo" />
  <button type="submit">Add</button>
</form>

<style>
  ul {
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    text-transform: capitalize;
  }

  .delete {
    margin: 0;
    background: none;
    border: none;
  }

  .error {
    color: tomato;
  }

  li form button {
    color: blueviolet;
  }
</style>
