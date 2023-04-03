<script>
    export let imageUrl = '';
    export let title = '';
</script>
  
<div class="blog">
    <img class="blog-image" src={imageUrl} alt={title} />
    <h2 class="blog-title">{title}</h2>
</div>
  
<style>
    .blog {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 300px;
        margin: 0 1rem;
        padding: 0.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
        overflow: hidden;
        transition: all 0.2s;
    }

    .blog:hover {
        transform: translateY(-0.5rem);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .blog-image {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
        border-radius: 1rem;
    }

    .blog-title {
        font-size: 1rem;
        font-weight: bold;
        margin: 1rem 0;
        text-align: center;
    }

</style>
