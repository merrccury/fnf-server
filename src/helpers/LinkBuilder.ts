export class LinkBuilder{
    linkTo(url: string, name: string): string {
        return `<a href="${url}">${name}</a>`;

    }
    linkToWith(url: string, name: string, rel: string): string {
        return `<a href="${url}" rel="${rel}">${name}</a>`;
    }
}
