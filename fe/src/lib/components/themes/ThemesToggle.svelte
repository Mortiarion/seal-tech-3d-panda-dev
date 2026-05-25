<script lang="ts">
	import { onMount } from 'svelte';
	
	import ThemesMoonIcons from '$lib/icons/ThemesMoonIcons.svelte';
	import ThemesSunIcons from '$lib/icons/ThemesSunIcons.svelte';

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
</script>

<button
	title={`Toggle theme ${ theme === 'dark' ? 'light' : 'dark' }`}
	aria-label={`Toggle theme ${ theme === 'dark' ? 'light' : 'dark' }`}
	class="btn"
	aria-pressed={theme === 'dark'}
	class:light={theme === 'dark'}
	onclick={toggleTheme}
>
	{#if theme === 'dark'}
		<ThemesSunIcons />
	{:else}
		<ThemesMoonIcons />
	{/if}
</button>

<style lang="postcss">
	button {
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
</style>
