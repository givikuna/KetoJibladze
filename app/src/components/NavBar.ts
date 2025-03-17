import { html, css, LitElement } from "lit";

class Navbar extends LitElement {
    protected albums: string[];
    private dropdownTimeout: number | null = null;
    private showDropdown: boolean = false;

    static override styles = css`
        nav {
            background: #333;
            color: white;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            padding: 13px;
        }

        .dropdown {
            position: absolute;
            top: calc(100% + 15px);
            left: 50%;
            transform: translateX(-50%) scaleY(0);
            background: rgba(0, 0, 0, 0.8);
            padding: 5px 0;
            flex-direction: column;
            min-width: 150px;
            border-radius: 23.5px;
            z-index: 0;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        }

        .dropdown.show {
            visibility: visible;
            opacity: 1;
            transform: translateX(-50%) scaleY(1);
        }

        .dropdown::before {
            content: "";
            display: block;
        }

        .dropdown a {
            display: block;
            padding: 8px;
            color: white;
            text-decoration: none;
        }

        .menu {
            list-style: none;
            display: flex;
            gap: 15px;
            padding: 0;
            margin: 0;
        }

        .menu li {
            position: relative;
            padding: 5px;
            border-radius: 20.5px;
        }

        .menu li.show > .dropdown {
            display: flex;
            visibility: visible;
        }

        .menu li a {
            position: relative;
            z-index: 1;
        }

        .menu a {
            color: white;
            text-decoration: none;
            font-size: 1.2em;
            padding: 5px 10px;
        }
    `;

    static override properties = {
        albums: { type: Array },
    };

    constructor() {
        super();
        this.albums = ["Weddings", "Portraits"];
    }

    override render() {
        return html`
            <nav>
                <ul class="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li
                        @mouseenter="${this.handleMouseEnter}"
                        @mouseleave="${this.handleMouseLeave}"
                    >
                        <a href="#">Albums</a>
                        <ul class="dropdown ${this.showDropdown ? "show" : ""}">
                            ${this.albums.map(
                                (album) => html`
                                    <li>
                                        <a href="#">${album}</a>
                                    </li>
                                `,
                            )}
                        </ul>
                    </li>
                </ul>
            </nav>
        `;
    }

    private handleMouseEnter() {
        if (this.dropdownTimeout) {
            clearTimeout(this.dropdownTimeout);
            this.dropdownTimeout = null;
        }
        this.showDropdown = true;
        this.requestUpdate();
    }

    private handleMouseLeave() {
        this.dropdownTimeout = window.setTimeout(() => {
            this.showDropdown = false;
            this.requestUpdate();
        }, 125);
    }
}

customElements.define("k-navbar", Navbar);
