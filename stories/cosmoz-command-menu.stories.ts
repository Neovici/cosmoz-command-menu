import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from 'storybook/test';
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
					800,
				),
			);

		return html`
			<cosmoz-dropdown-next placement=${args.placement}>
				<cosmoz-button slot="button">Async Menu</cosmoz-button>
				<cosmoz-command-menu
					.source=${asyncSource}
					?searchable=${args.searchable}
					placeholder="Search (with 800ms delay)..."
					@select=${args.onSelect}
				></cosmoz-command-menu>
			</cosmoz-dropdown-next>
		`;
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
};
