<script>
  let devFact = "";

  const fetchDevFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?category=programming');
    const data = await response.json();
    devFact = data.text;
  };
</script>

<button on:click={fetchDevFact}>Get a random developer fact</button>
{#if devFact}
  <p>{devFact}</p>
{/if}
