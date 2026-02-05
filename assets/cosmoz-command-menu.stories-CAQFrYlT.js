import{u as q,r as de,a as me,K as ue,b as pe,c as F,A as f,d as Y,e as Z,f as i,w as b,g as $,h as D,M as he,i as ge,j as we,k as ye,l as fe,n as J,m as be}from"./iframe-DtmJBT9h.js";import"./preload-helper-PPVm8Dsz.js";function ee(e){return q(()=>({current:e}),[])}const ve={CHILD:2},$e=e=>(...t)=>({_$litDirective$:e,values:t});class xe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,n){this._$Ct=t,this._$AM=o,this._$Ci=n}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}const N=(e,t)=>{const o=e._$AN;if(o===void 0)return!1;for(const n of o)n._$AO?.(t,!1),N(n,t);return!0},P=e=>{let t,o;do{if((t=e._$AM)===void 0)break;o=t._$AN,o.delete(e),e=t}while(o?.size===0)},te=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(o===void 0)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),Ce(t)}};function Se(e){this._$AN!==void 0?(P(this),this._$AM=e,te(this)):this._$AM=e}function Ae(e,t=!1,o=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(n))for(let a=o;a<n.length;a++)N(n[a],!1),P(n[a]);else n!=null&&(N(n,!1),P(n));else N(this,e)}const Ce=e=>{e.type==ve.CHILD&&(e._$AP??=Ae,e._$AQ??=Se)};class ze extends xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,o,n){super._$AT(t,o,n),te(this),this.isConnected=t._$AU}_$AO(t,o=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),o&&(N(this,t),P(this))}setValue(t){if(de(this._$Ct))this._$Ct._$AI(t,this);else{const o=[...this._$Ct._$AH];o[this._$Ci]=t,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}}const B=(e,t)=>{const o=me(ue),n=pe(e);F(()=>o(n),t)},W=new WeakMap,oe=$e(class extends ze{render(e){return f}update(e,[t]){const o=t!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),f}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let o=W.get(t);o===void 0&&(o=new WeakMap,W.set(t,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?W.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Be=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const s of n){const a=s.matches("[autofocus]")?s:s.querySelector("[autofocus]");if(a instanceof HTMLElement){a.focus();break}}},ke=Y`
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
`,Re=({placement:e="bottom span-right"})=>{const t=ee();return i`
		<slot name="button" @click=${()=>{t.current?.togglePopover()}}></slot>
		<div
			popover
			style="position-area: ${e}"
			@toggle=${Be}
			@select=${()=>{t.current?.hidePopover()}}
			${oe(s=>{t.current=s})}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",Z(Re,{styleSheets:[ke],observedAttributes:["placement"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const m=e=>e??f;function v(e,t,o){return e?t(e):o?.(e)}const Ie=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`clipboard-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M16 4c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C20 6.605 20 7.07 20 8v9.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C6.605 4 7.07 4 8 4m1.6 2h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C16 5.24 16 4.96 16 4.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 2 14.96 2 14.4 2H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 2.76 8 3.04 8 3.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C8.76 6 9.04 6 9.6 6Z"
    />
  </svg>
`,Me=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`copy-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M5 15c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 13.398 2 12.932 2 12V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 2 4.08 2 5.2 2H12c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 3.602 15 4.068 15 5m-2.8 17h6.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-6.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 9 19.92 9 18.8 9h-6.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C9 10.52 9 11.08 9 12.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C10.52 22 11.08 22 12.2 22Z"
    />
  </svg>
`,Ee=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`copy-05-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M8 16v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.52 22 10.08 22 11.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 8 19.92 8 18.8 8H16M5.2 16h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 14.48 16 13.92 16 12.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 16 4.08 16 5.2 16Z"
    />
  </svg>
`,He=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`download-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-5-5 5m0 0-5-5m5 5V3"
    />
  </svg>
`,Le=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`edit-02-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="m18 10-4-4M2.5 21.5l3.384-.376c.414-.046.62-.069.814-.131a2 2 0 0 0 .485-.234c.17-.111.317-.259.61-.553L21 7a2.828 2.828 0 1 0-4-4L3.794 16.206c-.294.294-.442.442-.553.611a2 2 0 0 0-.234.485c-.062.193-.085.4-.131.814L2.5 21.5Z"
    />
  </svg>
`,_e=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`filter-funnel-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M2 4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C2.76 3 3.04 3 3.6 3h16.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C22 3.76 22 4.04 22 4.6v.67c0 .268 0 .403-.033.528-.029.11-.077.215-.141.31-.073.106-.175.194-.378.37l-6.396 5.543c-.203.176-.305.265-.377.371-.065.095-.113.2-.142.31-.033.125-.033.26-.033.529v5.227c0 .196 0 .294-.031.378a.5.5 0 0 1-.133.196c-.066.06-.157.096-.339.17l-3.4 1.36c-.367.146-.551.22-.699.189a.5.5 0 0 1-.315-.213c-.083-.126-.083-.324-.083-.72v-6.587c0-.27 0-.404-.033-.529a1.001 1.001 0 0 0-.141-.31c-.073-.106-.175-.194-.378-.37L2.552 6.478c-.203-.177-.305-.265-.378-.371a1 1 0 0 1-.141-.31C2 5.673 2 5.538 2 5.269V4.6Z"
    />
  </svg>
`,Te=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`scissors-cut-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M20 4 8.5 15.5m0-7L20 20m-2.5-8h.01M22 12h.01M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
    />
  </svg>
`,De=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`search-sm-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
  </svg>
`,Ne=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`share-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M21 12v4.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V12m13-5-4-4m0 0L8 7m4-4v12"
    />
  </svg>
`,Fe=({slot:e,title:t,className:o,width:n="24",height:s="24",styles:a}={})=>i`
  <svg
    slot=${m(e)}
    class=${`trash-01-icon ${o??""}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${n}
    height=${s}
    style=${m(a)}
  >
    ${v(t,()=>b`<title>${t}</title>`)}
    <path
      d="M16 6v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 2 13.92 2 12.8 2h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C8 3.52 8 4.08 8 5.2V6m2 5.5v5m4-5v5M3 6h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C16.72 22 15.88 22 14.2 22H9.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C5 19.72 5 18.88 5 17.2V6"
    />
  </svg>
`,Ge=({items:e,onSelect:t,host:o,itemsContainerRef:n})=>{const s=$(()=>{const l=document.activeElement;return l!=null&&(o.contains(l)||l.contains(o))},[o]),[a,c]=D(-1);F(()=>{c(-1)},[e]),F(()=>{if(a<0)return;n.current?.querySelector(`[data-index="${a}"]`)?.scrollIntoView({block:"nearest"})},[a,n]);const u=$((l,A)=>{const h=e.length;if(h===0)return-1;let C=l;C<0&&(C=A===1?-1:h);for(let Q=0;Q<h;Q++)if(C=(C+A+h)%h,!e[C]?.disabled)return C;return-1},[e]),w=$(()=>{c(l=>u(l,1))},[u]),p=$(()=>{c(l=>u(l,-1))},[u]),y=$(()=>{const l=e.findIndex(A=>!A.disabled);c(l)},[e]),z=$(()=>{for(let l=e.length-1;l>=0;l--)if(!e[l].disabled){c(l);return}},[e]),O=$(()=>{if(a>=0&&a<e.length){const l=e[a];l&&!l.disabled&&t(l)}},[e,a,t]);return B({activity:he,callback:w,element:()=>o,check:s},[w,o,s]),B({activity:ge,callback:p,element:()=>o,check:s},[p,o,s]),B({activity:we,callback:y,element:()=>o,check:s},[y,o,s]),B({activity:ye,callback:z,element:()=>o,check:s},[z,o,s]),B({activity:fe,callback:O,element:()=>o,check:s},[O,o,s]),{index:a,highlight:$(l=>c(l),[])}},Oe=(e,t)=>{if(!e)return Promise.resolve([]);const o=typeof e=="function"?e(t):e;return Promise.resolve(o).then(n=>n??[])},Pe=(e,t)=>{const[o,n]=D([]),[s,a]=D(!1),[c,u]=D(null);return F(()=>{let p=!1;return a(!0),u(null),Oe(e,t).then(y=>{p||n(y)}).catch(y=>{p||u(y?.message??"Failed to load items")}).finally(()=>{p||a(!1)}),()=>{p=!0}},[e,t]),{items:q(()=>{if(!t.trim())return o;const p=t.toLowerCase();return o.filter(y=>y.label.toLowerCase().includes(p))},[o,t]),loading:s,error:c}},Ue=Y`
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
		opacity: 1;
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

	.label {
		display: inline-flex;
		flex: 1;
		text-align: left;
		min-width: 0;
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
`,Ve=De({className:"search-icon"}),je=({item:e,index:t,highlightedIndex:o,highlight:n,select:s})=>i`
	<cosmoz-button
		variant="tertiary"
		full-width
		role="menuitem"
		?disabled=${e.disabled}
		?data-highlighted=${t===o}
		data-index=${t}
		@mouseenter=${()=>n(t)}
		@click=${()=>!e.disabled&&s(e)}
		@mousedown=${a=>a.preventDefault()}
	>
		${e.icon??f}
		<span class="label">${e.label}</span>
		${e.suffix??f}
	</cosmoz-button>
`,We=({grouped:e,items:t,highlightedIndex:o,highlight:n,select:s})=>{const a=new Map;return t.forEach((c,u)=>a.set(c,u)),Array.from(e.entries()).map(([c,u])=>{const w=u.map(p=>je({item:p,index:a.get(p)??-1,highlightedIndex:o,highlight:n,select:s}));return c?i`
				<div class="group" role="group" aria-label=${c}>
					<div class="group-label">${c}</div>
					${w}
				</div>
			`:w})},qe=e=>{const t=new Map;for(const o of e){const n=o.group||"";t.has(n)||t.set(n,[]),t.get(n).push(o)}return t},Ye=({source:e,searchable:t=!1,placeholder:o="Search..."})=>{const n=be(),s=ee(),[a,c]=D(""),{items:u,loading:w,error:p}=Pe(e,a),y=q(()=>qe(u),[u]),z=$(h=>{n.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{item:h}}))},[n]),{index:O,highlight:l}=Ge({items:u,onSelect:z,host:n,itemsContainerRef:s});F(()=>{n.setAttribute("role","menu")},[n]);const A=u.length>0;return i`
		${t?i`
					<div class="search${w?" loading":""}">
						${Ve}
						<input
							class="search-input"
							.value=${a}
							@input=${h=>c(h.target.value)}
							placeholder=${o}
							autofocus
						/>
					</div>
				`:f}

		<div
			class="items"
			${oe(h=>{s.current=h})}
		>
			${p?i`<div class="error">${p}</div>`:f}
			${w&&u.length===0?i`<div class="loading-text">Loading...</div>`:f}
			${!w&&!A&&a.trim().length>0?i`
						<slot name="no-results">
							<div class="no-results">No results found</div>
						</slot>
					`:f}
			${A?We({grouped:y,items:u,highlightedIndex:O,highlight:l,select:z}):f}
		</div>
	`};customElements.define("cosmoz-command-menu",Z(Ye,{styleSheets:[J,Ue],observedAttributes:["searchable","placeholder"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));const Ze=Y`
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
`,Xe=()=>i`<slot></slot>`;customElements.define("cosmoz-keybinding-badge",Z(Xe,{styleSheets:[J,Ze]}));const S="prefix",U=Me({slot:S}),V=Le({slot:S}),j=Fe({slot:S}),X=Ne({slot:S}),ne=He({slot:S}),ae=Te({slot:S}),se=Ie({slot:S}),Ke=Ee({slot:S}),Qe=_e({slot:S}),d=e=>i`
	<cosmoz-keybinding-badge>${e}</cosmoz-keybinding-badge>
`,g=e=>i`
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
`,re=["bottom span-right","bottom span-left","bottom","top span-right","top span-left","top","right span-bottom","right span-top","right","left span-bottom","left span-top","left","bottom center","top center","center"],ie=[{label:"Copy",value:"copy",icon:U,suffix:d("⌘C")},{label:"Edit",value:"edit",icon:V,suffix:d("⌘E")},{label:"Delete",value:"delete",icon:j,suffix:d("⌘⌫")}],ce=[{label:"Copy",value:"copy",icon:U,suffix:d("⌘C")},{label:"Cut",value:"cut",icon:ae,suffix:d("⌘X")},{label:"Paste",value:"paste",icon:se,suffix:d("⌘V")},{label:"Edit",value:"edit",icon:V,suffix:d("⌘E")},{label:"Delete",value:"delete",icon:j,suffix:d("⌘⌫")},{label:"Duplicate",value:"duplicate",icon:Ke,suffix:d("⌘D")},{label:"Share",value:"share",icon:X,suffix:d("⌘⇧S")},{label:"Download",value:"download",icon:ne,suffix:d("⌘⇧D")}],le=[{label:"Copy",value:"copy",group:"Clipboard",icon:U,suffix:d("⌘C")},{label:"Cut",value:"cut",group:"Clipboard",icon:ae,suffix:d("⌘X")},{label:"Paste",value:"paste",group:"Clipboard",icon:se,suffix:d("⌘V")},{label:"Edit",value:"edit",group:"Actions",icon:V,suffix:d("⌘E")},{label:"Share",value:"share",group:"Actions",icon:X,suffix:d("⌘⇧S")},{label:"Download",value:"download",group:"Actions",icon:ne,suffix:d("⌘⇧D")},{label:"Delete",value:"delete",group:"Danger Zone",icon:j,suffix:d("⌘⌫")}],Je=[{label:"Copy",value:"copy",icon:U,suffix:d("⌘C")},{label:"Edit",value:"edit",icon:V,suffix:d("⌘E"),disabled:!0},{label:"Share",value:"share",icon:X,suffix:d("⌘⇧S")},{label:"Delete",value:"delete",icon:j,suffix:d("⌘⌫"),disabled:!0}],et=[{label:"Active",value:"status:active",group:"Status",suffix:g(24)},{label:"Pending",value:"status:pending",group:"Status",suffix:g(12)},{label:"Completed",value:"status:completed",group:"Status",suffix:g(89)},{label:"Archived",value:"status:archived",group:"Status",suffix:g(5)},{label:"Urgent",value:"priority:urgent",group:"Priority",suffix:g(3)},{label:"High",value:"priority:high",group:"Priority",suffix:g(8)},{label:"Medium",value:"priority:medium",group:"Priority",suffix:g(45)},{label:"Low",value:"priority:low",group:"Priority",suffix:g(67)},{label:"Bug",value:"type:bug",group:"Type",suffix:g(15)},{label:"Feature",value:"type:feature",group:"Type",suffix:g(32)},{label:"Task",value:"type:task",group:"Type",suffix:g(78)}],K=e=>t=>{if(!t.trim())return e;const o=t.toLowerCase();return e.filter(n=>n.label.toLowerCase().includes(o))},{expect:r,fn:tt,waitFor:x}=__STORYBOOK_MODULE_TEST__,G=(e,t)=>{e.value=t,e.dispatchEvent(new Event("input",{bubbles:!0}))},at={title:"Cosmoz Command Menu",component:"cosmoz-command-menu",tags:["autodocs"],argTypes:{searchable:{control:"boolean",description:"Show search input"},placeholder:{control:"text",description:"Search input placeholder text"},onSelect:{action:"select",description:"Fired when a menu item is selected"}},args:{searchable:!1,placeholder:"Search...",onSelect:tt()}},k={render:e=>i`
        <cosmoz-command-menu
            .source=${ie}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,args:t,step:o,userEvent:n})=>{await o("Renders 3 menu items",async()=>{const s=await e.findAllByShadowRole("menuitem");r(s).toHaveLength(3)}),await o("Clicking an item fires select event",async()=>{const s=await e.findAllByShadowRole("menuitem");await n.click(s[0]),await r(t.onSelect).toHaveBeenCalledOnce()})}},R={args:{searchable:!0,placeholder:"Type to filter..."},render:e=>i`
        <cosmoz-command-menu
            .source=${K(ce)}
            ?searchable=${e.searchable}
            placeholder=${e.placeholder}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,step:t})=>{await t("Renders all 8 items initially",async()=>{const o=await e.findAllByShadowRole("menuitem");r(o).toHaveLength(8)}),await t('Filtering by "copy" shows 1 result',async()=>{const o=e.getByShadowRole("textbox");G(o,"copy"),await x(async()=>{const n=await e.findAllByShadowRole("menuitem");r(n).toHaveLength(1),r(n[0].textContent).toContain("Copy")})}),await t('Non-matching query shows "No results found"',async()=>{const o=e.getByShadowRole("textbox");G(o,"xyznonexistent"),await e.findByShadowText("No results found")})}},I={render:e=>i`
        <cosmoz-command-menu
            .source=${le}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,step:t})=>{await t("Renders 7 items in 3 groups",async()=>{const o=await e.findAllByShadowRole("menuitem");r(o).toHaveLength(7);const n=e.getAllByShadowRole("group");r(n).toHaveLength(3)}),await t("Groups are labeled Clipboard, Actions, Danger Zone",async()=>{e.getByShadowRole("group",{name:"Clipboard"}),e.getByShadowRole("group",{name:"Actions"}),e.getByShadowRole("group",{name:"Danger Zone"})})}},M={args:{searchable:!0},render:e=>i`
        <cosmoz-command-menu
            .source=${K(le)}
            ?searchable=${e.searchable}
            placeholder=${e.placeholder}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,step:t})=>{await t("Renders all 7 grouped items",async()=>{const o=await e.findAllByShadowRole("menuitem");r(o).toHaveLength(7)}),await t('Filtering by "copy" shows 1 item in Clipboard group only',async()=>{const o=e.getByShadowRole("textbox");G(o,"copy"),await x(async()=>{const n=await e.findAllByShadowRole("menuitem");r(n).toHaveLength(1);const s=e.getAllByShadowRole("group");r(s).toHaveLength(1),e.getByShadowRole("group",{name:"Clipboard"})})})}},E={render:e=>i`
        <cosmoz-command-menu
            .source=${Je}
            @select=${e.onSelect}
        ></cosmoz-command-menu>
    `,play:async({canvas:e,args:t,step:o,userEvent:n})=>{await o("Clicking disabled item does not fire select",async()=>{const s=await e.findAllByShadowRole("menuitem");r(s).toHaveLength(4);const a=s[1];r(a.hasAttribute("disabled")).toBe(!0),await n.click(a),await r(t.onSelect).not.toHaveBeenCalled()}),await o("Clicking enabled item fires select once",async()=>{const a=(await e.findAllByShadowRole("menuitem"))[0];r(a.hasAttribute("disabled")).toBe(!1),await n.click(a),await r(t.onSelect).toHaveBeenCalledOnce()})}},H={args:{searchable:!0,delay:150},argTypes:{delay:{control:{type:"number",min:0,step:50},description:"Simulated async delay in milliseconds"}},render:e=>{const{delay:t=150}=e;return i`
            <cosmoz-command-menu
                .source=${n=>new Promise(s=>setTimeout(()=>s(ce.filter(a=>!n||a.label.toLowerCase().includes(n.toLowerCase()))),t))}
                ?searchable=${e.searchable}
                placeholder="Search (with ${t}ms delay)..."
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        `},play:async({canvas:e,step:t})=>{await t("Items load after async delay",async()=>{await x(async()=>{const o=await e.findAllByShadowRole("menuitem");r(o).toHaveLength(8),r(e.queryByShadowText("Loading...")).toBeNull()},{timeout:2e3})})}},L={args:{searchable:!0},render:e=>i`
            <cosmoz-command-menu
                .source=${()=>new Promise((o,n)=>setTimeout(()=>n(new Error("Network error")),50))}
                ?searchable=${e.searchable}
                placeholder=${e.placeholder}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        `,play:async({canvas:e,step:t})=>{await t("Shows error message when source rejects",async()=>{await e.findByShadowText("Network error")}),await t("No menu items are rendered",async()=>{const o=e.queryAllByShadowRole("menuitem");r(o).toHaveLength(0)})}},_={args:{searchable:!0},argTypes:{placement:{control:"select",options:re,description:"CSS anchor position-area value. See MDN for all available options."}},render:e=>i`
        <cosmoz-dropdown-next placement=${e.placement??"bottom span-right"}>
            <cosmoz-button slot="button">${Qe} Filters</cosmoz-button>
        <cosmoz-command-menu
            autofocus
            .source=${K(et)}
            ?searchable=${e.searchable}
            placeholder="Filter by..."
            @select=${e.onSelect}
        ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,args:o,step:n,userEvent:s})=>{await n("Open dropdown",async()=>{const a=e.querySelector('cosmoz-button[slot="button"]');await s.click(a)}),await n("Renders 11 items in 3 groups",async()=>{const a=await t.findAllByShadowRole("menuitem");r(a).toHaveLength(11);const c=t.getAllByShadowRole("group");r(c).toHaveLength(3),t.getByShadowRole("group",{name:"Status"}),t.getByShadowRole("group",{name:"Priority"}),t.getByShadowRole("group",{name:"Type"})}),await n('Filtering by "bug" shows 1 item',async()=>{const a=t.getByShadowRole("textbox");G(a,"bug"),await x(async()=>{const c=await t.findAllByShadowRole("menuitem");r(c).toHaveLength(1),r(c[0].textContent).toContain("Bug")})}),await n("ArrowDown highlights the first item",async()=>{const a=t.getByShadowRole("textbox");G(a,""),await x(async()=>{const c=await t.findAllByShadowRole("menuitem");r(c).toHaveLength(11)}),await s.keyboard("{ArrowDown}"),await x(()=>{const c=t.getAllByShadowRole("menuitem");r(c[0].hasAttribute("data-highlighted")).toBe(!0)})}),await n("Enter selects the highlighted item",async()=>{await s.keyboard("{Enter}"),await r(o.onSelect).toHaveBeenCalledOnce()})}},T={argTypes:{placement:{control:"select",options:re,description:"CSS anchor position-area value. See MDN for all available options."}},render:e=>i`
        <cosmoz-dropdown-next placement=${e.placement??"bottom span-right"}>
            <cosmoz-button slot="button">Actions</cosmoz-button>
            <cosmoz-command-menu
                autofocus
                .source=${ie}
                @select=${e.onSelect}
            ></cosmoz-command-menu>
        </cosmoz-dropdown-next>
    `,play:async({canvasElement:e,canvas:t,args:o,step:n,userEvent:s})=>{await n("Open dropdown",async()=>{const a=e.querySelector('cosmoz-button[slot="button"]');await s.click(a)}),await n("Renders 3 menu items",async()=>{const a=await t.findAllByShadowRole("menuitem");r(a).toHaveLength(3)}),await n("ArrowDown highlights the first item",async()=>{await s.keyboard("{ArrowDown}"),await x(()=>{const a=t.getAllByShadowRole("menuitem");r(a[0].hasAttribute("data-highlighted")).toBe(!0)})}),await n("ArrowDown again highlights the second item",async()=>{await s.keyboard("{ArrowDown}"),await x(()=>{const a=t.getAllByShadowRole("menuitem");r(a[0].hasAttribute("data-highlighted")).toBe(!1),r(a[1].hasAttribute("data-highlighted")).toBe(!0)})}),await n("ArrowUp highlights the first item again",async()=>{await s.keyboard("{ArrowUp}"),await x(()=>{const a=t.getAllByShadowRole("menuitem");r(a[0].hasAttribute("data-highlighted")).toBe(!0),r(a[1].hasAttribute("data-highlighted")).toBe(!1)})}),await n("Enter selects the highlighted item",async()=>{await s.keyboard("{Enter}"),await r(o.onSelect).toHaveBeenCalledOnce()})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Basic command menu with a few items.
Use arrow keys to navigate, Enter to select.`,...k.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Menu with search input for filtering items.",...R.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"Items organized into groups with visual separators.",...I.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Groups with search for maximum usability.",...M.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Some items are disabled and cannot be selected or navigated to.",...E.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true,
    delay: 150
  },
  argTypes: {
    delay: {
      control: {
        type: 'number',
        min: 0,
        step: 50
      },
      description: 'Simulated async delay in milliseconds'
    }
  },
  render: args => {
    const {
      delay = 150
    } = args as StoryArgs & {
      delay: number;
    };
    const asyncSource = (query: string) => new Promise<MenuItem[]>(resolve => setTimeout(() => resolve(searchableItems.filter(item => !query || item.label.toLowerCase().includes(query.toLowerCase()))), delay));
    return html\`
            <cosmoz-command-menu
                .source=\${asyncSource}
                ?searchable=\${args.searchable}
                placeholder="Search (with \${delay}ms delay)..."
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
}`,...H.parameters?.docs?.source},description:{story:`Source can be an async function that returns items.
The menu shows a loading state while waiting.`,...H.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    searchable: true
  },
  render: args => {
    const failingSource = () => new Promise<MenuItem[]>((_resolve, reject) => setTimeout(() => reject(new Error('Network error')), 50));
    return html\`
            <cosmoz-command-menu
                .source=\${failingSource}
                ?searchable=\${args.searchable}
                placeholder=\${args.placeholder}
                @select=\${args.onSelect}
            ></cosmoz-command-menu>
        \`;
  },
  play: async ({
    canvas,
    step
  }) => {
    await step('Shows error message when source rejects', async () => {
      await canvas.findByShadowText('Network error');
    });
    await step('No menu items are rendered', async () => {
      const items = canvas.queryAllByShadowRole('menuitem');
      expect(items).toHaveLength(0);
    });
  }
}`,...L.parameters?.docs?.source},description:{story:"When the async source rejects, the menu displays an error message.",...L.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
            autofocus
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
    args,
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
  }
}`,..._.parameters?.docs?.source},description:{story:"A filter-style menu with count badges and groups, shown inside a dropdown.",..._.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
            <cosmoz-button slot="button">Actions</cosmoz-button>
            <cosmoz-command-menu
                autofocus
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
      const button = canvasElement.querySelector('cosmoz-button[slot="button"]') as HTMLElement;
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
  }
}`,...T.parameters?.docs?.source},description:{story:"An actions menu shown inside a dropdown, without search.",...T.parameters?.docs?.description}}};const st=["Basic","WithSearch","WithGroups","WithGroupsAndSearch","WithDisabledItems","AsyncSource","ErrorState","FilterMenu","Actions"];export{T as Actions,H as AsyncSource,k as Basic,L as ErrorState,_ as FilterMenu,E as WithDisabledItems,I as WithGroups,M as WithGroupsAndSearch,R as WithSearch,st as __namedExportsOrder,at as default};
