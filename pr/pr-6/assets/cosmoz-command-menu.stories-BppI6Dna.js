import{u as j,r as oe,a as ne,K as ae,b as se,c as H,A as f,d as D,e as T,f as r,g as M,h as y,M as re,i as ce,j as ie,k as le,l as de,n as U,m as ue}from"./iframe-De_uWcyD.js";import"./preload-helper-PPVm8Dsz.js";function q(e){return j(()=>({current:e}),[])}const me={CHILD:2},pe=e=>(...t)=>({_$litDirective$:e,values:t});class he{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,n){this._$Ct=t,this._$AM=o,this._$Ci=n}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const R=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(t,!1),R(n,t);return!0},L=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},X=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),fe(t)}};function ge(e){this._$AN!==void 0?(L(this),this._$AM=e,X(this)):this._$AM=e}function we(e,t=!1,o=0){const n=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(n))for(let s=o;s<n.length;s++)R(n[s],!1),L(n[s]);else n!=null&&(R(n,!1),L(n));else R(this,e)}const fe=e=>{e.type==me.CHILD&&(e._$AP??=we,e._$AQ??=ge)};class be extends he{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,n){super._$AT(t,o,n),X(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(R(this,t),L(this))}setValue(t){if(oe(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const z=(e,t)=>{const o=ne(ae),n=se(e);H(()=>o(n),t)},F=new WeakMap,K=pe(class extends be{render(e){return f}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),f}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=F.get(t);o===void 0&&(o=new WeakMap,F.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?F.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ye=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const a of n){const s=a.matches("[autofocus]")?a:a.querySelector("[autofocus]");if(s instanceof HTMLElement){s.focus();break}}},ve=D`
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
`,xe=({placement:e="bottom span-right"})=>{const t=q();return r`
		<slot name="button" @click=${()=>{t.current?.togglePopover()}}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${ye}
			@select=${()=>{t.current?.hidePopover()}}
			${K(a=>{t.current=a})}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",T(xe,{styleSheets:[ve],observedAttributes:["placement"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ce=({items:e,onSelect:t,host:o,itemsContainerRef:n})=>{const[a,s]=M(-1);H(()=>{s(-1)},[e]),H(()=>{if(a<0)return;n.current?.querySelector(`[data-index="${a}"]`)?.scrollIntoView({block:"nearest"})},[a,n]);const c=y((l,v)=>{const b=e.length;if(b===0)return-1;let p=l;p<0&&(p=v===1?-1:b);for(let W=0;W<b;W++)if(p=(p+v+b)%b,!e[p]?.disabled)return p;return-1},[e]),u=y(()=>{s(l=>c(l,1))},[c]),g=y(()=>{s(l=>c(l,-1))},[c]),m=y(()=>{const l=e.findIndex(v=>!v.disabled);s(l)},[e]),w=y(()=>{for(let l=e.length-1;l>=0;l--)if(!e[l].disabled){s(l);return}},[e]),C=y(()=>{if(a>=0&&a<e.length){const l=e[a];l&&!l.disabled&&t(l)}},[e,a,t]);return z({activity:re,callback:u,element:()=>o},[u,o]),z({activity:ce,callback:g,element:()=>o},[g,o]),z({activity:ie,callback:m,element:()=>o},[m,o]),z({activity:le,callback:w,element:()=>o},[w,o]),z({activity:de,callback:C,element:()=>o},[C,o]),{index:a,highlight:y(l=>s(l),[])}},ze=(e,t)=>{if(!e)return Promise.resolve([]);const o=typeof e=="function"?e(t):e;return Promise.resolve(o).then(n=>n??[])},Se=(e,t)=>{const[o,n]=M([]),[a,s]=M(!1),[c,u]=M(null);return H(()=>{let m=!1;return s(!0),u(null),ze(e,t).then(w=>{m||n(w)}).catch(w=>{m||u(w?.message??"Failed to load items")}).finally(()=>{m||s(!1)}),()=>{m=!0}},[e,t]),{items:j(()=>{if(!t.trim())return o;const m=t.toLowerCase();return o.filter(w=>w.label.toLowerCase().includes(m))},[o,t]),loading:a,error:c}},$e=D`
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
`,ke=r`
	<svg class="search-icon" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
			stroke="currentColor"
			stroke-width="1.66667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,Ae=({item:e,index:t,highlightedIndex:o,highlight:n,select:a})=>r`
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
		${e.icon??f}
		<cosmoz-menu-label>${e.label}</cosmoz-menu-label>
		${e.suffix??f}
	</cosmoz-button>
`,Be=({grouped:e,items:t,highlightedIndex:o,highlight:n,select:a})=>{const s=new Map;return t.forEach((c,u)=>s.set(c,u)),Array.from(e.entries()).map(([c,u])=>{const g=u.map(m=>Ae({item:m,index:s.get(m)??-1,highlightedIndex:o,highlight:n,select:a}));return c?r`
				<div class="group" role="group" aria-label=${c}>
					<div class="group-label">${c}</div>
					${g}
				</div>
			`:g})},Ee=e=>{const t=new Map;for(const o of e){const n=o.group||"";t.has(n)||t.set(n,[]),t.get(n).push(o)}return t},Ie=({source:e,searchable:t=!1,placeholder:o="Search..."})=>{const n=ue(),a=q(),[s,c]=M(""),{items:u,loading:g,error:m}=Se(e,s),w=j(()=>Ee(u),[u]),C=y(p=>{n.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{item:p}}))},[n]),{index:l,highlight:v}=Ce({items:u,onSelect:C,host:n,itemsContainerRef:a});H(()=>{n.setAttribute("role","menu")},[n]);const b=u.length>0;return r`
		${t?r`
					<div class="search${g?" loading":""}">
						${ke}
						<input
							class="search-input"
							.value=${s}
							@input=${p=>c(p.target.value)}
							placeholder=${o}
							autofocus
						/>
					</div>
				`:f}

		<div
			class="items"
			${K(p=>{a.current=p})}
		>
			${m?r`<div class="error">${m}</div>`:f}
			${g&&u.length===0?r`<div class="loading-text">Loading...</div>`:f}
			${!g&&!b&&s.trim().length>0?r`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`:f}
			${b?Be({grouped:w,items:u,highlightedIndex:l,highlight:v,select:C}):f}
		</div>
	`};customElements.define("cosmoz-command-menu",T(Ie,{styleSheets:[U,$e],observedAttributes:["searchable","placeholder"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Me=D`
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
`,Re=()=>r`<slot></slot>`;customElements.define("cosmoz-keybinding-badge",T(Re,{styleSheets:[U,Me]}));const He=D`
	:host {
		display: inline-flex;
		flex: 1;
		text-align: left;
		min-width: 0;
	}
`,Le=()=>r`<slot></slot>`;customElements.define("cosmoz-menu-label",T(Le,{styleSheets:[He]}));const O=r`
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
`,P=r`
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
`,Y=r`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,Q=r`
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
`,J=r`
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
`,_e=r`
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
`,De=r`
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
`,Te=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],Oe=[{label:"Copy",value:"copy",icon:O,suffix:i("⌘C")},{label:"Edit",value:"edit",icon:N,suffix:i("⌘E")},{label:"Delete",value:"delete",icon:V,suffix:i("⌘⌫")}],ee=[{label:"Copy",value:"copy",icon:O,suffix:i("⌘C")},{label:"Cut",value:"cut",icon:Q,suffix:i("⌘X")},{label:"Paste",value:"paste",icon:J,suffix:i("⌘V")},{label:"Edit",value:"edit",icon:N,suffix:i("⌘E")},{label:"Delete",value:"delete",icon:V,suffix:i("⌘⌫")},{label:"Duplicate",value:"duplicate",icon:_e,suffix:i("⌘D")},{label:"Share",value:"share",icon:P,suffix:i("⌘⇧S")},{label:"Download",value:"download",icon:Y,suffix:i("⌘⇧D")}],te=[{label:"Copy",value:"copy",group:"Clipboard",icon:O,suffix:i("⌘C")},{label:"Cut",value:"cut",group:"Clipboard",icon:Q,suffix:i("⌘X")},{label:"Paste",value:"paste",group:"Clipboard",icon:J,suffix:i("⌘V")},{label:"Edit",value:"edit",group:"Actions",icon:N,suffix:i("⌘E")},{label:"Share",value:"share",group:"Actions",icon:P,suffix:i("⌘⇧S")},{label:"Download",value:"download",group:"Actions",icon:Y,suffix:i("⌘⇧D")},{label:"Delete",value:"delete",group:"Danger Zone",icon:V,suffix:i("⌘⌫")}],Ne=[{label:"Copy",value:"copy",icon:O,suffix:i("⌘C")},{label:"Edit",value:"edit",icon:N,suffix:i("⌘E"),disabled:!0},{label:"Share",value:"share",icon:P,suffix:i("⌘⇧S")},{label:"Delete",value:"delete",icon:V,suffix:i("⌘⌫"),disabled:!0}],Ve=[{label:"Active",value:"status:active",group:"Status",suffix:h(24)},{label:"Pending",value:"status:pending",group:"Status",suffix:h(12)},{label:"Completed",value:"status:completed",group:"Status",suffix:h(89)},{label:"Archived",value:"status:archived",group:"Status",suffix:h(5)},{label:"Urgent",value:"priority:urgent",group:"Priority",suffix:h(3)},{label:"High",value:"priority:high",group:"Priority",suffix:h(8)},{label:"Medium",value:"priority:medium",group:"Priority",suffix:h(45)},{label:"Low",value:"priority:low",group:"Priority",suffix:h(67)},{label:"Bug",value:"type:bug",group:"Type",suffix:h(15)},{label:"Feature",value:"type:feature",group:"Type",suffix:h(32)},{label:"Task",value:"type:task",group:"Type",suffix:h(78)}],Z=e=>t=>{if(!t.trim())return e;const o=t.toLowerCase();return e.filter(n=>n.label.toLowerCase().includes(o))},{expect:d,fn:Ge,waitFor:G}=__STORYBOOK_MODULE_TEST__,_=(e,t)=>{e.value=t,e.dispatchEvent(new Event("input",{bubbles:!0}))},x=async(e,t)=>{const o=e.querySelector('cosmoz-button[slot="button"]');await t.click(o)},Pe={title:"Cosmoz Command Menu",component:"cosmoz-command-menu",tags:["autodocs"],argTypes:{searchable:{control:"boolean",description:"Show search input"},placeholder:{control:"text",description:"Search input placeholder text"},placement:{control:"select",options:Te,description:"CSS anchor position-area value. See MDN for all available options."},onSelect:{action:"select",description:"Fired when a menu item is selected"}},args:{searchable:!1,placeholder:"Search...",placement:"bottom span-right",onSelect:Ge()}},S={render:e=>r`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=${Oe}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,args:o,step:n,userEvent:a})=>{await n("Open dropdown",async()=>{await x(e,a)}),await n("Renders 3 menu items",async()=>{const s=await t.findAllByShadowRole("menuitem");d(s).toHaveLength(3)}),await n("Clicking an item fires select event",async()=>{const s=await t.findAllByShadowRole("menuitem");await a.click(s[0]),await d(o.onSelect).toHaveBeenCalledOnce()})}},$={args:{searchable:!0,placeholder:"Type to filter..."},render:e=>r`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Search Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=${Z(ee)}
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,step:o,userEvent:n})=>{await o("Open dropdown",async()=>{await x(e,n)}),await o("Renders all 8 items initially",async()=>{const a=await t.findAllByShadowRole("menuitem");d(a).toHaveLength(8)}),await o('Filtering by "copy" shows 1 result',async()=>{const a=t.getByShadowRole("textbox");_(a,"copy"),await G(async()=>{const s=await t.findAllByShadowRole("menuitem");d(s).toHaveLength(1),d(s[0].textContent).toContain("Copy")})}),await o('Non-matching query shows "No results found"',async()=>{const a=t.getByShadowRole("textbox");_(a,"xyznonexistent"),await t.findByShadowText("No results found")})}},k={render:e=>r`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Grouped Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=${te}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,step:o,userEvent:n})=>{await o("Open dropdown",async()=>{await x(e,n)}),await o("Renders 7 items in 3 groups",async()=>{const a=await t.findAllByShadowRole("menuitem");d(a).toHaveLength(7);const s=t.getAllByShadowRole("group");d(s).toHaveLength(3)}),await o("Groups are labeled Clipboard, Actions, Danger Zone",async()=>{t.getByShadowRole("group",{name:"Clipboard"}),t.getByShadowRole("group",{name:"Actions"}),t.getByShadowRole("group",{name:"Danger Zone"})})}},A={args:{searchable:!0},render:e=>r`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Search Groups</cosmoz-button>
            <cosmoz-command-menu
                .source=${Z(te)}
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,step:o,userEvent:n})=>{await o("Open dropdown",async()=>{await x(e,n)}),await o("Renders all 7 grouped items",async()=>{const a=await t.findAllByShadowRole("menuitem");d(a).toHaveLength(7)}),await o('Filtering by "copy" shows 1 item in Clipboard group only',async()=>{const a=t.getByShadowRole("textbox");_(a,"copy"),await G(async()=>{const s=await t.findAllByShadowRole("menuitem");d(s).toHaveLength(1);const c=t.getAllByShadowRole("group");d(c).toHaveLength(1),t.getByShadowRole("group",{name:"Clipboard"})})})}},B={render:e=>r`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Disabled Items</cosmoz-button>
            <cosmoz-command-menu
                .source=${Ne}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,args:o,step:n,userEvent:a})=>{await n("Open dropdown",async()=>{await x(e,a)}),await n("Clicking disabled item does not fire select",async()=>{const s=await t.findAllByShadowRole("menuitem");d(s).toHaveLength(4);const c=s[1];d(c.hasAttribute("disabled")).toBe(!0),await a.click(c),await d(o.onSelect).not.toHaveBeenCalled()}),await n("Clicking enabled item fires select once",async()=>{const c=(await t.findAllByShadowRole("menuitem"))[0];d(c.hasAttribute("disabled")).toBe(!1),await a.click(c),await d(o.onSelect).toHaveBeenCalledOnce()})}},E={args:{searchable:!0},render:e=>{const t=o=>new Promise(n=>setTimeout(()=>n(ee.filter(a=>!o||a.label.toLowerCase().includes(o.toLowerCase()))),150));return r`
            <cosmoz-dropdown-next placement=${e.placement}>
                <cosmoz-button slot="button">Async Menu</cosmoz-button>
                <cosmoz-command-menu
                    .source=${t}
                    ?searchable=${e.searchable}
                    placeholder="Search (with 150ms delay)..."
                    @select=${e.onSelect}
                ></cosmoz-command-menu>
            </cosmoz-dropdown-next>
        `},play:async({canvasElement:e,canvas:t,step:o,userEvent:n})=>{await o("Open dropdown",async()=>{await x(e,n)}),await o("Items load after async delay",async()=>{await G(async()=>{const a=await t.findAllByShadowRole("menuitem");d(a).toHaveLength(8),d(t.queryByShadowText("Loading...")).toBeNull()},{timeout:2e3})})}},I={args:{searchable:!0},render:e=>r`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">${De} Filters</cosmoz-button>
            <cosmoz-command-menu
                .source=${Z(Ve)}
                ?searchable=${e.searchable}
                placeholder="Filter by..."
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,step:o,userEvent:n})=>{await o("Open dropdown",async()=>{await x(e,n)}),await o("Renders 11 items in 3 groups",async()=>{const a=await t.findAllByShadowRole("menuitem");d(a).toHaveLength(11);const s=t.getAllByShadowRole("group");d(s).toHaveLength(3),t.getByShadowRole("group",{name:"Status"}),t.getByShadowRole("group",{name:"Priority"}),t.getByShadowRole("group",{name:"Type"})}),await o('Filtering by "bug" shows 1 item',async()=>{const a=t.getByShadowRole("textbox");_(a,"bug"),await G(async()=>{const s=await t.findAllByShadowRole("menuitem");d(s).toHaveLength(1),d(s[0].textContent).toContain("Bug")})})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=\${basicItems}
                @select=\${args.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    canvas,
    args,
    step,
    userEvent
  }) => {
    await step('Open dropdown', async () => {
      await openDropdown(canvasElement, userEvent);
    });
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
Click the button to open, use arrow keys to navigate.`,...S.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    placeholder: 'Type to filter...'
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Search Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=\${makeSearchable(searchableItems)}
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
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
      await openDropdown(canvasElement, userEvent);
    });
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
}`,...$.parameters?.docs?.source},description:{story:"Menu with search input for filtering items.",...$.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Grouped Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=\${groupedItems}
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
      await openDropdown(canvasElement, userEvent);
    });
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
}`,...k.parameters?.docs?.source},description:{story:"Items organized into groups with visual separators.",...k.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Search Groups</cosmoz-button>
            <cosmoz-command-menu
                .source=\${makeSearchable(groupedItems)}
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
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
      await openDropdown(canvasElement, userEvent);
    });
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
}`,...A.parameters?.docs?.source},description:{story:"Groups with search for maximum usability.",...A.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
            <cosmoz-button slot="button">Disabled Items</cosmoz-button>
            <cosmoz-command-menu
                .source=\${itemsWithDisabled}
                @select=\${args.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    \`,
  play: async ({
    canvasElement,
    canvas,
    args,
    step,
    userEvent
  }) => {
    await step('Open dropdown', async () => {
      await openDropdown(canvasElement, userEvent);
    });
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
}`,...B.parameters?.docs?.source},description:{story:"Some items are disabled and cannot be selected or navigated to.",...B.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  render: args => {
    const asyncSource = (query: string) => new Promise<MenuItem[]>(resolve => setTimeout(() => resolve(searchableItems.filter(item => !query || item.label.toLowerCase().includes(query.toLowerCase()))), 150));
    return html\`
            <cosmoz-dropdown-next placement=\${args.placement}>
                <cosmoz-button slot="button">Async Menu</cosmoz-button>
                <cosmoz-command-menu
                    .source=\${asyncSource}
                    ?searchable=\${args.searchable}
                    placeholder="Search (with 150ms delay)..."
                    @select=\${args.onSelect}
                ></cosmoz-command-menu>
            </cosmoz-dropdown-next>
        \`;
  },
  play: async ({
    canvasElement,
    canvas,
    step,
    userEvent
  }) => {
    await step('Open dropdown', async () => {
      await openDropdown(canvasElement, userEvent);
    });
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
}`,...E.parameters?.docs?.source},description:{story:`Source can be an async function that returns items.
The menu shows a loading state while waiting.`,...E.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  render: args => html\`
        <cosmoz-dropdown-next placement=\${args.placement}>
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
      await openDropdown(canvasElement, userEvent);
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
}`,...I.parameters?.docs?.source},description:{story:"A filter-style menu with count badges and groups.",...I.parameters?.docs?.description}}};const Ze=["Basic","WithSearch","WithGroups","WithGroupsAndSearch","WithDisabledItems","AsyncSource","FilterMenu"];export{E as AsyncSource,S as Basic,I as FilterMenu,B as WithDisabledItems,k as WithGroups,A as WithGroupsAndSearch,$ as WithSearch,Ze as __namedExportsOrder,Pe as default};
