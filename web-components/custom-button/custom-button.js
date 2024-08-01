//https://stackblitz.com/edit/custom-button-web-components?file=button%2Fmy-button-create.js

class CustomButton extends HTMLElement {
	constructor() {
	  super(); // Always call super() first in the constructor.
	  
	  // Attach a shadow DOM to the element.
	  const shadow = this.attachShadow({ mode: 'open' });
  
	  // Create a template for the button.
	  const template = document.createElement('template');
	  template.innerHTML = `
		<style>
		  /* Styles for the custom button */
		  button {
			background-color: #6200ea;
			color: white;
			border: none;
			padding: 10px 20px;
			font-size: 16px;
			border-radius: 5px;
			cursor: pointer;
			transition: background-color 0.3s ease;
		  }
		  button:hover {
			background-color: #3700b3;
		  }
		  button:active {
			background-color: #03dac5;
		  }
		</style>
		<button><slot>Default Text</slot></button>
	  `;
  
	  // Append the template content to the shadow root.
	  shadow.appendChild(template.content.cloneNode(true));
	}
  
	// You can define attribute change callback if needed
	static get observedAttributes() {
	  return ['disabled'];
	}
  
	attributeChangedCallback(name, oldValue, newValue) {
	  const button = this.shadowRoot.querySelector('button');
	  if (name === 'disabled') {
		if (newValue !== null) {
		  button.setAttribute('disabled', '');
		  button.style.backgroundColor = '#cccccc';
		  button.style.cursor = 'not-allowed';
		} else {
		  button.removeAttribute('disabled');
		  button.style.backgroundColor = '#6200ea';
		  button.style.cursor = 'pointer';
		}
	  }
	}
  }
  
  // Define the new element
  customElements.define('custom-button', CustomButton);
  