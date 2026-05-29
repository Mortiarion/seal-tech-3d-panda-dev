<script lang="ts">
	import ThemesMoonIcons from '$lib/icons/ThemesMoonIcons.svelte';
	import ThemesSunIcons from '$lib/icons/ThemesSunIcons.svelte';
	import { themeStore, ETheme } from '$lib/stores/theme';
</script>

<button
	title={`Toggle theme ${ $themeStore === 'dark' ? 'light' : 'dark' }`}
	aria-label={`Toggle theme ${ $themeStore === 'dark' ? 'light' : 'dark' }`}
	class="btn"
	aria-pressed={$themeStore === ETheme.Dark}
	class:light={$themeStore === ETheme.Dark}
	onclick={ () => themeStore.toggle()}
>
	{#if $themeStore === ETheme.Dark }
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
