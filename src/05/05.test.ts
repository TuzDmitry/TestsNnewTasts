import {DeveloperType, StudentType} from "../02/types";
import { makeDevelopers } from "../03_func/functions";






let developers: Array<DeveloperType>


test('should made list of developers',()=>{
    let developerDima: DeveloperType = {
        stack: ['js', 'react', 'angular'],
        firstName: 'Dima',
        lastName: 'Tuz'
    }


    let students:Array<StudentType>=[
        {name: 'Dima Tuz', age:25},
        {name: 'George Tuz', age:27},
        {name: 'Eugenie Alligator', age:31},
        {name: 'Yura Youchkovich', age:28}
    ]

    developers=makeDevelopers(students)
    expect(developers.length).toBe(4)
    expect(developers[0].stack.length).toBe(3)
    expect(developers[0].firstName).toBe('Dima')
})


export default 10