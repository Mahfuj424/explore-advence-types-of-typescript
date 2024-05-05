{
  // generic with function
  const createArrayWithGeneric = <T>(param: T) => {
    return [param];
  };

  const result = createArrayWithGeneric<string>("bangladesh");

  interface User {
    id: number;
    name: string;
  }

  const genericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "mahfuj",
  });

  //   generic with tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  interface User1 {
    id: number;
    name: string;
  }
  const result1 = createArrayWithTuple<string, User1>("bangladesh", {
    id: 222,
    name: "mahfuj",
  });

  const AddCourseWithStudent = <T>(student: T) => {
    const course = "next level web development course";
    return {
      ...student,
      course,
    };
  };

  interface EnrollStudent {
    name: string;
    course: string;
    email?: string;
  }

  const findStudent = AddCourseWithStudent({
    name: "mahfuj",
    course: "next level web dev",
    email: "mahfujahamed@gmail.com",
  });
  const findStudent1 = AddCourseWithStudent<EnrollStudent>({
    name: "mahfuj",
    course: "next level web dev",
  });

  //
}
