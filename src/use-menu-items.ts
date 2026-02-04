import { useActivity } from '@neovici/cosmoz-utils/keybindings';
import { useCallback, useEffect, useState } from '@pionjs/pion';
import {
	MENU_NAVIGATE_DOWN,
	MENU_NAVIGATE_END,
	MENU_NAVIGATE_HOME,
	MENU_NAVIGATE_UP,
	MENU_SELECT,
} from './menu-keybindings';
import type { MenuItem } from './types';

export interface UseMenuItemsOptions {
	items: MenuItem[];
	onSelect: (item: MenuItem) => void;
	host: HTMLElement;
	itemsContainerRef: { current: HTMLElement | undefined };
}

export const useMenuItems = ({
	items,
	onSelect,
	host,
	itemsContainerRef,
}: UseMenuItemsOptions) => {
	// Check that focus is inside this menu instance, so that when multiple
	// menus are visible only the focused one responds to keybindings.
	const focusIsWithin = useCallback(() => {
		const active = document.activeElement;
		return active != null && host.contains(active);
	}, [host]);

	// Start with no highlight (-1)
	const [index, setIndex] = useState(-1);

	// Reset index when items change
	useEffect(() => {
		setIndex(-1);
	}, [items]);

	// Auto-scroll to highlighted item
	useEffect(() => {
		if (index < 0) return;
		const container = itemsContainerRef.current;
		const item = container?.querySelector(`[data-index="${index}"]`);
		item?.scrollIntoView({ block: 'nearest' });
	}, [index, itemsContainerRef]);

	// Find next non-disabled index
	const findIndex = useCallback(
		(from: number, direction: 1 | -1): number => {
			const len = items.length;
			if (len === 0) return -1;

			// If starting from -1 (no selection), start from beginning/end
			let start = from;
			if (start < 0) {
				start = direction === 1 ? -1 : len;
			}

			for (let count = 0; count < len; count++) {
				start = (start + direction + len) % len;
				if (!items[start]?.disabled) return start;
			}
			return -1;
		},
		[items],
	);

	const navigateDown = useCallback(() => {
		setIndex((i) => findIndex(i, 1));
	}, [findIndex]);

	const navigateUp = useCallback(() => {
		setIndex((i) => findIndex(i, -1));
	}, [findIndex]);

	const navigateHome = useCallback(() => {
		const first = items.findIndex((item) => !item.disabled);
		setIndex(first);
	}, [items]);

	const navigateEnd = useCallback(() => {
		for (let i = items.length - 1; i >= 0; i--) {
			if (!items[i].disabled) {
				setIndex(i);
				return;
			}
		}
	}, [items]);

	const selectCurrent = useCallback(() => {
		if (index >= 0 && index < items.length) {
			const item = items[index];
			if (item && !item.disabled) onSelect(item);
		}
	}, [items, index, onSelect]);

	// Register keybinding activities
	useActivity(
		{
			activity: MENU_NAVIGATE_DOWN,
			callback: navigateDown,
			element: () => host,
			check: focusIsWithin,
		},
		[navigateDown, host, focusIsWithin],
	);
	useActivity(
		{
			activity: MENU_NAVIGATE_UP,
			callback: navigateUp,
			element: () => host,
			check: focusIsWithin,
		},
		[navigateUp, host, focusIsWithin],
	);
	useActivity(
		{
			activity: MENU_NAVIGATE_HOME,
			callback: navigateHome,
			element: () => host,
			check: focusIsWithin,
		},
		[navigateHome, host, focusIsWithin],
	);
	useActivity(
		{
			activity: MENU_NAVIGATE_END,
			callback: navigateEnd,
			element: () => host,
			check: focusIsWithin,
		},
		[navigateEnd, host, focusIsWithin],
	);
	useActivity(
		{
			activity: MENU_SELECT,
			callback: selectCurrent,
			element: () => host,
			check: focusIsWithin,
		},
		[selectCurrent, host, focusIsWithin],
	);

	return {
		index,
		highlight: useCallback((i: number) => setIndex(i), []),
	};
};
