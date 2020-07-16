////есть набор слов для тестов
import {mult, splitIntoWords, sum} from "./01";

let a:number;
let b:number;
let c:number;

beforeEach(()=>{
    a=1;
    b=2;
    c=3;
})

test('sum should be correct',()=>{
    //1)подготовительный этап. вводим набор данных

    //2)дейсвие которое мы будем выполнять
    const result1=sum(a,b)
    const result2=sum(b,c)


    //3)что мы хочем получить
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test('multiply should be correct', ()=>{

    let result1=mult(a,b)
    let result2=mult(c,b)

    expect(result1).toBe(2)
    expect(result2).toBe(6)

    }
)

test('splitingIntoWords',()=>{
    let a="Hello! my friends"
    let b="hello, my dears"


    let result1=splitIntoWords(a)
    let result2=splitIntoWords(b)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')


    expect(result2.toString()).toBe(['hello', 'my', 'dears'].toString())

    }
)