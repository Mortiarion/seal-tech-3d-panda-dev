<script lang='ts'>
	import SectionAi from '$lib/components/landing/SectionAi.svelte';
	import SectionContacts from '$lib/components/landing/SectionContacts.svelte';
	import SectionHeader from '$lib/components/landing/SectionHeader.svelte';
	import SectionHero from '$lib/components/landing/SectionHero.svelte';
	import SectionProblemSolution from '$lib/components/landing/SectionProblemSolution.svelte';
	import SectionServices from '$lib/components/landing/SectionServices.svelte';
	
	
</script>

<svelte:head>
	<title>SealTech3D - Головна</title>
</svelte:head>

<div class="preview">
	<SectionHeader />

	<main>
		<SectionHero />
	
		<SectionProblemSolution />
	
		<SectionServices />
	
		<SectionAi />
	
		<SectionContacts />
	</main>


	<footer class='container mx-auto px-5'>
		<div class="footer-logo">SEAL<span>TECH</span>3D</div>
		<div class="footer-copy">© 2026 SealTech3D. Всі права захищені.</div>
		<div class="footer-links">
			<a href="#">Політика</a>
			<a href="#">Умови</a>
		</div>
	</footer>
</div>

<style lang='postcss'>
	

	





	


	/* FOOTER */
	footer {
		padding: 24px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid var(--border);
	}
	.footer-logo {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 18px;
		letter-spacing: 2px;
	}
	.footer-logo span {
		color: var(--accent);
	}
	.footer-copy {
		font-size: 12px;
		color: var(--text3);
	}
	.footer-links {
		display: flex;
		gap: 20px;
	}
	.footer-links a {
		font-size: 12px;
		color: var(--text3);
		text-decoration: none;
	}
</style>
