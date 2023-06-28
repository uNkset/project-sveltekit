<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import type { SubmitFunction } from '@sveltejs/kit'
  import type { ActionData } from './$types'

  export let form: ActionData

  const login: SubmitFunction = () => {
    return async ({ result }) => {
      await applyAction(result)
    }
  }
</script>

<form method="post" action="/login" use:enhance={login}>
  <input type="text" name="user" value={form?.data?.user ?? ''} />
  {#if form?.errors?.user}
    <p class="error">Name is required</p>
  {/if}

  <input type="password" name="password" />
  {#if form?.errors?.password}
    <p class="error">Password is required</p>
  {/if}

  <button type="submit">Login</button>
</form>

<style>
  .error {
    color: tomato;
  }
</style>
