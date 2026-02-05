import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, fn, waitFor } from 'storybook/test';

/** Set value on a search input and dispatch an input event.
 *  Needed because userEvent.type() doesn't work with Pion's
 *  property-bound inputs (.value=${query}) — Pion re-renders
 *  and overwrites the DOM value between keystrokes. */
const typeInSearch = (input: HTMLInputElement, value: string) => {
	input.value = value;
	input.dispatchEvent(new Event('input', { bubbles: true }));
};

import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import '../src/cosmoz-command-menu';
import '../src/cosmoz-keybinding-badge';
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
		onSelect: {
			action: 'select',
			description: 'Fired when a menu item is selected',
		},
	},
	args: {
		searchable: false,
		placeholder: 'Search...',
		onSelect: fn(),
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

/**
 * Basic command menu with a few items.
 * Use arrow keys to navigate, Enter to select.
 */
export const Basic: Story = {
	render: (args) => html`
		<cosmoz-command-menu
			.source=${basicItems}
			@select=${args.onSelect}
		></cosmoz-command-menu>
	`,
	play: async ({ canvas, args, step, userEvent }) => {
		await step('Renders 3 menu items', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			expect(items).toHaveLength(3);
		});

		await step('Clicking an item fires select event', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			await userEvent.click(items[0]);
			await expect(args.onSelect).toHaveBeenCalledOnce();
		});
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
		<cosmoz-command-menu
			.source=${makeSearchable(searchableItems)}
			?searchable=${args.searchable}
			placeholder=${args.placeholder}
			@select=${args.onSelect}
		></cosmoz-command-menu>
	`,
	play: async ({ canvas, step }) => {
		await step('Renders all 8 items initially', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			expect(items).toHaveLength(8);
		});

		await step('Filtering by "copy" shows 1 result', async () => {
			const input = canvas.getByShadowRole('textbox') as HTMLInputElement;
			typeInSearch(input, 'copy');
			await waitFor(async () => {
				const items = await canvas.findAllByShadowRole('menuitem');
				expect(items).toHaveLength(1);
				expect(items[0].textContent).toContain('Copy');
			});
		});

		await step('Non-matching query shows "No results found"', async () => {
			const input = canvas.getByShadowRole('textbox') as HTMLInputElement;
			typeInSearch(input, 'xyznonexistent');
			await canvas.findByShadowText('No results found');
		});
	},
};

/**
 * Items organized into groups with visual separators.
 */
export const WithGroups: Story = {
	render: (args) => html`
		<cosmoz-command-menu
			.source=${groupedItems}
			@select=${args.onSelect}
		></cosmoz-command-menu>
	`,
	play: async ({ canvas, step }) => {
		await step('Renders 7 items in 3 groups', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			expect(items).toHaveLength(7);

			const groups = canvas.getAllByShadowRole('group');
			expect(groups).toHaveLength(3);
		});

		await step(
			'Groups are labeled Clipboard, Actions, Danger Zone',
			async () => {
				canvas.getByShadowRole('group', { name: 'Clipboard' });
				canvas.getByShadowRole('group', { name: 'Actions' });
				canvas.getByShadowRole('group', { name: 'Danger Zone' });
			},
		);
	},
};

/**
 * Groups with search for maximum usability.
 */
export const WithGroupsAndSearch: Story = {
	args: { searchable: true },
	render: (args) => html`
		<cosmoz-command-menu
			.source=${makeSearchable(groupedItems)}
			?searchable=${args.searchable}
			placeholder=${args.placeholder}
			@select=${args.onSelect}
		></cosmoz-command-menu>
	`,
	play: async ({ canvas, step }) => {
		await step('Renders all 7 grouped items', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			expect(items).toHaveLength(7);
		});

		await step(
			'Filtering by "copy" shows 1 item in Clipboard group only',
			async () => {
				const input = canvas.getByShadowRole('textbox') as HTMLInputElement;
				typeInSearch(input, 'copy');
				await waitFor(async () => {
					const items = await canvas.findAllByShadowRole('menuitem');
					expect(items).toHaveLength(1);

					const groups = canvas.getAllByShadowRole('group');
					expect(groups).toHaveLength(1);
					canvas.getByShadowRole('group', { name: 'Clipboard' });
				});
			},
		);
	},
};

/**
 * Some items are disabled and cannot be selected or navigated to.
 */
export const WithDisabledItems: Story = {
	render: (args) => html`
		<cosmoz-command-menu
			.source=${itemsWithDisabled}
			@select=${args.onSelect}
		></cosmoz-command-menu>
	`,
	play: async ({ canvas, args, step, userEvent }) => {
		await step('Clicking disabled item does not fire select', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			expect(items).toHaveLength(4);

			const disabledItem = items[1];
			expect(disabledItem.hasAttribute('disabled')).toBe(true);
			await userEvent.click(disabledItem);
			await expect(args.onSelect).not.toHaveBeenCalled();
		});

		await step('Clicking enabled item fires select once', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			const enabledItem = items[0];
			expect(enabledItem.hasAttribute('disabled')).toBe(false);
			await userEvent.click(enabledItem);
			await expect(args.onSelect).toHaveBeenCalledOnce();
		});
	},
};

/**
 * Source can be an async function that returns items.
 * The menu shows a loading state while waiting.
 */
export const AsyncSource: Story = {
	args: { searchable: true, delay: 150 },
	argTypes: {
		delay: {
			control: { type: 'number', min: 0, step: 50 },
			description: 'Simulated async delay in milliseconds',
		},
	},
	render: (args) => {
		const { delay = 150 } = args as StoryArgs & { delay: number };
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
					delay,
				),
			);

		return html`
			<cosmoz-command-menu
				.source=${asyncSource}
				?searchable=${args.searchable}
				placeholder="Search (with ${delay}ms delay)..."
				@select=${args.onSelect}
			></cosmoz-command-menu>
		`;
	},
	play: async ({ canvas, step }) => {
		await step('Items load after async delay', async () => {
			await waitFor(
				async () => {
					const items = await canvas.findAllByShadowRole('menuitem');
					expect(items).toHaveLength(8);
					expect(canvas.queryByShadowText('Loading...')).toBeNull();
				},
				{ timeout: 2000 },
			);
		});
	},
};

/**
 * When the async source rejects, the menu displays an error message.
 */
export const ErrorState: Story = {
	args: { searchable: true },
	render: (args) => {
		const failingSource = () =>
			new Promise<MenuItem[]>((_resolve, reject) =>
				setTimeout(() => reject(new Error('Network error')), 50),
			);

		return html`
			<cosmoz-command-menu
				.source=${failingSource}
				?searchable=${args.searchable}
				placeholder=${args.placeholder}
				@select=${args.onSelect}
			></cosmoz-command-menu>
		`;
	},
	play: async ({ canvas, step }) => {
		await step('Shows error message when source rejects', async () => {
			await canvas.findByShadowText('Network error');
		});

		await step('No menu items are rendered', async () => {
			const items = canvas.queryAllByShadowRole('menuitem');
			expect(items).toHaveLength(0);
		});
	},
};

/**
 * A filter-style menu with count badges and groups, shown inside a dropdown.
 */
export const FilterMenu: Story = {
	args: { searchable: true },
	argTypes: {
		placement: {
			control: 'select',
			options: placementOptions,
			description:
				'CSS anchor position-area value. See MDN for all available options.',
		},
	},
	render: (args) => html`
		<cosmoz-dropdown-next placement=${(args as StoryArgs & { placement: string }).placement ?? 'bottom span-right'}>
			<cosmoz-button slot="button">${filterIcon} Filters</cosmoz-button>
		<cosmoz-command-menu
			autofocus
			.source=${makeSearchable(filterItems)}
			?searchable=${args.searchable}
			placeholder="Filter by..."
			@select=${args.onSelect}
		></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, canvas, args, step, userEvent }) => {
		await step('Open dropdown', async () => {
			const button = canvasElement.querySelector(
				'cosmoz-button[slot="button"]',
			) as HTMLElement;
			await userEvent.click(button);
		});

		await step('Renders 11 items in 3 groups', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			expect(items).toHaveLength(11);

			const groups = canvas.getAllByShadowRole('group');
			expect(groups).toHaveLength(3);
			canvas.getByShadowRole('group', { name: 'Status' });
			canvas.getByShadowRole('group', { name: 'Priority' });
			canvas.getByShadowRole('group', { name: 'Type' });
		});

		await step('Filtering by "bug" shows 1 item', async () => {
			const input = canvas.getByShadowRole('textbox') as HTMLInputElement;
			typeInSearch(input, 'bug');
			await waitFor(async () => {
				const items = await canvas.findAllByShadowRole('menuitem');
				expect(items).toHaveLength(1);
				expect(items[0].textContent).toContain('Bug');
			});
		});

		await step('ArrowDown highlights the first item', async () => {
			const input = canvas.getByShadowRole('textbox') as HTMLInputElement;
			typeInSearch(input, '');
			await waitFor(async () => {
				const items = await canvas.findAllByShadowRole('menuitem');
				expect(items).toHaveLength(11);
			});

			await userEvent.keyboard('{ArrowDown}');
			await waitFor(() => {
				const items = canvas.getAllByShadowRole('menuitem');
				expect(items[0].hasAttribute('data-highlighted')).toBe(true);
			});
		});

		await step('Enter selects the highlighted item', async () => {
			await userEvent.keyboard('{Enter}');
			await expect(args.onSelect).toHaveBeenCalledOnce();
		});
	},
};

/**
 * An actions menu shown inside a dropdown, without search.
 */
export const Actions: Story = {
	argTypes: {
		placement: {
			control: 'select',
			options: placementOptions,
			description:
				'CSS anchor position-area value. See MDN for all available options.',
		},
	},
	render: (args) => html`
		<cosmoz-dropdown-next placement=${(args as StoryArgs & { placement: string }).placement ?? 'bottom span-right'}>
			<cosmoz-button slot="button">Actions</cosmoz-button>
			<cosmoz-command-menu
				autofocus
				.source=${basicItems}
				@select=${args.onSelect}
			></cosmoz-command-menu>
		</cosmoz-dropdown-next>
	`,
	play: async ({ canvasElement, canvas, args, step, userEvent }) => {
		await step('Open dropdown', async () => {
			const button = canvasElement.querySelector(
				'cosmoz-button[slot="button"]',
			) as HTMLElement;
			await userEvent.click(button);
		});

		await step('Renders 3 menu items', async () => {
			const items = await canvas.findAllByShadowRole('menuitem');
			expect(items).toHaveLength(3);
		});

		await step('ArrowDown highlights the first item', async () => {
			await userEvent.keyboard('{ArrowDown}');
			await waitFor(() => {
				const items = canvas.getAllByShadowRole('menuitem');
				expect(items[0].hasAttribute('data-highlighted')).toBe(true);
			});
		});

		await step('ArrowDown again highlights the second item', async () => {
			await userEvent.keyboard('{ArrowDown}');
			await waitFor(() => {
				const items = canvas.getAllByShadowRole('menuitem');
				expect(items[0].hasAttribute('data-highlighted')).toBe(false);
				expect(items[1].hasAttribute('data-highlighted')).toBe(true);
			});
		});

		await step('ArrowUp highlights the first item again', async () => {
			await userEvent.keyboard('{ArrowUp}');
			await waitFor(() => {
				const items = canvas.getAllByShadowRole('menuitem');
				expect(items[0].hasAttribute('data-highlighted')).toBe(true);
				expect(items[1].hasAttribute('data-highlighted')).toBe(false);
			});
		});

		await step('Enter selects the highlighted item', async () => {
			await userEvent.keyboard('{Enter}');
			await expect(args.onSelect).toHaveBeenCalledOnce();
		});
	},
};
