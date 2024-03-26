let template = document.createElement('template');
template.innerHTML = `
<style>
    :host{
        background-color: lavender;
        display: block;
    }
</style>
<div>Shadow Dom
<slot></slot>
<slot name="details"></slot>
</div>`;
class Person extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow({ mode: 'open' });
		const clone = template.content.cloneNode(true);
		shadowRoot.append(clone);
	}
}

customElements.define('person-details', Person);
