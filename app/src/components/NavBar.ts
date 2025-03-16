import { html, css, LitElement, TemplateResult, CSSResult } from "lit";

class Navbar extends LitElement {
    static styles: CSSResult = css`
        nav {
            background: #333;
            color: white;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .menu {
            list-style: none;
            display: flex;
            gap: 15px;
            padding: 0;
            margin: 0;
        }
        .menu a {
            color: white;
            text-decoration: none;
            font-size: 1.2em;
            padding: 5px 10px;
            cursor: pointer;
        }
    `;

    navigate(event: Event, route: string): void {
        event.preventDefault();
        history.pushState({}, "", route);
        window.dispatchEvent(new Event("popstate")); // Trigger page update
    }

    render(): TemplateResult<1> {
        return html`
            <nav>
                <ul class="menu">
                    <li>
                        <a
                            href="/"
                            @click="${(e: Event) => this.navigate(e, "/")}"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="/about"
                            @click="${(e: Event) => this.navigate(e, "/about")}"
                            >About Me</a
                        >
                    </li>
                    <li>
                        <a
                            href="/pricing"
                            @click="${(e: Event) => this.navigate(e, "/pricing")}"
                            >Pricing</a
                        >
                    </li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("k-navbar", Navbar);
