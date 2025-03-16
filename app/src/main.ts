import "./pages/Home";
import "./pages/AboutPage";
import "./pages/Pricing";

const loadPage = (path: string) => {
    let pageComponent: string = "";

    switch (path) {
        case "/about":
            pageComponent = /* HTML */ `<about-page></about-page>`;
            break;
        case "/pricing":
            pageComponent = /* HTML */ `<pricing-page></pricing-page>`;
            break;
        default:
            pageComponent = /* HTML */ `<home-page></home-page>`;
    }

    document.body.innerHTML = /* HTML */ `<k-navbar></k-navbar> ${pageComponent}`;
};

window.addEventListener("popstate", (): void => {
    loadPage(window.location.pathname);
});

document.body.innerHTML = /* HTML */ `<home-page></home-page>`;
