// src/lib/stores/theme.ts
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export enum Theme {
	Light = 'light',
	Dark = 'dark'
}

const THEME_STORAGE_KEY = 'theme';
const THEME_ATTRIBUTE = 'data-theme';

function createThemeStore() {
	// Визначаємо початкову тему
	const getInitialTheme = (): Theme => {
		if (!browser) return Theme.Light;

		// 1. Перевіряємо збережену тему
		const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
		if (savedTheme && Object.values(Theme).includes(savedTheme)) {
			return savedTheme;
		}

		// 2. Системна тема
		return window.matchMedia('(prefers-color-scheme: dark)').matches 
			? Theme.Dark 
			: Theme.Light;
	};

	const initialTheme = getInitialTheme();
	const { subscribe, set, update } = writable<Theme>(initialTheme);

	// Функція застосування теми
	const applyTheme = (theme: Theme) => {
		if (!browser) return;
		document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	};

	// Автоматичне застосування при зміні
	subscribe(applyTheme);

	return {
		subscribe,
		set: (theme: Theme) => {
			if (Object.values(Theme).includes(theme)) {
				set(theme);
			}
		},
		update,
		toggle: () => {
			update(current => current === Theme.Light ? Theme.Dark : Theme.Light);
		},
		resetToSystem: () => {
			if (!browser) return;
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
				? Theme.Dark 
				: Theme.Light;
			set(systemTheme);
		}
	};
}

export const themeStore = createThemeStore();
