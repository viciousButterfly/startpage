<script>
	import SearchBar from "./components/SearchBar.svelte";
	import Footer from "./components/Footer.svelte";
	let name = "Starpage";
	let version = "0.0.1";

</script>

<main>
	<h1>{name}</h1>
	<SearchBar />
</main>
<Footer {name} {version} />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
