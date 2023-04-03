<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let activeTab = '';

    const tabs = [
        { name: 'Home', icon: '🏠' },
        { name: 'Profile', icon: '👤' },
        { name: 'Developer', icon: '💻' },
        { name: 'To-Do', icon: '📝' },
        // { name: 'Blogs', icon: '📰'},
    ];

    function selectTab(tab) {
        activeTab = tab.name;
        dispatch('tabSelected', activeTab);
    }

</script>
  
<nav>
  {#each tabs as tab}
    <button
      class={`nav-button ${activeTab === tab.name ? 'active' : ''}`}
      on:click={() => selectTab(tab)}
    >
      <span class="nav-icon">{tab.icon}</span>
    </button>
  {/each}
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    .nav-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: none;
        background-color: #a0d2eb;
        color: #333;
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.2s;
    }

    .nav-button.active {
        background-color: #333;
        color: #eee;
    }

    .nav-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>
