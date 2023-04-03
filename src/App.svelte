<script>
	import Title from "./components/Title.svelte";
	import SearchBar from "./components/SearchBar.svelte";
	import StackOverflowSearchBar from "./components/StackOverflowSearchBar.svelte";
	import Socials from "./components/Socials.svelte";
	import Footer from "./components/Footer.svelte";
	import NavBar from "./components/NavBar.svelte";
	import ToDoList from "./components/ToDoList.svelte";
	import Blogs from "./components/Blogs.svelte";
	let name = "Startpage";
	let version = "0.0.1";
	let activeTab = 'Home';
	
</script>

<main>
	<NavBar bind:activeTab={activeTab} />
	<Title name={name} />
	{#if activeTab == 'Home'}
		<SearchBar />
	{:else if activeTab == 'Profile'}
		<Socials />
	{:else if activeTab == 'Developer'}
		<StackOverflowSearchBar />
	{:else if activeTab == 'To-Do'}
		<ToDoList />
	{:else if activeTab == 'Blogs'}
		<Blogs />
	{/if}
</main>
<Footer {name} {version} />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
