const template = document.createElement('template');
template.innerHTML = `
<style>
    h1{
        color: green
    }
</style>
   
<div>
    
    <label>
        <input type="checkbox" />
        <slot></slot>
        <slot name="description"></slot>
    </label>

     <h1>I am Shadow Dom <h1>

     </div>
`;

class Person extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		shadow.append(template.content.cloneNode(true));
	}

	get todoList() {
		return this.getAttribute('list');
	}

	connectedCallback() {
		console.log(this.todoList);
	}
}

customElements.define('person-details', Person);
