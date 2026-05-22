<script lang="ts">
	import { onMount } from 'svelte';

	type TTheme = 'light' | 'dark';

	let theme = $state<TTheme>('dark');

	onMount(() => {
		const savedTheme = (localStorage.getItem('theme') as TTheme) ?? 'dark';

		setTheme(savedTheme);
	});

	function setTheme(newTheme: TTheme) {
		theme = newTheme;

		document.body.dataset.theme = newTheme;

		localStorage.setItem('theme', newTheme);
	}

	function toggleTheme() {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	// const toggleId = crypto.randomUUID();

	// const clipMainId = `toggles-dev-within-main-${toggleId}`;
</script>

<button
	type="button"
	title={`Toggle theme ${ theme === 'dark' ? 'light' : 'dark' }`}
	aria-label={`Toggle theme ${ theme === 'dark' ? 'light' : 'dark' }`}
	class="btn"
	aria-pressed={theme === 'dark'}
	class:light={theme === 'dark'}
	onclick={toggleTheme}
>
	
	{#if theme === 'dark'}
		<svg
			// xmlns="http://www.w3.org/2000/svg"
			// width="24"
			// height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			// stroke-linejoin="round"
			// class="lucide lucide-sun h-6 w-6"
		>
			<circle cx="12" cy="12" r="4"></circle>
			<path d="M12 2v2"></path>
			<path d="M12 20v2"></path>
			<path d="m4.93 4.93 1.41 1.41"></path>
			<path d="m17.66 17.66 1.41 1.41"></path>
			<path d="M2 12h2"></path>
			<path d="M20 12h2"></path>
			<path d="m6.34 17.66-1.41 1.41"></path>
			<path d="m19.07 4.93-1.41 1.41"></path>
		</svg>
	{:else}
		<svg
			// xmlns="http://www.w3.org/2000/svg"
			// width="24"/
			// height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			// stroke-linecap="round"
			// stroke-linejoin="round"
		>
			<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
		</svg>
	{/if}
</button>

<style lang="postcss">
	button {
		svg {
			width: 2rem;
			transition: transform 1s;

			&:focus-visible {
				outline: 2px solid currentColor;
				outline-offset: 4px;
			}

			&:hover {
				transform: rotate(250deg);
			}

			&:active {
				transform: scale(0.8);
			}
		}
	}
</style>
