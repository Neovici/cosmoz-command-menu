# cosmoz-command-menu

A data-driven command menu web component with search, groups, and keyboard navigation.

## Install

```sh
npm install @neovici/cosmoz-command-menu
```

## Usage

```js
import '@neovici/cosmoz-command-menu';
```

```html
<cosmoz-command-menu
  .source=${[
    { label: 'Copy', value: 'copy' },
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ]}
  searchable
  @select=${(e) => console.log(e.detail.item)}
></cosmoz-command-menu>
```

### With cosmoz-dropdown-next

```js
import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import '@neovici/cosmoz-command-menu';
```

```html
<cosmoz-dropdown-next>
  <button slot="button">Open</button>
  <cosmoz-command-menu .source=${items} searchable></cosmoz-command-menu>
</cosmoz-dropdown-next>
```

### Source

The `source` prop accepts:

- `MenuItem[]` — static array
- `Promise<MenuItem[]>` — async
- `(query: string) => MenuItem[] | Promise<MenuItem[]>` — function

### Keyboard navigation

Register the built-in keybindings in your app:

```js
import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
import { menuBindings } from '@neovici/cosmoz-command-menu/menu-keybindings';

useKeybindings(menuBindings);
```
