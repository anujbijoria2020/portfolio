const unescapeHTML = (escapedString: string): string => {
    if (typeof escapedString !== 'string') return '';
    return escapedString
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, '&');
};

export default unescapeHTML;
