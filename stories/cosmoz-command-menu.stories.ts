import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, fn, waitFor } from 'storybook/test';

/** Set value on a search input and dispatch an input event */
const typeInSearch = (input: HTMLInputElement, value: string) => {
	input.value = value;
	input.dispatchEvent(new Event('input', { bubbles: true }));
};
import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import '../src/cosmoz-command-menu';
import '../src/cosmoz-keybinding-badge';
import '../src/cosmoz-menu-label';
import type { MenuItem } from '../src/types';
import {
	basicItems,
	filterIcon,
	filterItems,
	groupedItems,
	itemsWithDisabled,
	makeSearchable,
	placementOptions,
	searchableItems,
} from './story-helpers';

interface StoryArgs {
	searchable: boolean;
	placeholder: string;
	placement: string;
	onSelect: (e: CustomEvent) => void;
}

const meta: Meta<StoryArgs> = {
	title: 'Cosmoz Command Menu',
	component: 'cosmoz-command-menu',
	tags: ['autodocs'],
	argTypes: {
		searchable: { control: 'boolean', description: 'Show search input' },
		placeholder: {
			control: 'text',
			description: 'Search input placeholder text',
		},
		placement: {
			control: 'select',
			options: placementOptions,
			description:
				'CSS anchor position-area value. See MDN for all available options.',
		},
		onSelect: {
			action: 'select',
			description: 'Fired when a menu item is selected',
		},
	},
	args: {
		searchable: false,
		placeholder: 'Search...',
		placement: 'bottom span-right',
		onSelect: fn(),
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

/**
 * Basic command menu with a few items.
 * Click the button to open, use arrow keys to navigate.
 */
export const Basic: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Open Menu</cosmoz-button>
			<cosmoz-command-menu
				.source=${basicItems}
				@select=${args.onSelect}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, args, userEvent }) => {
		const menu =
			canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;

		// Wait for items to render in shadow DOM
		await waitFor(() => {
			const items = menu.shadowRoot!.querySelectorAll(
				'cosmoz-button[role="menuitem"]',
			);
			expect(items.length).toBe(3);
		});

		// Click the first item
		const firstItem = menu.shadowRoot!.querySelector(
			'cosmoz-button[role="menuitem"]',
		) as HTMLElement;
		await userEvent.click(firstItem);

		// Verify select event fired
		await expect(args.onSelect).toHaveBeenCalledOnce();
	},
};

/**
 * Menu with search input for filtering items.
 */
export const WithSearch: Story = {
	args: {
		searchable: true,
		placeholder: 'Type to filter...',
	},
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Search Menu</cosmoz-button>
			<cosmoz-command-menu
				.source=${makeSearchable(searchableItems)}
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				@select=${args.onSelect}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement }) => {
		const menu =
			canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
		const root = menu.shadowRoot!;

		// Wait for all 8 items to render
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(8);
		});

		// Search input should exist
		const input = root.querySelector('.search-input') as HTMLInputElement;
		expect(input).toBeTruthy();

		// Type "copy" to filter
		typeInSearch(input, 'copy');
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(1);
			expect(items[0].textContent).toContain('Copy');
		});

		// Clear and type a non-matching query
		typeInSearch(input, 'xyznonexistent');
		await waitFor(() => {
			const noResults = root.querySelector('.no-results');
			expect(noResults).toBeTruthy();
			expect(noResults!.textContent).toContain('No results found');
		});
	},
};

/**
 * Items organized into groups with visual separators.
 */
export const WithGroups: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Grouped Menu</cosmoz-button>
			<cosmoz-command-menu
				.source=${groupedItems}
				@select=${args.onSelect}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement }) => {
		const menu =
			canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
		const root = menu.shadowRoot!;

		// Wait for all 7 grouped items to render
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(7);
		});

		// Assert 3 groups with correct labels
		const groups = root.querySelectorAll('.group');
		expect(groups.length).toBe(3);

		const labels = root.querySelectorAll('.group-label');
		expect(labels.length).toBe(3);
		expect(labels[0].textContent).toContain('Clipboard');
		expect(labels[1].textContent).toContain('Actions');
		expect(labels[2].textContent).toContain('Danger Zone');
	},
};

/**
 * Groups with search for maximum usability.
 */
export const WithGroupsAndSearch: Story = {
	args: { searchable: true },
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Search Groups</cosmoz-button>
			<cosmoz-command-menu
				.source=${makeSearchable(groupedItems)}
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				@select=${args.onSelect}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement }) => {
		const menu =
			canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
		const root = menu.shadowRoot!;

		// Wait for all 7 items
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(7);
		});

		// Type "copy" to filter — only Clipboard group should remain
		const input = root.querySelector('.search-input') as HTMLInputElement;
		typeInSearch(input, 'copy');
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(1);

			const groups = root.querySelectorAll('.group');
			expect(groups.length).toBe(1);
			expect(
				groups[0].querySelector('.group-label')!.textContent,
			).toContain('Clipboard');
		});
	},
};

/**
 * Some items are disabled and cannot be selected or navigated to.
 */
export const WithDisabledItems: Story = {
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">Disabled Items</cosmoz-button>
			<cosmoz-command-menu
				.source=${itemsWithDisabled}
				@select=${args.onSelect}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, args, userEvent }) => {
		const menu =
			canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
		const root = menu.shadowRoot!;

		// Wait for all 4 items to render
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(4);
		});

		// Click disabled "Edit" item (index 1) — should NOT fire select
		const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
		const disabledItem = items[1] as HTMLElement;
		expect(disabledItem.hasAttribute('disabled')).toBe(true);
		await userEvent.click(disabledItem);
		await expect(args.onSelect).not.toHaveBeenCalled();

		// Click enabled "Copy" item (index 0) — should fire select
		const enabledItem = items[0] as HTMLElement;
		expect(enabledItem.hasAttribute('disabled')).toBe(false);
		await userEvent.click(enabledItem);
		await expect(args.onSelect).toHaveBeenCalledOnce();
	},
};

/**
 * Source can be an async function that returns items.
 * The menu shows a loading state while waiting.
 */
export const AsyncSource: Story = {
	args: { searchable: true },
	render: (args) => {
		const asyncSource = (query: string) =>
			new Promise<MenuItem[]>((resolve) =>
				setTimeout(
					() =>
						resolve(
							searchableItems.filter(
								(item) =>
									!query ||
									item.label.toLowerCase().includes(query.toLowerCase()),
							),
						),
					150,
				),
			);

		return html`
			<cosmoz-dropdown-next placement=${args.placement}>
				<cosmoz-button slot="button">Async Menu</cosmoz-button>
				<cosmoz-command-menu
					.source=${asyncSource}
					?searchable=${args.searchable}
					placeholder="Search (with 150ms delay)..."
					@select=${args.onSelect}
				></cosmoz-command-menu>
			</cosmoz-dropdown-next>
		`;
	},
	play: async ({ canvasElement }) => {
		const menu =
			canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
		const root = menu.shadowRoot!;

		// After async resolution, items should render and loading should disappear
		await waitFor(
			() => {
				const items = root.querySelectorAll(
					'cosmoz-button[role="menuitem"]',
				);
				expect(items.length).toBe(8);
				expect(root.querySelector('.loading')).toBeNull();
			},
			{ timeout: 2000 },
		);
	},
};

/**
 * A filter-style menu with count badges and groups.
 */
export const FilterMenu: Story = {
	args: { searchable: true },
	render: (args) => html`
		<cosmoz-dropdown-next placement=${args.placement}>
			<cosmoz-button slot="button">${filterIcon} Filters</cosmoz-button>
			<cosmoz-command-menu
				.source=${makeSearchable(filterItems)}
				?searchable=${args.searchable}
				placeholder="Filter by..."
				@select=${args.onSelect}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement }) => {
		const menu =
			canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
		const root = menu.shadowRoot!;

		// Wait for all 11 filter items to render
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(11);
		});

		// Assert 3 groups: Status, Priority, Type
		const labels = root.querySelectorAll('.group-label');
		expect(labels.length).toBe(3);
		expect(labels[0].textContent).toContain('Status');
		expect(labels[1].textContent).toContain('Priority');
		expect(labels[2].textContent).toContain('Type');

		// Type "bug" to filter — only 1 item should remain
		const input = root.querySelector('.search-input') as HTMLInputElement;
		typeInSearch(input, 'bug');
		await waitFor(() => {
			const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
			expect(items.length).toBe(1);
			expect(items[0].textContent).toContain('Bug');
		});
	},
};
