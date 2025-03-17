import "./pages/Home";
import "./pages/About";
import "./pages/Pricing";

const loadPage = (path: string): void => {
    let pageComponent: string = "";

    switch (path) {
        case "/about":
            pageComponent = /* HTML */ `<about-page></about-page>`;
            break;
        case "/pricing":
            pageComponent = /* HTML */ `<pricing-page></pricing-page>`;
            break;
        case "/albums":
            pageComponent = /* HTML */ `<albums-page></albums-page>`;
            break;
        case "/contact":
            pageComponent = /* HTML */ `<contact-page></contact-page>`;
            break;
        default:
            pageComponent = /* HTML */ `<home-page></home-page>`;
            break;
    }

    document.body.innerHTML = /* HTML */ `<k-navbar></k-navbar> ${pageComponent}`;
};

window.addEventListener("popstate", (): void => {
    loadPage(window.location.pathname);
});

document.body.innerHTML = /* HTML */ `<home-page></home-page>`;
