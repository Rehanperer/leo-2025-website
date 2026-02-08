export interface NewsletterIssue {
    slug: string;
    title: string;
    month: string;
    year: string;
    coverParams: {
        text: string;
        color: string;
        image?: string;
        customBadge?: string;
    };
    embedUrl: string;
}

export const newsletterIssues: NewsletterIssue[] = [
    {
        slug: "origins-issue-1",
        title: "Origins Issue 1",
        month: "December",
        year: "2025",
        coverParams: {
            text: "ORIGINS",
            color: "from-blue-900 to-blue-600"
        },
        embedUrl: "https://online.anyflip.com/mpvfm/dwwa/index.html"
    },
    {
        slug: "origins-issue-2",
        title: "Origins Issue 2",
        month: "February",
        year: "2026",
        coverParams: {
            text: "ORIGINS",
            color: "from-pink-900 to-rose-600",
            customBadge: "FEBRUARY 7"
        },
        embedUrl: "https://online.anyflip.com/mpvfm/sqpy/index.html"
    }
];
