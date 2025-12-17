export interface NewsletterIssue {
    slug: string;
    title: string;
    month: string;
    year: string;
    coverParams: {
        text: string;
        color: string;
    };
    embedUrl: string;
}

export const newsletterIssues: NewsletterIssue[] = [
    {
        slug: "origins-issue-1",
        title: "Origins Issue 1",
        month: "December",
        year: "2024",
        coverParams: {
            text: "ORIGINS",
            color: "from-blue-900 to-blue-600"
        },
        embedUrl: "https://online.anyflip.com/mpvfm/dwwa/index.html"
    }
];
