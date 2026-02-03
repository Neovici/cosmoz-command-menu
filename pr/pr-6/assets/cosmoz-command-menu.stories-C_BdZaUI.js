import{u as F,r as te,a as oe,K as ne,b as se,c as _,A as y,d as L,e as D,f as c,g as q,h as x,M as re,i as ae,j as ce,k as le,l as ie,n as P,m as ue}from"./iframe-q67MnVss.js";import"./preload-helper-PPVm8Dsz.js";function Z(e){return F(()=>({current:e}),[])}const me={CHILD:2},de=e=>(...o)=>({_$litDirective$:e,values:o});class pe{constructor(o){}get _$AU(){return this._$AM._$AU}_$AT(o,t,n){this._$Ct=o,this._$AM=t,this._$Ci=n}_$AS(o,t){return this.update(o,t)}update(o,t){return this.render(...t)}}const B=(e,o)=>{const t=e._$AN;if(t===void 0)return!1;for(const n of t)n._$AO?.(o,!1),B(n,o);return!0},T=e=>{let o,t;do{if((o=e._$AM)===void 0)break;t=o._$AN,t.delete(e),e=o}while(t?.size===0)},U=e=>{for(let o;o=e._$AM;e=o){let t=o._$AN;if(t===void 0)o._$AN=t=new Set;else if(t.has(e))break;t.add(e),ge(o)}};function he(e){this._$AN!==void 0?(T(this),this._$AM=e,U(this)):this._$AM=e}function be(e,o=!1,t=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(o)if(Array.isArray(n))for(let r=t;r<n.length;r++)B(n[r],!1),T(n[r]);else n!=null&&(B(n,!1),T(n));else B(this,e)}const ge=e=>{e.type==me.CHILD&&(e._$AP??=be,e._$AQ??=he)};class fe extends pe{constructor(){super(...arguments),this._$AN=void 0}_$AT(o,t,n){super._$AT(o,t,n),U(this),this.isConnected=o._$AU}_$AO(o,t=!0){o!==this.isConnected&&(this.isConnected=o,o?this.reconnected?.():this.disconnected?.()),t&&(B(this,o),T(this))}setValue(o){if(te(this._$Ct))this._$Ct._$AI(o,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=o,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const w=(e,o)=>{const t=oe(ne),n=se(e);_(()=>t(n),o)},R=new WeakMap,X=de(class extends fe{render(e){return y}update(e,[o]){const t=o!==this.G;return t&&this.G!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.G=o,this.ht=e.options?.host,this.rt(this.ct=e.element)),y}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const o=this.ht??globalThis;let t=R.get(o);t===void 0&&(t=new WeakMap,R.set(o,t)),t.get(this.G)!==void 0&&this.G.call(this.ht,void 0),t.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?R.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),ye=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const r=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},ve=L`
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
`,xe=({placement:e="bottom span-right"})=>{const o=Z();return c`
		<slot name="button" @click=${()=>{o.current?.togglePopover()}}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${ye}
			@select=${()=>{o.current?.hidePopover()}}
			${X(s=>{o.current=s})}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",D(xe,{styleSheets:[ve],observedAttributes:["placement"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ce=({items:e,onSelect:o,host:t,itemsContainerRef:n})=>{const[s,r]=q(-1);_(()=>{r(-1)},[e]),_(()=>{if(s<0)return;n.current?.querySelector(`[data-index="${s}"]`)?.scrollIntoView({block:"nearest"})},[s,n]);const m=x((i,C)=>{const v=e.length;if(v===0)return-1;let h=i;h<0&&(h=C===1?-1:v);for(let O=0;O<v;O++)if(h=(h+C+v)%v,!e[h]?.disabled)return h;return-1},[e]),u=x(()=>{r(i=>m(i,1))},[m]),p=x(()=>{r(i=>m(i,-1))},[m]),d=x(()=>{const i=e.findIndex(C=>!C.disabled);r(i)},[e]),f=x(()=>{for(let i=e.length-1;i>=0;i--)if(!e[i].disabled){r(i);return}},[e]),z=x(()=>{if(s>=0&&s<e.length){const i=e[s];i&&!i.disabled&&o(i)}},[e,s,o]);return w({activity:re,callback:u,element:()=>t},[u,t]),w({activity:ae,callback:p,element:()=>t},[p,t]),w({activity:ce,callback:d,element:()=>t},[d,t]),w({activity:le,callback:f,element:()=>t},[f,t]),w({activity:ie,callback:z,element:()=>t},[z,t]),{index:s,highlight:x(i=>r(i),[])}},ze=(e,o)=>{if(!e)return Promise.resolve([]);const t=typeof e=="function"?e(o):e;return Promise.resolve(t).then(n=>n??[])},we=(e,o)=>{const[t,n]=q([]),[s,r]=q(!1),[m,u]=q(null);return _(()=>{let d=!1;return r(!0),u(null),ze(e,o).then(f=>{d||n(f)}).catch(f=>{d||u(f?.message??"Failed to load items")}).finally(()=>{d||r(!1)}),()=>{d=!0}},[e,o]),{items:F(()=>{if(!o.trim())return t;const d=o.toLowerCase();return t.filter(f=>f.label.toLowerCase().includes(d))},[t,o]),loading:s,error:m}},Se=L`
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
		height: 2px;
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
		opacity: 1;
		animation: shimmer 1.5s infinite linear;
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

	.loading {
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
`,$e=c`
	<svg class="search-icon" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
			stroke="currentColor"
			stroke-width="1.66667"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,ke=({item:e,index:o,highlightedIndex:t,highlight:n,select:s})=>c`
	<cosmoz-button
		variant="tertiary"
		full-width
		role="menuitem"
		?disabled=${e.disabled}
		?data-highlighted=${o===t}
		data-index=${o}
		@mouseenter=${()=>n(o)}
		@click=${()=>!e.disabled&&s(e)}
		@mousedown=${r=>r.preventDefault()}
	>
		${e.icon??y}
		<cosmoz-menu-label>${e.label}</cosmoz-menu-label>
		${e.suffix??y}
	</cosmoz-button>
`,Ae=({grouped:e,items:o,highlightedIndex:t,highlight:n,select:s})=>{const r=new Map;return o.forEach((m,u)=>r.set(m,u)),Array.from(e.entries()).map(([m,u])=>{const p=u.map(d=>ke({item:d,index:r.get(d)??-1,highlightedIndex:t,highlight:n,select:s}));return m?c`
				<div class="group">
					<div class="group-label">${m}</div>
					${p}
				</div>
			`:p})},Me=e=>{const o=new Map;for(const t of e){const n=t.group||"";o.has(n)||o.set(n,[]),o.get(n).push(t)}return o},Ee=({source:e,searchable:o=!1,placeholder:t="Search..."})=>{const n=ue(),s=Z(),[r,m]=q(""),{items:u,loading:p,error:d}=we(e,r),f=F(()=>Me(u),[u]),z=x(h=>{n.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{item:h}}))},[n]),{index:i,highlight:C}=Ce({items:u,onSelect:z,host:n,itemsContainerRef:s});_(()=>{n.setAttribute("role","menu")},[n]);const v=u.length>0;return c`
		${o?c`
					<div class="search${p?" loading":""}">
						${$e}
						<input
							class="search-input"
							.value=${r}
							@input=${h=>m(h.target.value)}
							placeholder=${t}
							autofocus
						/>
					</div>
				`:y}

		<div
			class="items"
			${X(h=>{s.current=h})}
		>
			${d?c`<div class="error">${d}</div>`:y}
			${p&&u.length===0?c`<div class="loading">Loading...</div>`:y}
			${!p&&!v&&r.trim().length>0?c`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`:y}
			${v?Ae({grouped:f,items:u,highlightedIndex:i,highlight:C,select:z}):y}
		</div>
	`};customElements.define("cosmoz-command-menu",D(Ee,{styleSheets:[P,Se],observedAttributes:["searchable","placeholder"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ie=L`
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
`,qe=()=>c`<slot></slot>`;customElements.define("cosmoz-keybinding-badge",D(qe,{styleSheets:[P,Ie]}));const Be=L`
	:host {
		display: inline-flex;
		flex: 1;
		text-align: left;
		min-width: 0;
	}
`,_e=()=>c`<slot></slot>`;customElements.define("cosmoz-menu-label",D(_e,{styleSheets:[Be]}));const V=c`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path d="M4.16667 12.5H3.33333C2.89131 12.5 2.46738 12.3244 2.15482 12.0118C1.84226 11.6993 1.66667 11.2754 1.66667 10.8333V3.33333C1.66667 2.89131 1.84226 2.46738 2.15482 2.15482C2.46738 1.84226 2.89131 1.66667 3.33333 1.66667H10.8333C11.2754 1.66667 11.6993 1.84226 12.0118 2.15482C12.3244 2.46738 12.5 2.89131 12.5 3.33333V4.16667M9.16667 7.5H16.6667C17.5871 7.5 18.3333 8.24619 18.3333 9.16667V16.6667C18.3333 17.5871 17.5871 18.3333 16.6667 18.3333H9.16667C8.24619 18.3333 7.5 17.5871 7.5 16.6667V9.16667C7.5 8.24619 8.24619 7.5 9.16667 7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
`,G=c`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M14.1667 2.5C14.3856 2.28113 14.6454 2.10752 14.9314 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26465C18.1294 3.55059 18.1904 3.85706 18.1904 4.16667C18.1904 4.47627 18.1294 4.78275 18.0109 5.06868C17.8925 5.35462 17.7189 5.61446 17.5 5.83333L6.25 17.0833L1.66667 18.3333L2.91667 13.75L14.1667 2.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,N=c`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M2.5 5H4.16667H17.5M15.8333 5V16.6667C15.8333 17.1087 15.6577 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83333C5.39131 18.3333 4.96738 18.1577 4.65482 17.8452C4.34226 17.5326 4.16667 17.1087 4.16667 16.6667V5M6.66667 5V3.33333C6.66667 2.89131 6.84226 2.46738 7.15482 2.15482C7.46738 1.84226 7.89131 1.66667 8.33333 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1577 2.46738 13.3333 2.89131 13.3333 3.33333V5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,j=c`
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
`,K=c`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,Y=c`
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
`,Q=c`
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
`,Te=c`
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
`,He=c`
	<svg slot="prefix" viewBox="0 0 20 20" fill="none">
		<path
			d="M18.3333 2.5H1.66667L8.33333 10.3833V15.8333L11.6667 17.5V10.3833L18.3333 2.5Z"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`,l=e=>c`
	<cosmoz-keybinding-badge>${e}</cosmoz-keybinding-badge>
`,b=e=>c`
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
`,Le=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],De=[{label:"Copy",value:"copy",icon:V,suffix:l("⌘C")},{label:"Edit",value:"edit",icon:G,suffix:l("⌘E")},{label:"Delete",value:"delete",icon:N,suffix:l("⌘⌫")}],J=[{label:"Copy",value:"copy",icon:V,suffix:l("⌘C")},{label:"Cut",value:"cut",icon:Y,suffix:l("⌘X")},{label:"Paste",value:"paste",icon:Q,suffix:l("⌘V")},{label:"Edit",value:"edit",icon:G,suffix:l("⌘E")},{label:"Delete",value:"delete",icon:N,suffix:l("⌘⌫")},{label:"Duplicate",value:"duplicate",icon:Te,suffix:l("⌘D")},{label:"Share",value:"share",icon:j,suffix:l("⌘⇧S")},{label:"Download",value:"download",icon:K,suffix:l("⌘⇧D")}],ee=[{label:"Copy",value:"copy",group:"Clipboard",icon:V,suffix:l("⌘C")},{label:"Cut",value:"cut",group:"Clipboard",icon:Y,suffix:l("⌘X")},{label:"Paste",value:"paste",group:"Clipboard",icon:Q,suffix:l("⌘V")},{label:"Edit",value:"edit",group:"Actions",icon:G,suffix:l("⌘E")},{label:"Share",value:"share",group:"Actions",icon:j,suffix:l("⌘⇧S")},{label:"Download",value:"download",group:"Actions",icon:K,suffix:l("⌘⇧D")},{label:"Delete",value:"delete",group:"Danger Zone",icon:N,suffix:l("⌘⌫")}],Ve=[{label:"Copy",value:"copy",icon:V,suffix:l("⌘C")},{label:"Edit",value:"edit",icon:G,suffix:l("⌘E"),disabled:!0},{label:"Share",value:"share",icon:j,suffix:l("⌘⇧S")},{label:"Delete",value:"delete",icon:N,suffix:l("⌘⌫"),disabled:!0}],Ge=[{label:"Active",value:"status:active",group:"Status",suffix:b(24)},{label:"Pending",value:"status:pending",group:"Status",suffix:b(12)},{label:"Completed",value:"status:completed",group:"Status",suffix:b(89)},{label:"Archived",value:"status:archived",group:"Status",suffix:b(5)},{label:"Urgent",value:"priority:urgent",group:"Priority",suffix:b(3)},{label:"High",value:"priority:high",group:"Priority",suffix:b(8)},{label:"Medium",value:"priority:medium",group:"Priority",suffix:b(45)},{label:"Low",value:"priority:low",group:"Priority",suffix:b(67)},{label:"Bug",value:"type:bug",group:"Type",suffix:b(15)},{label:"Feature",value:"type:feature",group:"Type",suffix:b(32)},{label:"Task",value:"type:task",group:"Type",suffix:b(78)}],W=e=>o=>{if(!o.trim())return e;const t=o.toLowerCase();return e.filter(n=>n.label.toLowerCase().includes(t))},{expect:a,fn:Ne,waitFor:g}=__STORYBOOK_MODULE_TEST__,H=(e,o)=>{e.value=o,e.dispatchEvent(new Event("input",{bubbles:!0}))},je={title:"Cosmoz Command Menu",component:"cosmoz-command-menu",tags:["autodocs"],argTypes:{searchable:{control:"boolean",description:"Show search input"},placeholder:{control:"text",description:"Search input placeholder text"},placement:{control:"select",options:Le,description:"CSS anchor position-area value. See MDN for all available options."},onSelect:{action:"select",description:"Fired when a menu item is selected"}},args:{searchable:!1,placeholder:"Search...",placement:"bottom span-right",onSelect:Ne()}},S={render:e=>c`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Open Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=${De}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,args:o,userEvent:t})=>{const n=e.querySelector("cosmoz-command-menu");await g(()=>{const r=n.shadowRoot.querySelectorAll('cosmoz-button[role="menuitem"]');a(r.length).toBe(3)});const s=n.shadowRoot.querySelector('cosmoz-button[role="menuitem"]');await t.click(s),await a(o.onSelect).toHaveBeenCalledOnce()}},$={args:{searchable:!0,placeholder:"Type to filter..."},render:e=>c`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Search Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=${W(J)}
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-command-menu").shadowRoot;await g(()=>{const s=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(s.length).toBe(8)});const n=t.querySelector(".search-input");a(n).toBeTruthy(),H(n,"copy"),await g(()=>{const s=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(s.length).toBe(1),a(s[0].textContent).toContain("Copy")}),H(n,"xyznonexistent"),await g(()=>{const s=t.querySelector(".no-results");a(s).toBeTruthy(),a(s.textContent).toContain("No results found")})}},k={render:e=>c`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Grouped Menu</cosmoz-button>
            <cosmoz-command-menu
                .source=${ee}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-command-menu").shadowRoot;await g(()=>{const r=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(r.length).toBe(7)});const n=t.querySelectorAll(".group");a(n.length).toBe(3);const s=t.querySelectorAll(".group-label");a(s.length).toBe(3),a(s[0].textContent).toContain("Clipboard"),a(s[1].textContent).toContain("Actions"),a(s[2].textContent).toContain("Danger Zone")}},A={args:{searchable:!0},render:e=>c`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Search Groups</cosmoz-button>
            <cosmoz-command-menu
                .source=${W(ee)}
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-command-menu").shadowRoot;await g(()=>{const s=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(s.length).toBe(7)});const n=t.querySelector(".search-input");H(n,"copy"),await g(()=>{const s=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(s.length).toBe(1);const r=t.querySelectorAll(".group");a(r.length).toBe(1),a(r[0].querySelector(".group-label").textContent).toContain("Clipboard")})}},M={render:e=>c`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">Disabled Items</cosmoz-button>
            <cosmoz-command-menu
                .source=${Ve}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,args:o,userEvent:t})=>{const s=e.querySelector("cosmoz-command-menu").shadowRoot;await g(()=>{const p=s.querySelectorAll('cosmoz-button[role="menuitem"]');a(p.length).toBe(4)});const r=s.querySelectorAll('cosmoz-button[role="menuitem"]'),m=r[1];a(m.hasAttribute("disabled")).toBe(!0),await t.click(m),await a(o.onSelect).not.toHaveBeenCalled();const u=r[0];a(u.hasAttribute("disabled")).toBe(!1),await t.click(u),await a(o.onSelect).toHaveBeenCalledOnce()}},E={args:{searchable:!0},render:e=>{const o=t=>new Promise(n=>setTimeout(()=>n(J.filter(s=>!t||s.label.toLowerCase().includes(t.toLowerCase()))),150));return c`
            <cosmoz-dropdown-next placement=${e.placement}>
                <cosmoz-button slot="button">Async Menu</cosmoz-button>
                <cosmoz-command-menu
                    .source=${o}
                    ?searchable=${e.searchable}
                    placeholder="Search (with 150ms delay)..."
                    @select=${e.onSelect}
                ></cosmoz-command-menu>
            </cosmoz-dropdown-next>
        `},play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-command-menu").shadowRoot;await g(()=>{const n=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(n.length).toBe(8),a(t.querySelector(".loading")).toBeNull()},{timeout:2e3})}},I={args:{searchable:!0},render:e=>c`
        <cosmoz-dropdown-next placement=${e.placement}>
            <cosmoz-button slot="button">${He} Filters</cosmoz-button>
            <cosmoz-command-menu
                .source=${W(Ge)}
                ?searchable=${e.searchable}
                placeholder="Filter by..."
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e})=>{const t=e.querySelector("cosmoz-command-menu").shadowRoot;await g(()=>{const r=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(r.length).toBe(11)});const n=t.querySelectorAll(".group-label");a(n.length).toBe(3),a(n[0].textContent).toContain("Status"),a(n[1].textContent).toContain("Priority"),a(n[2].textContent).toContain("Type");const s=t.querySelector(".search-input");H(s,"bug"),await g(()=>{const r=t.querySelectorAll('cosmoz-button[role="menuitem"]');a(r.length).toBe(1),a(r[0].textContent).toContain("Bug")})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    args,
    userEvent
  }) => {
    const menu = canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;

    // Wait for items to render in shadow DOM
    await waitFor(() => {
      const items = menu.shadowRoot!.querySelectorAll('cosmoz-button[role="menuitem"]');
      expect(items.length).toBe(3);
    });

    // Click the first item
    const firstItem = menu.shadowRoot!.querySelector('cosmoz-button[role="menuitem"]') as HTMLElement;
    await userEvent.click(firstItem);

    // Verify select event fired
    await expect(args.onSelect).toHaveBeenCalledOnce();
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
    canvasElement
  }) => {
    const menu = canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
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
    canvasElement
  }) => {
    const menu = canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
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
    canvasElement
  }) => {
    const menu = canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
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
      expect(groups[0].querySelector('.group-label')!.textContent).toContain('Clipboard');
    });
  }
}`,...A.parameters?.docs?.source},description:{story:"Groups with search for maximum usability.",...A.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
    args,
    userEvent
  }) => {
    const menu = canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
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
  }
}`,...M.parameters?.docs?.source},description:{story:"Some items are disabled and cannot be selected or navigated to.",...M.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    canvasElement
  }) => {
    const menu = canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
    const root = menu.shadowRoot!;

    // After async resolution, items should render and loading should disappear
    await waitFor(() => {
      const items = root.querySelectorAll('cosmoz-button[role="menuitem"]');
      expect(items.length).toBe(8);
      expect(root.querySelector('.loading')).toBeNull();
    }, {
      timeout: 2000
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
    canvasElement
  }) => {
    const menu = canvasElement.querySelector('cosmoz-command-menu') as HTMLElement;
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
  }
}`,...I.parameters?.docs?.source},description:{story:"A filter-style menu with count badges and groups.",...I.parameters?.docs?.description}}};const We=["Basic","WithSearch","WithGroups","WithGroupsAndSearch","WithDisabledItems","AsyncSource","FilterMenu"];export{E as AsyncSource,S as Basic,I as FilterMenu,M as WithDisabledItems,k as WithGroups,A as WithGroupsAndSearch,$ as WithSearch,We as __namedExportsOrder,je as default};
