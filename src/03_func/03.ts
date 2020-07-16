
debugger
export const sum=(a:number, b:number)=>{
    return a+b
}

 const res=sum(1,4)
console.log(res)


type TecnologiesType={
    id:number
    title:string
}
// let student1:StudentType={
//     name:"Kolya",
//     age:20,
//     hair: "red",
//     hasCar: true,
//     tecnologies:[{
//         id:10,
//         title: 'fdssd'
//     }]
// }

export type StudentType={
    name:string
    age:number
    hair: string
    country:string
    hasCar: boolean
    active: boolean
    technologies:Array<TecnologiesType>
}


export const StudFunc=(student:StudentType,skill:string)=>{
    student.technologies.push(
        {
          id:Math.random()*100,
            title:skill
        }
    )
}

export function makeStudentActive(student:StudentType) {
student.active=true
}

export function defineCountry(student:StudentType, country:string) {
return student.country===country;
}