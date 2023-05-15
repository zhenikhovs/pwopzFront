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
        <div className={'flex flex-col gap-y-8'}>
            <h1 className={'text-3xl font-bold text-primary-800'}>Мои курсы</h1>
            <hr/>
            <div className={'grid grid-cols-4 gap-4'}>{items}</div>

        </div>
    )
}


export default CoursesPage;