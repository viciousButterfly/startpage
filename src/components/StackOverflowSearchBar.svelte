<script>

    function redirect(){
        const form = document.querySelector('.stack-search-bar');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = form.querySelector('#stack-search-query-input').value;
            window.location = `https://stackoverflow.com/search?q=${query}}}`;
        });
    }
</script>

<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  
<div class="stack-search-body">
    <div class="stack-wrapper">
        <div class="stack-label">Stack Overflow</div>
        <form class="stack-search-bar">
            <input id="stack-search-query-input" type="text" onfocus="this.value=''" name="stack-search-query-input" placeholder="Search" value="" />
            <button id="stack-search-query-submit" name="stack-search-query-submit" type="" on:click={redirect}>
                <svg style="width:24px; height:24px" viewBox="0 0 24 24">
                <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
            </button>
        </form>
    </div>
</div>

<style>
    .stack-search-body {
        font-family: 'Roboto', Arial, sans-serif;
    }

    .stack-wrapper {
        width: 100%;
        max-width: 31.25rem;
        margin: 6rem auto;
    }

    .stack-label {
        font-size: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: +1.3px;
        margin-bottom: 1rem;
    }

    .stack-search-bar {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #stack-search-query-input {
        width: 100%;
        height: 2.8rem;
        background: #f5f5f5;
        outline: none;
        border: none;
        border-radius: 1.625rem;
        padding: 0 3.5rem 0 1.5rem;
        font-size: 1rem;
        border:1px solid black
    }

    #stack-search-query-submit {
        width: 3.5rem;
        height: 2.8rem;
        margin-left: -3.5rem;
        background: none;
        border: none;
        outline: none;
    }

    #stack-search-query-submit:hover {
        cursor: pointer;
    }

</style>
  