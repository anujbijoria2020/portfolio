export const calculateReadingTime = (content:string,wordsperMinute:number=200):string=>{
    const plainText = content
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    const wordsCount = plainText ? plainText.split(" ").length : 0;
    const minutes  = Math.max(1, Math.ceil(wordsCount/wordsperMinute));
    return `${minutes} min read`
}