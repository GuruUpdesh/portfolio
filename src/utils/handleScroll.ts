// adapted from https://stackoverflow.com/a/77054108

export default function handleScroll(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: "smooth",
    });
}
