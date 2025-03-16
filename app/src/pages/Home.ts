import { html, css, LitElement, TemplateResult } from "lit";

import "../components/NavBar";

class Home extends LitElement {
    static styles = css`
        :host {
            display: block;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
    `;

    render(): TemplateResult<1> {
        return html`
            <k-navbar></k-navbar>
            <main>
                <h1>Hai</h1>
            </main>
        `;
    }
}

customElements.define("home-page", Home);
