import {makeStudentActive, StudentType, StudFunc, defineCountry} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        name: "Kolya",
        age: 20,
        hair: "red",
        country:'Belarus',
        hasCar: true,
        active:false,
        technologies: [{
            id: 10,
            title: 'React'
        }]
    }
})


test('this test shound add to student new technologies', ()=>{
    expect(student.technologies.length).toBe(1)
    StudFunc(student, "JS")
    expect(student.technologies[1].title).toBe("JS")
    expect(student.technologies.length).toBe(2)
})


test('student have to become active',()=>{
    expect(student.active).toBe(false)
    makeStudentActive(student)
    expect(student.active).toBe(true)

})

test('does student from Belarus?',()=>{
    expect(defineCountry(student, "Belarus")).toBe(true)

    expect(defineCountry(student, "Russia")).toBe(false)
})