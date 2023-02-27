<script>
	export let name;
	import Nav from './components/Nav.svelte';
	import Hero from './components/Hero.svelte';
	import Meetup from './components/Meetup.svelte';
	//import About from './components/About.svelte';
	import Sponsors from './components/Sponsors.svelte';
	import Footer from './components/Footer.svelte';

	const meetupsData = {
		eugeneWebDevs: {
			name: "Eugene Web Devs",
			desc: "Montly meet up of presentations on tech",
			location: "IDX Broker",
			Date: "Last thursday of the month"
		},
		techtuesday: {
			name: "tech Tuesday",
			desc: "Weekely meet up to chat about tech",
			location: "Barnlight",
			Date: "Every tuesday"
		}
	}
</script>

<main>
	<Nav />
	<Hero />
	<Meetup name={meetupsData.eugeneWebDevs.name} />
	<Sponsors />
	<Footer />
</main>

<style>
	main {
		text-align: center;
		width: fit-content;
	}
</style>
