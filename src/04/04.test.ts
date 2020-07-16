import {CourseType} from "../02/types";

let people:Array<number>;

beforeEach(()=>{
    people=[10,100,83,98,45]

})





test('should take people older than 90',()=>{
    // let people=[10,100,83,98,45]

    let oldPeople=people.filter(el=>el>90)

    expect(oldPeople.length).toBe(2)
})


test('courses should be cheaper than 200USD', ()=>{
    let coursers:Array<CourseType>=[{title:'JS', price:220},{title:'Python', price:300},{title:'C++', price:150},{title:'Ruby', price:440}]

    let cheaperCourses=coursers.filter(item=>item.price<200)
    expect(cheaperCourses.length).toBe(1)
    expect(cheaperCourses[0].title).toBe('C++')

})


// tasks=[{id:1, title:'Bread', isDone:true},{id:1, title:'Bread', isDone:true},{id:1, title:'Bread', isDone:true}]
// let completedtasks=tasks.filter(task=>task.isDone)


export default 15