const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
    <link href="/style.css" rel="stylesheet" type="text/css" />
      <footer>
         <div class="section-2 footer wf-section">
            <div class="container-4 w-container">
                <div class="div-block-2"><p class="paragraph footer-text"><a> Developed by </a> <a href="https://www.linkedin.com/in/snehithkumar/"> Snehith Dhammoju.</a></p></div>
            </div>
        </div>
      </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const fontAwesome = document.querySelector('link[href*="font-awesome"]');
        const shadowRoot = this.attachShadow({mode: 'closed'});

        if (fontAwesome) {
            shadowRoot.appendChild(fontAwesome.cloneNode());
        }

        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);