<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData, PageData, SubmitFunction } from './$types'

  export let data: PageData
  export let form: ActionData

  let loading = false

  const addTodo: SubmitFunction = () => {
    // do something before the form submits
    loading = true

    return async ({ update }) => {
      loading = false
      await update()
    }
  }
</script>

<ul>
  {#each data.todos as todo}
    <li>
      <span>{todo.text}</span>
      <form action="?/removeTodo" method="POST" use:enhance>
        <input type="hidden" name="id" value={todo.id} />
        <button class="delete" type="submit">X</button>
      </form>
    </li>
  {/each}
</ul>

<form action="?/addTodo" method="POST" use:enhance={addTodo}>
  <input type="text" name="todo" value={form?.todo ?? ''} />
  {#if form?.missing}
    <p class="error">This field is required</p>
  {/if}
  <button aria-busy={loading} class:secondary={loading} type="submit">
    {#if !loading}
      Add Todo
    {/if}
  </button>

  <button class="secondary" formaction="?/clearTodos" type="submit">Clear</button>
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
