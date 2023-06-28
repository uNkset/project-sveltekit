<script lang="ts">
  import type { ActionData, PageData } from './$types'

  export let data: PageData

  export let form: ActionData
</script>

<ul>
  {#each data.todos as todo}
    <li>
      <span>{todo.text}</span>
      <form action="?/removeTodo" method="POST">
        <input type="hidden" name="id" value={todo.id} />
        <button class="delete" type="submit">X</button>
      </form>
    </li>
  {/each}
</ul>

<form action="?/addTodo" method="POST">
  <input type="text" name="todo" value={form?.todo ?? ''} />
  {#if form?.missing}
    <p class="error">This field is required</p>
  {/if}
  <button type="submit">Add</button>

  <button formaction="?/clearTodos" type="submit">Clear</button>
</form>

{#if form?.success}
  <p>Added todo!</p>
{/if}

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
