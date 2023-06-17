import {useLoaderData} from "react-router-dom";
import TestCard from "../testCards/testCard";
import DoneTestCard from "../testCards/doneTestCard";


const TestsPage = () => {
    const { tests, courses_tests_info } = useLoaderData();

    const testCards = renderTestCards();
    const doneTestCards = renderDoneTestCards();

    function renderTestCards(){
        return courses_tests_info
            .filter(course_test => !course_test.results)
            .map(course_test => {
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

    function renderDoneTestCards(){
        return courses_tests_info
            .filter(course_test => course_test.results)
            .map(course_test => {
                const index = tests.findIndex(test => test.id === course_test.test_id)
                const course_test_info = {
                    course_name: course_test.name,
                    test_name: tests[index].name,
                    correct_answers: course_test.results.correct_answers,
                    questions_count: course_test.results.questions_count
                }
                return <DoneTestCard test={course_test_info}/>
            })
    }

    return (
        <div className={'flex flex-col gap-y-8'}>
            <h1 className={'text-3xl font-bold text-primary-800'}>Мои тесты</h1>
            {
                testCards.length === 0 && doneTestCards.length === 0 ?
                    <hr/>
                    : null
            }

            {
                testCards.length > 0 ? <>
                    <div className="relative">
                        <div className="absolute right-0 text-xl text-primary-700">Назначенные тесты</div>
                    </div>
                    <hr/>
                    <div className={'grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 xl:grid-cols-4 gap-4'}>{testCards}</div>
                </>: null
            }

            {
                doneTestCards.length > 0 ? <>
            <div className="relative">
                <div className="absolute right-0 text-xl text-primary-700">Пройденные тесты</div>
            </div>
            <hr/>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 xl:grid-cols-4 gap-4'}>{doneTestCards}</div>
                </>: null
            }
        </div>
    )
}


export default TestsPage;