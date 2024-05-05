{
  //
  const AddCourseWithStudent = <
    T extends { id: number; name: string; email: string  } | {age : string}
  >(
    student: T
  ) => {
    const course = "next level web development course";
    return {
      ...student,
      course,
    };
  };

  interface EnrollStudent {
    id: number;
    name: string;
    email: string;
    course?: string;
  }

  const findStudent1 = AddCourseWithStudent<EnrollStudent>({
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
