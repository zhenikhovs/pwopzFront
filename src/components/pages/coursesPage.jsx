import {useEffect} from "react";
import useCourseService from "../../services/courseService";
import {useLoaderData} from "react-router-dom";
import CourseCard from "../courses/courseCard";


const CoursesPage = () => {
    const { courses } = useLoaderData();

    const items = renderCourses();

    function renderCourses (){
        return courses.map(course => {
            return <CourseCard course={course}/>
        })
    }



    return (
        <div className={'flex flex-col gap-y-5'}>
            <h1 className={'text-3xl font-bold text-primary-800'}>Мои курсы</h1>
            <hr/>
            <div className={'flex gap-x-4'}>{items}</div>

        </div>
    )
}


export default CoursesPage;