<script lang="ts">
  import getNumber from "./logic/Calculator";

  let seed: number | undefined;
  let n: number = 5;
  let error = "";

  let numbers: { seed: number; number: number }[] = [];

  const generateNumbers = () => {
    if (!seed) return;

    let newNumbers = [getNumber(seed, 4)];
    let prev = newNumbers[0];

    for (let i = 1; i < n; i++) {
      let current = getNumber(prev.seed, 4);
      newNumbers.push(current);
      prev = current;
    }

    numbers = newNumbers;
  };

  const copyToClipboard = (value: string) =>
    navigator.clipboard.writeText(value);
</script>

<svelte:head>
  <title>Calculadora</title>
</svelte:head>

<main>
  <h1>Pseudo-Random number generation</h1>
  <form on:submit|preventDefault={generateNumbers}>
    <label>
      Starting seed
      <input type="number" bind:value={seed} required />
    </label>

    <label>
      Numbers to generate
      <input type="number" bind:value={n} min="1" max="100" required />
    </label>

    <button>Generate</button>
  </form>

  <h3>Numbers</h3>

  <section>
    {#each numbers as { number }, i (i)}
      <article on:click={() => copyToClipboard(String(number))}>
        {number}
      </article>
    {/each}
  </section>
</main>

<style>
  * {
    box-sizing: border-box;
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #e8e8ff;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  label {
    display: inline-flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  section {
    display: inline-grid;
    grid-template-columns: repeat(8, 1fr);
    max-width: 800px;
    margin: auto;
    gap: 0.25rem;
  }

  article {
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 0.25rem;
    cursor: copy;
  }

  article:hover {
    outline: 2px solid blue;
  }
</style>
