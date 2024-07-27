export function getImage(projectKey: string, src: string) {
    return `/projects/${projectKey}${src}`;
}