import { ProgressBar } from 'primereact/progressbar';
import {useLoaderData} from "react-router-dom";

const ProfileStatistics = () => {
    const { user_courses_progress } = useLoaderData();

    const progressBarsItems = renderProgressBars();

    function renderProgressBars(){
        return user_courses_progress.map(courses_progress => {
            const modules_count = +courses_progress.modules_info.modules_count;
            const modules_read = +courses_progress.modules_info.modules_read;
            let percent = 0;
            if(modules_count === 0 ) {
                percent = 100;
            }else{
                percent =  parseInt(modules_read/modules_count*100, 10);
            }



            const testInfo = courses_progress.test_info;


            return <div className={'flex flex-col gap-y-4'}>
                <div className={'text-xl'}>{courses_progress.course_name}</div>
                <div className="grid  grid-cols-1 gap-y-2 md:gap-x-8 md:grid-cols-2">
                    <div className={'flex flex-col gap-y-2'}>
                        <div className={'text-lg text-gray-500'}>Процент прохождения курса:</div>
                        <ProgressBar className={''} value={percent}/>
                    </div>
                    <div className={'flex flex-col gap-y-2'}>
                        <div className={'text-lg text-gray-500'}>Информация о тестировании:</div>
                        {
                            testInfo ?
                            <>{
                                testInfo.correct_answers && testInfo.questions_count ?
                                    <div className="flex items-baseline text-xl gap-x-1 flex-wrap">
                                        Вы набрали
                                        <span
                                            className={'font-bold text-2xl text-primary-800'}>{courses_progress.test_info.correct_answers}</span>
                                        из
                                        <span
                                            className={'font-bold text-2xl text-primary-800'}>{courses_progress.test_info.questions_count}</span>
                                        баллов за тест <span
                                        className={'font-bold'}>"{courses_progress.test_info.name}"</span>
                                    </div> :

                                    <div className="flex items-baseline text-xl gap-x-1">
                                        Тест <span className={'font-bold'}>"{courses_progress.test_info.name}"</span> не
                                        пройден
                                    </div>
                            }</> :

                            <div className="flex items-baseline text-xl gap-x-1">
                                Тест отсутствует
                            </div>
                        }
                    </div>
                </div>

            </div>
        })
    }

    return (
        <div className={'flex flex-col w-full gap-y-8 '}>
            <div className={'font-bold text-3xl text-primary-800'}>
                Личная статистика
            </div>
            <hr/>
            <div className="flex flex-col gap-y-8 md:gap-y-4">
                {progressBarsItems}
            </div>

        </div>

    )
}


export default ProfileStatistics;