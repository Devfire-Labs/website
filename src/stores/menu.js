import { writable } from 'svelte/store';

const createIsOpen = () => {
	const { subscribe, set, update } = writable(false);
	return { subscribe, toggle: () => update((isOpen) => !isOpen) };
};

export const menu = createIsOpen();
