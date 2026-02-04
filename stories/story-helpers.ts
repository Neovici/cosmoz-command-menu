import {
	clipboardIcon,
	copy01Icon,
	copy05Icon,
	download01Icon,
	edit02Icon,
	filterFunnel01Icon,
	scissorsCut01Icon,
	share01Icon,
	trash01Icon,
} from '@neovici/cosmoz-icons/untitled';
import { html } from '@pionjs/pion';
import type { MenuItem } from '../src/types';

// Icons for the stories — using cosmoz-icons with slot="prefix" for cosmoz-button
const slot = 'prefix';
export const copyIcon = copy01Icon({ slot });
export const editIcon = edit02Icon({ slot });
export const deleteIcon = trash01Icon({ slot });
export const shareIcon = share01Icon({ slot });
export const downloadIcon = download01Icon({ slot });
export const cutIcon = scissorsCut01Icon({ slot });
export const pasteIcon = clipboardIcon({ slot });
export const duplicateIcon = copy05Icon({ slot });
export const filterIcon = filterFunnel01Icon({ slot });

export const keybinding = (keys: string) => html`
	<cosmoz-keybinding-badge>${keys}</cosmoz-keybinding-badge>
`;

export const count = (n: number) => html`
	<span
		style="
			font-size: var(--cz-text-xs, 0.75rem);
			color: var(--cz-color-text-tertiary, #667085);
			background: var(--cz-color-bg-secondary, #f9fafb);
			padding: 2px 8px;
			border-radius: var(--cz-radius-full, 9999px);
		"
		>${n}</span
	>
`;

export const placementOptions = [
	'bottom span-right',
	'bottom span-left',
	'bottom',
	'top span-right',
	'top span-left',
	'top',
	'right span-bottom',
	'right span-top',
	'right',
	'left span-bottom',
	'left span-top',
	'left',
	'bottom center',
	'top center',
	'center',
];

export const basicItems: MenuItem[] = [
	{ label: 'Copy', value: 'copy', icon: copyIcon, suffix: keybinding('⌘C') },
	{ label: 'Edit', value: 'edit', icon: editIcon, suffix: keybinding('⌘E') },
	{
		label: 'Delete',
		value: 'delete',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
	},
];

export const searchableItems: MenuItem[] = [
	{ label: 'Copy', value: 'copy', icon: copyIcon, suffix: keybinding('⌘C') },
	{ label: 'Cut', value: 'cut', icon: cutIcon, suffix: keybinding('⌘X') },
	{ label: 'Paste', value: 'paste', icon: pasteIcon, suffix: keybinding('⌘V') },
	{ label: 'Edit', value: 'edit', icon: editIcon, suffix: keybinding('⌘E') },
	{
		label: 'Delete',
		value: 'delete',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
	},
	{
		label: 'Duplicate',
		value: 'duplicate',
		icon: duplicateIcon,
		suffix: keybinding('⌘D'),
	},
	{
		label: 'Share',
		value: 'share',
		icon: shareIcon,
		suffix: keybinding('⌘⇧S'),
	},
	{
		label: 'Download',
		value: 'download',
		icon: downloadIcon,
		suffix: keybinding('⌘⇧D'),
	},
];

export const groupedItems: MenuItem[] = [
	{
		label: 'Copy',
		value: 'copy',
		group: 'Clipboard',
		icon: copyIcon,
		suffix: keybinding('⌘C'),
	},
	{
		label: 'Cut',
		value: 'cut',
		group: 'Clipboard',
		icon: cutIcon,
		suffix: keybinding('⌘X'),
	},
	{
		label: 'Paste',
		value: 'paste',
		group: 'Clipboard',
		icon: pasteIcon,
		suffix: keybinding('⌘V'),
	},
	{
		label: 'Edit',
		value: 'edit',
		group: 'Actions',
		icon: editIcon,
		suffix: keybinding('⌘E'),
	},
	{
		label: 'Share',
		value: 'share',
		group: 'Actions',
		icon: shareIcon,
		suffix: keybinding('⌘⇧S'),
	},
	{
		label: 'Download',
		value: 'download',
		group: 'Actions',
		icon: downloadIcon,
		suffix: keybinding('⌘⇧D'),
	},
	{
		label: 'Delete',
		value: 'delete',
		group: 'Danger Zone',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
	},
];

export const itemsWithDisabled: MenuItem[] = [
	{ label: 'Copy', value: 'copy', icon: copyIcon, suffix: keybinding('⌘C') },
	{
		label: 'Edit',
		value: 'edit',
		icon: editIcon,
		suffix: keybinding('⌘E'),
		disabled: true,
	},
	{
		label: 'Share',
		value: 'share',
		icon: shareIcon,
		suffix: keybinding('⌘⇧S'),
	},
	{
		label: 'Delete',
		value: 'delete',
		icon: deleteIcon,
		suffix: keybinding('⌘⌫'),
		disabled: true,
	},
];

export const filterItems: MenuItem[] = [
	{
		label: 'Active',
		value: 'status:active',
		group: 'Status',
		suffix: count(24),
	},
	{
		label: 'Pending',
		value: 'status:pending',
		group: 'Status',
		suffix: count(12),
	},
	{
		label: 'Completed',
		value: 'status:completed',
		group: 'Status',
		suffix: count(89),
	},
	{
		label: 'Archived',
		value: 'status:archived',
		group: 'Status',
		suffix: count(5),
	},
	{
		label: 'Urgent',
		value: 'priority:urgent',
		group: 'Priority',
		suffix: count(3),
	},
	{
		label: 'High',
		value: 'priority:high',
		group: 'Priority',
		suffix: count(8),
	},
	{
		label: 'Medium',
		value: 'priority:medium',
		group: 'Priority',
		suffix: count(45),
	},
	{ label: 'Low', value: 'priority:low', group: 'Priority', suffix: count(67) },
	{ label: 'Bug', value: 'type:bug', group: 'Type', suffix: count(15) },
	{ label: 'Feature', value: 'type:feature', group: 'Type', suffix: count(32) },
	{ label: 'Task', value: 'type:task', group: 'Type', suffix: count(78) },
];

export const makeSearchable = (items: MenuItem[]) => (query: string) => {
	if (!query.trim()) return items;
	const q = query.toLowerCase();
	return items.filter((item) => item.label.toLowerCase().includes(q));
};
