import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export enum ETheme {
	Light = 'light',
	Dark = 'dark'
}

const THEME_STORAGE_KEY = 'theme';

function getSystemTheme(): ETheme {
	if (!browser) {
		return ETheme.Dark;
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? ETheme.Dark
		: ETheme.Light;
}

function getInitialTheme(): ETheme {
	if (!browser) {
		return ETheme.Dark;
	}

	const savedTheme = localStorage.getItem(
		THEME_STORAGE_KEY
	) as ETheme | null;

	if (
		savedTheme === ETheme.Light ||
		savedTheme === ETheme.Dark
	) {
		return savedTheme;
	}

	return getSystemTheme();
}

function applyTheme(theme: ETheme) {
	if (!browser) {
		return;
	}

	document.documentElement.dataset.theme = theme;

	localStorage.setItem(
		THEME_STORAGE_KEY,
		theme
	);
}

function createThemeStore() {
	const initialTheme = getInitialTheme();

	const {
		subscribe,
		set: internalSet,
		update
	} = writable<ETheme>(initialTheme);

	applyTheme(initialTheme);

	if (browser) {
		window.addEventListener(
			'storage',
			(event) => {
				if (
					event.key === THEME_STORAGE_KEY &&
					event.newValue
				) {
					internalSet(event.newValue as ETheme);

					applyTheme(
						event.newValue as ETheme
					);
				}
			}
		);
	}

	return {
		subscribe,

		set(theme: ETheme) {
			internalSet(theme);

			applyTheme(theme);
		},

		toggle() {
			update((currentTheme) => {
				const newTheme =
					currentTheme === ETheme.Dark
						? ETheme.Light
						: ETheme.Dark;

				applyTheme(newTheme);

				return newTheme;
			});
		},

		resetToSystem() {
			const systemTheme = getSystemTheme();

			internalSet(systemTheme);

			applyTheme(systemTheme);
		}
	};
}

export const themeStore = createThemeStore();
