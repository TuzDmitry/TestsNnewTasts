export function sum(a:number, b:number) {
return a+b
}

export function mult(a:number, b:number) {
return a*b
}

export function splitIntoWords(sentense:string){
    let a=sentense.toLowerCase().split(" ")
        .map(el=>el.replace('!','')
            .replace(',','')
        )
    return a
}
