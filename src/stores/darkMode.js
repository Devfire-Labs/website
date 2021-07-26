import { writable } from 'svelte/store';

export const bgColor = writable('');
export const textColor = writable('');
export const fireVariant = writable('');

const createDarkMode = (initialValue) => {
	const { subscribe, set, update } = writable(initialValue);
	return {
		subscribe,
		toggle: () => {
			let theme = localStorage.getItem('theme') || 'light';
			localStorage.theme = theme === 'light' ? 'dark' : 'light';
			update((mode) => theme === 'light');
		},
		set,
	};
};

export const darkMode = createDarkMode(localStorage.theme === 'dark');
