"use strict";
{
    // generic with function
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result = createArrayWithGeneric("bangladesh");
    const genericObj = createArrayWithGeneric({
        id: 222,
        name: "mahfuj",
    });
    //   generic with tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const result1 = createArrayWithTuple("bangladesh", {
        id: 222,
        name: "mahfuj",
    });
    const AddCourseWithStudent = (student) => {
        const course = "next level web development course";
        return Object.assign(Object.assign({}, student), { course });
    };
    const findStudent = AddCourseWithStudent({
        name: "mahfuj",
        course: "next level web dev",
        email: "mahfujahamed@gmail.com",
    });
    const findStudent1 = AddCourseWithStudent({
        name: "mahfuj",
        course: "next level web dev",
    });
    //
}
