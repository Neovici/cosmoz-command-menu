import{u as j,r as te,a as oe,K as ne,b as ae,c as M,A as y,d as _,e as T,f as r,g as H,h as v,M as se,i as re,j as ie,k as ce,l as le,n as U,m as de}from"./iframe-CuiijxEN.js";import"./preload-helper-PPVm8Dsz.js";function W(e){return j(()=>({current:e}),[])}const ue={CHILD:2},me=e=>(...t)=>({_$litDirective$:e,values:t});class pe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,n){this._$Ct=t,this._$AM=o,this._$Ci=n}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const R=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(t,!1),R(n,t);return!0},L=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},q=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),fe(t)}};function he(e){this._$AN!==void 0?(L(this),this._$AM=e,q(this)):this._$AM=e}function ge(e,t=!1,o=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(n))for(let s=o;s<n.length;s++)R(n[s],!1),L(n[s]);else n!=null&&(R(n,!1),L(n));else R(this,e)}const fe=e=>{e.type==ue.CHILD&&(e._$AP??=ge,e._$AQ??=he)};class ye extends pe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,n){super._$AT(t,o,n),q(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(R(this,t),L(this))}setValue(t){if(te(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const C=(e,t)=>{const o=oe(ne),n=ae(e);M(()=>o(n),t)},F=new WeakMap,X=me(class extends ye{render(e){return y}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),y}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=F.get(t);o===void 0&&(o=new WeakMap,F.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?F.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),be=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const a of n){const s=a.matches("[autofocus]")?a:a.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},ve=_`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}
`,we=({placement:e="bottom span-right"})=>{const t=W();return r`
		<slot name="button" @click=${()=>{t.current?.togglePopover()}}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${be}
			@select=${()=>{t.current?.hidePopover()}}
			${X(a=>{t.current=a})}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",T(we,{styleSheets:[ve],observedAttributes:["placement"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const xe=({items:e,onSelect:t,host:o,itemsContainerRef:n})=>{const[a,s]=H(-1);M(()=>{s(-1)},[e]),M(()=>{if(a<0)return;n.current?.querySelector(`[data-index="${a}"]`)?.scrollIntoView({block:"nearest"})},[a,n]);const m=v((c,w)=>{const b=e.length;if(b===0)return-1;let p=c;p<0&&(p=w===1?-1:b);for(let Z=0;Z<b;Z++)if(p=(p+w+b)%b,!e[p]?.disabled)return p;return-1},[e]),d=v(()=>{s(c=>m(c,1))},[m]),g=v(()=>{s(c=>m(c,-1))},[m]),u=v(()=>{const c=e.findIndex(w=>!w.disabled);s(c)},[e]),f=v(()=>{for(let c=e.length-1;c>=0;c--)if(!e[c].disabled){s(c);return}},[e]),x=v(()=>{if(a>=0&&a<e.length){const c=e[a];c&&!c.disabled&&t(c)}},[e,a,t]);return C({activity:se,callback:d,element:()=>o},[d,o]),C({activity:re,callback:g,element:()=>o},[g,o]),C({activity:ie,callback:u,element:()=>o},[u,o]),C({activity:ce,callback:f,element:()=>o},[f,o]),C({activity:le,callback:x,element:()=>o},[x,o]),{index:a,highlight:v(c=>s(c),[])}},Ce=(e,t)=>{if(!e)return Promise.resolve([]);const o=typeof e=="function"?e(t):e;return Promise.resolve(o).then(n=>n??[])},Se=(e,t)=>{const[o,n]=H([]),[a,s]=H(!1),[m,d]=H(null);return M(()=>{let u=!1;return s(!0),d(null),Ce(e,t).then(f=>{u||n(f)}).catch(f=>{u||d(f?.message??"Failed to load items")}).finally(()=>{u||s(!1)}),()=>{u=!0}},[e,t]),{items:j(()=>{if(!t.trim())return o;const u=t.toLowerCase();return o.filter(f=>f.label.toLowerCase().includes(u))},[o,t]),loading:a,error:m}},ke=_`
	:host {
		display: flex;
		flex-direction: column;
		min-width: 240px;
		max-width: 320px;
		max-height: var(--cosmoz-command-menu-max-height, 400px);
		background: var(--cz-color-bg-primary, #fff);
		border-radius: var(--cz-radius-xl, 0.75rem);
		box-shadow: var(
			--cz-shadow-lg,
			0px 12px 16px -4px rgba(10, 13, 18, 0.08),
			0px 4px 6px -2px rgba(10, 13, 18, 0.03)
		);
		overflow: hidden;
		border: 1px solid var(--cz-color-border-secondary, #eaecf0);
	}

	.search {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 0.25rem) * 2);
		padding: calc(var(--cz-spacing, 0.25rem) * 3);
		border-bottom: 1px solid var(--cz-color-border-secondary, #eaecf0);
		position: relative;
		overflow: hidden;
	}

	.search::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent,
			var(--cz-color-brand-500, #7c3aed),
			transparent
		);
		opacity: 0;
		transform: translateX(-100%);
	}

	.search.loading::after {
		opacity: 0.4;
		animation: shimmer 2s infinite linear;
	}

	@keyframes shimmer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}

	.search-icon {
		flex-shrink: 0;
		width: 20px;
		height: 20px;
		color: var(--cz-color-fg-quaternary, #98a2b3);
	}

	.search-input {
		flex: 1;
		min-width: 0;
		border: none;
		outline: none;
		font-size: var(--cz-text-sm, 0.875rem);
		line-height: var(--cz-text-sm-line-height, 1.5);
		color: var(--cz-color-text-primary, #101828);
		background: transparent;
	}

	.search-input::placeholder {
		color: var(--cz-color-text-placeholder, #667085);
	}

	.items {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.no-results {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
		font-size: var(--cz-text-sm, 0.875rem);
	}

	.loading-text {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-tertiary, #475467);
	}

	.error {
		padding: calc(var(--cz-spacing, 0.25rem) * 4);
		text-align: center;
		color: var(--cz-color-text-error, #dc2626);
		font-size: var(--cz-text-sm, 0.875rem);
	}

	.group-label {
		padding: calc(var(--cz-spacing, 0.25rem) * 1)
			calc(var(--cz-spacing, 0.25rem) * 3);
		font-size: var(--cz-text-xs, 0.75rem);
		font-weight: var(--cz-font-weight-semibold, 600);
		color: var(--cz-color-text-tertiary, #475467);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.group:not(:first-child) {
		border-top: 1px solid var(--cz-color-border-secondary, #eaecf0);
		margin-top: calc(var(--cz-spacing, 0.25rem) * 2);
		padding-top: calc(var(--cz-spacing, 0.25rem) * 2);
	}

	cosmoz-button[data-highlighted] {
		background: var(--cz-color-bg-primary-hover, #f9fafb);
	}

	/* Hide built-in focus ring, use fake highlighting instead */
	cosmoz-button::part(button):focus-visible {
		box-shadow: none;
		outline: none;
	}
`,$e=r`
	<svg class="search-icon" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
			stroke="currentColor"
			stroke-width="1.66667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,ze=({item:e,index:t,highlightedIndex:o,highlight:n,select:a})=>r`
	<cosmoz-button
		variant="tertiary"
		full-width
		role="menuitem"
		?disabled=${e.disabled}
		?data-highlighted=${t===o}
		data-index=${t}
		@mouseenter=${()=>n(t)}
		@click=${()=>!e.disabled&&a(e)}
		@mousedown=${s=>s.preventDefault()}
	>
		${e.icon??y}
		<cosmoz-menu-label>${e.label}</cosmoz-menu-label>
		${e.suffix??y}
	</cosmoz-button>
`,Ae=({grouped:e,items:t,highlightedIndex:o,highlight:n,select:a})=>{const s=new Map;return t.forEach((m,d)=>s.set(m,d)),Array.from(e.entries()).map(([m,d])=>{const g=d.map(u=>ze({item:u,index:s.get(u)??-1,highlightedIndex:o,highlight:n,select:a}));return m?r`
				<div class="group" role="group" aria-label=${m}>
					<div class="group-label">${m}</div>
					${g}
				</div>
			`:g})},Be=e=>{const t=new Map;for(const o of e){const n=o.group||"";t.has(n)||t.set(n,[]),t.get(n).push(o)}return t},Ie=({source:e,searchable:t=!1,placeholder:o="Search..."})=>{const n=de(),a=W(),[s,m]=H(""),{items:d,loading:g,error:u}=Se(e,s),f=j(()=>Be(d),[d]),x=v(p=>{n.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{item:p}}))},[n]),{index:c,highlight:w}=xe({items:d,onSelect:x,host:n,itemsContainerRef:a});M(()=>{n.setAttribute("role","menu")},[n]);const b=d.length>0;return r`
		${t?r`
					<div class="search${g?" loading":""}">
						${$e}
						<input
							class="search-input"
							.value=${s}
							@input=${p=>m(p.target.value)}
							placeholder=${o}
							autofocus
						/>
					</div>
				`:y}

		<div
			class="items"
			${X(p=>{a.current=p})}
		>
			${u?r`<div class="error">${u}</div>`:y}
			${g&&d.length===0?r`<div class="loading-text">Loading...</div>`:y}
			${!g&&!b&&s.trim().length>0?r`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`:y}
			${b?Ae({grouped:f,items:d,highlightedIndex:c,highlight:w,select:x}):y}
		</div>
	`};customElements.define("cosmoz-command-menu",T(Ie,{styleSheets:[U,ke],observedAttributes:["searchable","placeholder"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const He=_`
	:host {
		display: inline-flex;
		align-items: center;
		font-size: var(--cz-text-xs, 0.75rem);
		color: var(--cz-color-text-tertiary, #475467);
		font-weight: var(--cz-font-weight-medium, 500);
		background: var(--cz-color-bg-tertiary, #f2f4f7);
		padding: calc(var(--cz-spacing, 0.25rem) / 2)
			calc(var(--cz-spacing, 0.25rem) * 1.5);
		border-radius: var(--cz-radius-sm, 0.375rem);
	}
`,Re=()=>r`<slot></slot>`;customElements.define("cosmoz-keybinding-badge",T(Re,{styleSheets:[U,He]}));const Me=_`
	:host {
		display: inline-flex;
		flex: 1;
		text-align: left;
		min-width: 0;
	}
`,Le=()=>r`<slot></slot>`;customElements.define("cosmoz-menu-label",T(Le,{styleSheets:[Me]}));const D=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H10.8333C11.2754 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
`,N=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26465C18.1294 3.55059 18.1904 3.85706 18.1904 4.16667C18.1904 4.47627 18.1294 4.78275 18.0109 5.06868C17.8925 5.35462 17.7189 5.61446 17.5 5.83333L6.25 17.0833L1.66667 18.3333L2.91667 13.75L14.1667 2.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,V=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M2.5 5H4.16667H17.5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,O=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M15 6.66667C16.3807 6.66667 17.5 5.54738 17.5 4.16667C17.5 2.78595 16.3807 1.66667 15 1.66667C13.6193 1.66667 12.5 2.78595 12.5 4.16667C12.5 5.54738 13.6193 6.66667 15 6.66667Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M15 18.3333C16.3807 18.3333 17.5 17.214 17.5 15.8333C17.5 14.4526 16.3807 13.3333 15 13.3333C13.6193 13.3333 12.5 14.4526 12.5 15.8333C12.5 17.214 13.6193 18.3333 15 18.3333Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M7.15833 11.2583L12.85 14.575"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.8417 5.42499L7.15833 8.74166"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,K=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,Y=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M6.91667 6.91667L17.5 17.5M17.5 2.5L6.91667 13.0833"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,Q=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M13.3333 3.33333H15C15.442 3.33333 15.866 3.50893 16.1785 3.82149C16.4911 4.13405 16.6667 4.55797 16.6667 5V16.6667C16.6667 17.1087 16.4911 17.5326 16.1785 17.8452C15.866 18.1577 15.442 18.3333 15 18.3333H5C4.55797 18.3333 4.13405 18.1577 3.82149 17.8452C3.50893 17.5326 3.33333 17.1087 3.33333 16.6667V5C3.33333 4.55797 3.50893 4.13405 3.82149 3.82149C4.13405 3.50893 4.55797 3.33333 5 3.33333H6.66667"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M12.5 1.66667H7.5C7.03976 1.66667 6.66667 2.03976 6.66667 2.5V4.16667C6.66667 4.6269 7.03976 5 7.5 5H12.5C12.9602 5 13.3333 4.6269 13.3333 4.16667V2.5C13.3333 2.03976 12.9602 1.66667 12.5 1.66667Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,Ee=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H10.8333C11.2754 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,_e=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M18.3333 2.5H1.66667L8.33333 10.3833V15.8333L11.6667 17.5V10.3833L18.3333 2.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,i=e=>r`
	<cosmoz-keybinding-badge>${e}</cosmoz-keybinding-badge>
`,h=e=>r`
	<span
		style="
			font-size: var(--cz-text-xs, 0.75rem);
			color: var(--cz-color-text-tertiary, #667085);
			background: var(--cz-color-bg-secondary, #f9fafb);
			padding: 2px 8px;
			border-radius: var(--cz-radius-full, 9999px);
		"
		>${e}</span
	>
`,Te=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],De=[{label:"Copy",value:"copy",icon:D,suffix:i("⌘C")},{label:"Edit",value:"edit",icon:N,suffix:i("⌘E")},{label:"Delete",value:"delete",icon:V,suffix:i("⌘⌫")}],J=[{label:"Copy",value:"copy",icon:D,suffix:i("⌘C")},{label:"Cut",value:"cut",icon:Y,suffix:i("⌘X")},{label:"Paste",value:"paste",icon:Q,suffix:i("⌘V")},{label:"Edit",value:"edit",icon:N,suffix:i("⌘E")},{label:"Delete",value:"delete",icon:V,suffix:i("⌘⌫")},{label:"Duplicate",value:"duplicate",icon:Ee,suffix:i("⌘D")},{label:"Share",value:"share",icon:O,suffix:i("⌘⇧S")},{label:"Download",value:"download",icon:K,suffix:i("⌘⇧D")}],ee=[{label:"Copy",value:"copy",group:"Clipboard",icon:D,suffix:i("⌘C")},{label:"Cut",value:"cut",group:"Clipboard",icon:Y,suffix:i("⌘X")},{label:"Paste",value:"paste",group:"Clipboard",icon:Q,suffix:i("⌘V")},{label:"Edit",value:"edit",group:"Actions",icon:N,suffix:i("⌘E")},{label:"Share",value:"share",group:"Actions",icon:O,suffix:i("⌘⇧S")},{label:"Download",value:"download",group:"Actions",icon:K,suffix:i("⌘⇧D")},{label:"Delete",value:"delete",group:"Danger Zone",icon:V,suffix:i("⌘⌫")}],Ne=[{label:"Copy",value:"copy",icon:D,suffix:i("⌘C")},{label:"Edit",value:"edit",icon:N,suffix:i("⌘E"),disabled:!0},{label:"Share",value:"share",icon:O,suffix:i("⌘⇧S")},{label:"Delete",value:"delete",icon:V,suffix:i("⌘⌫"),disabled:!0}],Ve=[{label:"Active",value:"status:active",group:"Status",suffix:h(24)},{label:"Pending",value:"status:pending",group:"Status",suffix:h(12)},{label:"Completed",value:"status:completed",group:"Status",suffix:h(89)},{label:"Archived",value:"status:archived",group:"Status",suffix:h(5)},{label:"Urgent",value:"priority:urgent",group:"Priority",suffix:h(3)},{label:"High",value:"priority:high",group:"Priority",suffix:h(8)},{label:"Medium",value:"priority:medium",group:"Priority",suffix:h(45)},{label:"Low",value:"priority:low",group:"Priority",suffix:h(67)},{label:"Bug",value:"type:bug",group:"Type",suffix:h(15)},{label:"Feature",value:"type:feature",group:"Type",suffix:h(32)},{label:"Task",value:"type:task",group:"Type",suffix:h(78)}],P=e=>t=>{if(!t.trim())return e;const o=t.toLowerCase();return e.filter(n=>n.label.toLowerCase().includes(o))},{expect:l,fn:Ge,waitFor:G}=__STORYBOOK_MODULE_TEST__,E=(e,t)=>{e.value=t,e.dispatchEvent(new Event("input",{bubbles:!0}))},Oe={title:"Cosmoz Command Menu",component:"cosmoz-command-menu",tags:["autodocs"],argTypes:{searchable:{control:"boolean",description:"Show search input"},placeholder:{control:"text",description:"Search input placeholder text"},onSelect:{action:"select",description:"Fired when a menu item is selected"}},args:{searchable:!1,placeholder:"Search...",onSelect:Ge()}},S={render:e=>r`
        <cosmoz-command-menu
            .source=${De}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,args:t,step:o,userEvent:n})=>{await o("Renders 3 menu items",async()=>{const a=await e.findAllByShadowRole("menuitem");l(a).toHaveLength(3)}),await o("Clicking an item fires select event",async()=>{const a=await e.findAllByShadowRole("menuitem");await n.click(a[0]),await l(t.onSelect).toHaveBeenCalledOnce()})}},k={args:{searchable:!0,placeholder:"Type to filter..."},render:e=>r`
        <cosmoz-command-menu
            .source=${P(J)}
            ?searchable=${e.searchable}
            placeholder=${e.placeholder}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,step:t})=>{await t("Renders all 8 items initially",async()=>{const o=await e.findAllByShadowRole("menuitem");l(o).toHaveLength(8)}),await t('Filtering by "copy" shows 1 result',async()=>{const o=e.getByShadowRole("textbox");E(o,"copy"),await G(async()=>{const n=await e.findAllByShadowRole("menuitem");l(n).toHaveLength(1),l(n[0].textContent).toContain("Copy")})}),await t('Non-matching query shows "No results found"',async()=>{const o=e.getByShadowRole("textbox");E(o,"xyznonexistent"),await e.findByShadowText("No results found")})}},$={render:e=>r`
        <cosmoz-command-menu
            .source=${ee}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,step:t})=>{await t("Renders 7 items in 3 groups",async()=>{const o=await e.findAllByShadowRole("menuitem");l(o).toHaveLength(7);const n=e.getAllByShadowRole("group");l(n).toHaveLength(3)}),await t("Groups are labeled Clipboard, Actions, Danger Zone",async()=>{e.getByShadowRole("group",{name:"Clipboard"}),e.getByShadowRole("group",{name:"Actions"}),e.getByShadowRole("group",{name:"Danger Zone"})})}},z={args:{searchable:!0},render:e=>r`
        <cosmoz-command-menu
            .source=${P(ee)}
            ?searchable=${e.searchable}
            placeholder=${e.placeholder}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,step:t})=>{await t("Renders all 7 grouped items",async()=>{const o=await e.findAllByShadowRole("menuitem");l(o).toHaveLength(7)}),await t('Filtering by "copy" shows 1 item in Clipboard group only',async()=>{const o=e.getByShadowRole("textbox");E(o,"copy"),await G(async()=>{const n=await e.findAllByShadowRole("menuitem");l(n).toHaveLength(1);const a=e.getAllByShadowRole("group");l(a).toHaveLength(1),e.getByShadowRole("group",{name:"Clipboard"})})})}},A={render:e=>r`
        <cosmoz-command-menu
            .source=${Ne}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,args:t,step:o,userEvent:n})=>{await o("Clicking disabled item does not fire select",async()=>{const a=await e.findAllByShadowRole("menuitem");l(a).toHaveLength(4);const s=a[1];l(s.hasAttribute("disabled")).toBe(!0),await n.click(s),await l(t.onSelect).not.toHaveBeenCalled()}),await o("Clicking enabled item fires select once",async()=>{const s=(await e.findAllByShadowRole("menuitem"))[0];l(s.hasAttribute("disabled")).toBe(!1),await n.click(s),await l(t.onSelect).toHaveBeenCalledOnce()})}},B={args:{searchable:!0},render:e=>r`
            <cosmoz-command-menu
                .source=${o=>new Promise(n=>setTimeout(()=>n(J.filter(a=>!o||a.label.toLowerCase().includes(o.toLowerCase()))),150))}
                ?searchable=${e.searchable}
                placeholder="Search (with 150ms delay)..."
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        `,play:async({canvas:e,step:t})=>{await t("Items load after async delay",async()=>{await G(async()=>{const o=await e.findAllByShadowRole("menuitem");l(o).toHaveLength(8),l(e.queryByShadowText("Loading...")).toBeNull()},{timeout:2e3})})}},I={args:{searchable:!0},argTypes:{placement:{control:"select",options:Te,description:"CSS anchor position-area value. See MDN for all available options."}},render:e=>r`
        <cosmoz-dropdown-next placement=${e.placement??"bottom span-right"}>
            <cosmoz-button slot="button">${_e} Filters</cosmoz-button>
            <cosmoz-command-menu
                .source=${P(Ve)}
                ?searchable=${e.searchable}
                placeholder="Filter by..."
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,step:o,userEvent:n})=>{await o("Open dropdown",async()=>{const a=e.querySelector('cosmoz-button[slot="button"]');await n.click(a)}),await o("Renders 11 items in 3 groups",async()=>{const a=await t.findAllByShadowRole("menuitem");l(a).toHaveLength(11);const s=t.getAllByShadowRole("group");l(s).toHaveLength(3),t.getByShadowRole("group",{name:"Status"}),t.getByShadowRole("group",{name:"Priority"}),t.getByShadowRole("group",{name:"Type"})}),await o('Filtering by "bug" shows 1 item',async()=>{const a=t.getByShadowRole("textbox");E(a,"bug"),await G(async()=>{const s=await t.findAllByShadowRole("menuitem");l(s).toHaveLength(1),l(s[0].textContent).toContain("Bug")})})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-command-menu
            .source=\${basicItems}
            @select=\${args.onSelect}
        ></cosmoz-command-menu>
    \`,
  play: async ({
    canvas,
    args,
    step,
    userEvent
  }) => {
    await step('Renders 3 menu items', async () => {
      const items = await canvas.findAllByShadowRole('menuitem');
      expect(items).toHaveLength(3);
    });
    await step('Clicking an item fires select event', async () => {
      const items = await canvas.findAllByShadowRole('menuitem');
      await userEvent.click(items[0]);
      await expect(args.onSelect).toHaveBeenCalledOnce();
    });
  }
}`,...S.parameters?.docs?.source},description:{story:`Basic command menu with a few items.
Use arrow keys to navigate, Enter to select.`,...S.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    placeholder: 'Type to filter...'
  },
  render: args => html\`
        <cosmoz-command-menu
            .source=\${makeSearchable(searchableItems)}
            ?searchable=\${args.searchable}
            placeholder=\${args.placeholder}
            @select=\${args.onSelect}
        ></cosmoz-command-menu>
    \`,
  play: async ({
    canvas,
    step
  }) => {
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
  }
}`,...k.parameters?.docs?.source},description:{story:"Menu with search input for filtering items.",...k.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-command-menu
            .source=\${groupedItems}
            @select=\${args.onSelect}
        ></cosmoz-command-menu>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders 7 items in 3 groups', async () => {
      const items = await canvas.findAllByShadowRole('menuitem');
      expect(items).toHaveLength(7);
      const groups = canvas.getAllByShadowRole('group');
      expect(groups).toHaveLength(3);
    });
    await step('Groups are labeled Clipboard, Actions, Danger Zone', async () => {
      canvas.getByShadowRole('group', {
        name: 'Clipboard'
      });
      canvas.getByShadowRole('group', {
        name: 'Actions'
      });
      canvas.getByShadowRole('group', {
        name: 'Danger Zone'
      });
    });
  }
}`,...$.parameters?.docs?.source},description:{story:"Items organized into groups with visual separators.",...$.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  render: args => html\`
        <cosmoz-command-menu
            .source=\${makeSearchable(groupedItems)}
            ?searchable=\${args.searchable}
            placeholder=\${args.placeholder}
            @select=\${args.onSelect}
        ></cosmoz-command-menu>
    \`,
  play: async ({
    canvas,
    step
  }) => {
    await step('Renders all 7 grouped items', async () => {
      const items = await canvas.findAllByShadowRole('menuitem');
      expect(items).toHaveLength(7);
    });
    await step('Filtering by "copy" shows 1 item in Clipboard group only', async () => {
      const input = canvas.getByShadowRole('textbox') as HTMLInputElement;
      typeInSearch(input, 'copy');
      await waitFor(async () => {
        const items = await canvas.findAllByShadowRole('menuitem');
        expect(items).toHaveLength(1);
        const groups = canvas.getAllByShadowRole('group');
        expect(groups).toHaveLength(1);
        canvas.getByShadowRole('group', {
          name: 'Clipboard'
        });
      });
    });
  }
}`,...z.parameters?.docs?.source},description:{story:"Groups with search for maximum usability.",...z.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-command-menu
            .source=\${itemsWithDisabled}
            @select=\${args.onSelect}
        ></cosmoz-command-menu>
    \`,
  play: async ({
    canvas,
    args,
    step,
    userEvent
  }) => {
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
  }
}`,...A.parameters?.docs?.source},description:{story:"Some items are disabled and cannot be selected or navigated to.",...A.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  render: args => {
    const asyncSource = (query: string) => new Promise<MenuItem[]>(resolve => setTimeout(() => resolve(searchableItems.filter(item => !query || item.label.toLowerCase().includes(query.toLowerCase()))), 150));
    return html\`
            <cosmoz-command-menu
                .source=\${asyncSource}
                ?searchable=\${args.searchable}
                placeholder="Search (with 150ms delay)..."
                @select=\${args.onSelect}
            ></cosmoz-command-menu>
        \`;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Items load after async delay', async () => {
      await waitFor(async () => {
        const items = await canvas.findAllByShadowRole('menuitem');
        expect(items).toHaveLength(8);
        expect(canvas.queryByShadowText('Loading...')).toBeNull();
      }, {
        timeout: 2000
      });
    });
  }
}`,...B.parameters?.docs?.source},description:{story:`Source can be an async function that returns items.
The menu shows a loading state while waiting.`,...B.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  argTypes: {
    placement: {
      control: 'select',
      options: placementOptions,
      description: 'CSS anchor position-area value. See MDN for all available options.'
    }
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${(args as StoryArgs & {
    placement: string;
  }).placement ?? 'bottom span-right'}>
            <cosmoz-button slot="button">\${filterIcon} Filters</cosmoz-button>
            <cosmoz-command-menu
                .source=\${makeSearchable(filterItems)}
                ?searchable=\${args.searchable}
                placeholder="Filter by..."
                @select=\${args.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    canvas,
    step,
    userEvent
  }) => {
    await step('Open dropdown', async () => {
      const button = canvasElement.querySelector('cosmoz-button[slot="button"]') as HTMLElement;
      await userEvent.click(button);
    });
    await step('Renders 11 items in 3 groups', async () => {
      const items = await canvas.findAllByShadowRole('menuitem');
      expect(items).toHaveLength(11);
      const groups = canvas.getAllByShadowRole('group');
      expect(groups).toHaveLength(3);
      canvas.getByShadowRole('group', {
        name: 'Status'
      });
      canvas.getByShadowRole('group', {
        name: 'Priority'
      });
      canvas.getByShadowRole('group', {
        name: 'Type'
      });
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
  }
}`,...I.parameters?.docs?.source},description:{story:"A filter-style menu with count badges and groups, shown inside a dropdown.",...I.parameters?.docs?.description}}};const Pe=["Basic","WithSearch","WithGroups","WithGroupsAndSearch","WithDisabledItems","AsyncSource","FilterMenu"];export{B as AsyncSource,S as Basic,I as FilterMenu,A as WithDisabledItems,$ as WithGroups,z as WithGroupsAndSearch,k as WithSearch,Pe as __namedExportsOrder,Oe as default};
