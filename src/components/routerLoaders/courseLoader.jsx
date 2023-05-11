import useCourseService from "../../services/courseService";

export async function CourseLoader({params}) {
    const course_id = params.id;

    const {getCourse} = useCourseService();

    let courseData = await getCourse(course_id)
        .catch(res => console.log(res));

    return {courseData};
}