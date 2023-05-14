import {useLoaderData} from "react-router-dom";
import CourseCard from "../courses/courseCard";
import getQuestion from "../questions/questionsController";
import useTestService from "../../services/testService";
import {useState} from "react";


const TestPage = () => {
    const [score, setScore] = useState(-1);
    const [questionsCount, setQuestionsCount] = useState(-1);

    const { testData } = useLoaderData();

    const {questions : questionsData, test_info, course_info} = testData;

    const {sendTestResults} = useTestService()

    const questions = renderCourses();

    function renderCourses (){
        return questionsData.map((question, index) => {
            return getQuestion(question, index);
        })
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = {
            test_id: test_info.id,
            course_id: course_info.id,
            test_answers: []
        };

        formData.forEach((value, key) =>{
            if (data.test_answers[key]){
                data.test_answers[key].push(value);
            }
            else {
                data.test_answers[key] = [value]
            }
        })

       await sendTestResults(data).then(res => {
           setScore(res.correct_answers);
           setQuestionsCount(res.questions_count);
       });
    }



    return (
        <div className={'flex flex-col gap-y-5'}>
            <div className="flex justify-between">
                <h1 className={'text-3xl w-1/3 font-bold text-primary-800'}>{test_info.name}</h1>
                <h2 className="font-normal self-end text-end text-gray-700">Тест курса <span className={'font-bold'}>"{course_info.name}"</span></h2>
            </div>
            <hr/>
            {
                score === -1 ?
                <form onSubmit={onFormSubmit} className={'flex flex-col gap-y-8'}>
                    {questions}
                    <button type={'submit'}
                            className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none ">
                        Отправить ответы
                    </button>
                </form> :
                    <div className={'flex items-center justify-center h-[100px] bg-[#dadada80]'}>
                        <div className="flex items-baseline text-xl gap-x-1">
                            Вы набрали <span className={'font-bold text-2xl text-primary-800'}>{score}</span> из <span className={'font-bold text-2xl text-primary-800'}>{questionsCount}</span> баллов.
                        </div>
                    </div>
            }

        </div>
    )
}


export default TestPage;