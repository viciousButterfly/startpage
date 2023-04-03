<script>
    export let name;
    export let version;
</script>

<footer>
    <p>{name} @v{version}</p>
</footer>

<style>
    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #007bff;
        padding: 1rem;
        text-align: center;
    }   

    p {
        margin: 0;
        color: #000000;
    }
</style>
