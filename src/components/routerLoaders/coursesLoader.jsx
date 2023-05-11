import useCourseService from "../../services/courseService";

export async function CoursesLoader() {
    const {getUserCourses} = useCourseService();

    let courses = await getUserCourses().then(res => res.courses)
        .catch(res => console.log(res));

    return {courses};
}