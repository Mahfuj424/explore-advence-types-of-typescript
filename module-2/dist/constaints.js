"use strict";
{
    //
    const AddCourseWithStudent = (student) => {
        const course = "next level web development course";
        return Object.assign(Object.assign({}, student), { course });
    };
    const findStudent1 = AddCourseWithStudent({
        id: 222,
        name: "mahfuj",
        email: "mahfujahamed@gmail.com",
        course: "next level web dev",
    });
    const findStudent2 = AddCourseWithStudent({
        id: 333,
        name: "jhankar mahbub",
        email: "mahfujahamed@gmail.com",
        hasWatch: 'apple watch'
    });
    //
}
