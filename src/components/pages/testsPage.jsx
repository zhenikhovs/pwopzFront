import {useLoaderData} from "react-router-dom";
import CourseCard from "../courses/courseCard";
import TestCard from "../tests/testCard";


const TestsPage = () => {
    const { tests, courses_tests_info } = useLoaderData();

    const items = renderCourses();

    function renderCourses (){
        return courses_tests_info.map(course_test => {
            const index = tests.findIndex(test => test.id === course_test.test_id)
            const course_test_info = {
                course_id: course_test.course_id,
                course_name: course_test.name,
                test_id: course_test.test_id,
                test_name: tests[index].name
            }
            return <TestCard test={course_test_info}/>
        })
    }

    return (
        <div className={'flex flex-col gap-y-5'}>
            <h1 className={'text-3xl font-bold text-primary-800'}>Мои тесты</h1>
            <hr/>
            <div className={'flex gap-x-4'}>{items}</div>
        </div>
    )
}


export default TestsPage;