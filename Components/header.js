const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<link href="https://uploads-ssl.webflow.com/61d9916fe2a07c369574ff24/css/michaelfilipiuk.webflow.afa74fdff.css" rel="stylesheet" type="text/css" />
<header>
    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
        <div class="container w-container">
            <a href="#" class="nav-link w-nav-link">SNEHITH DHAMMOJU</a>
            <nav role="navigation" class="w-nav-menu">
<!--                <a href="/testimonials.html" class="nav-link-4 w-nav-link">Testimonials</a>-->
<!--                <a href="/faq.html" class="nav-link-4 w-nav-link">FAQ</a>-->
<!--                <a href="/about-me.html" class="nav-link-3 w-nav-link">About me</a>-->
                <a href="mailto:sdhammoju@duck.com" class="nav-link-2 w-nav-link">Get in touch →</a>
            </nav>
            <div class="menu-button w-nav-button"><div class="icon w-icon-nav-menu"></div></div>
        </div>
    </div>
</header>
`;

class Header extends HTMLElement {
constructor() {
super();
}

connectedCallback() {
const shadowRoot = this.attachShadow({mode: 'closed'});

shadowRoot.appendChild(headerTemplate.content);
}
}

customElements.define('header-component', Header);
