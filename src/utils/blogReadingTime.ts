export const calculateReadingTime = (content:string,wordsperMinute:number=200):string=>{
    const wordsCount = content.split(/\s+/).length;
    const minutes  = Math.ceil(wordsCount/wordsperMinute);
    return `${minutes} min read`
}