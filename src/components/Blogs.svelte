<script>
    import Blog from "./Blog.svelte";
    import { onMount } from 'svelte';

    let blogs = [];
    let fetched = false;
    let url = '';

    onMount(async () => {
        const response = await fetch(url);
        const data = await response.json();
        blogs = data.results;
        fetched = true;
        console.log(data);
    }); 
</script>

{#if fetched == true}
  <div class="blog-container">
    {#each blogs as blog}
      <Blog imageUrl={blog.image_url} title={blog.title} />
    {/each}
  </div>
{:else}
  <p>Loading blogs...</p>
{/if}

<style> 
    .blog-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }
</style>
