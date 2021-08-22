import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const bgColor = writable('');
export const textColor = writable('');
export const fireVariant = writable('');

const createDarkMode = (initialValue) => {
	const { subscribe, set, update } = writable(initialValue);
	return {
		subscribe,
		toggle: () => {
			let theme = 'light';
			if (browser) {
				theme = window.localStorage.getItem('theme') || 'light';
				window.localStorage.theme = theme === 'light' ? 'dark' : 'light';
			}
			update((mode) => theme === 'light');
		},
		set,
	};
};

let theme = 'light';

if (browser) {
	theme = window.localStorage.theme === 'dark';
}

export const darkMode = createDarkMode(theme);
