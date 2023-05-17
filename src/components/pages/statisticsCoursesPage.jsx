import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import {useLoaderData} from "react-router-dom";
import {useState} from "react";
import { Dropdown } from 'primereact/dropdown';

const StatisticsCoursesPage = () => {
    const { courses_progress } = useLoaderData();

    const course_names = courses_progress.map(course_progress => {
        return {
            name: course_progress.course_name,
            code: course_progress.id
        }
    });

    const [selectedCourse, setSelectedCourse] = useState('');
    let preparedDetailData = null ;


    const detailCourseTableInfo = getDetailCourseTableInfo();

    function getDetailCourseTableInfo() {

        if(selectedCourse !== ''){
            let data = [];
            const course = courses_progress.filter(course_progress =>
                course_progress.course_name === selectedCourse.name
            )[0];

            const users_info = Object.values(course.users_info);
            users_info.forEach(user_info => {
                const userProgress = course.users_progress[user_info.id]

                let testResult = 'Тест отсутствует';
                if(course.test_id){
                    if(userProgress.test_results){
                        testResult = userProgress.test_results.correct_answers + " из " +userProgress.test_results.questions_count
                    } else {
                        testResult = 'Тест не пройден';
                    }
                }
                const infoForTable = {
                    user: user_info.name + ' ' + user_info.last_name,
                    test: testResult,
                }

                course.modules.forEach(module => {
                    const userReadModule = userProgress.read_modules.includes(module.id);
                    let text = 'Не изучен';
                    if(userReadModule){
                        text = 'Изучен';
                    }
                    infoForTable[module.id] = text;
                })

                data.push(
                    infoForTable
                )
            })

            preparedDetailData = data;

            return course.modules.map(module =>
                 <Column className={'w-[150px]'} field = {module.id} header = {module.name} sortable ></Column>
            )
        } return null;

    }


    const bodySkeleton = () => {
        return <Skeleton></Skeleton>
    }

    const skeletonItems = Array.from({ length: 5 }, (v, i) => i);


    return (
        <div className={'flex flex-col w-full gap-y-8 '}>
            <div className={'font-bold text-3xl text-primary-800'}>
                 Статистика по курсам
            </div>
            <hr/>
            {
                courses_progress.length > 0 ?
                    <>
                        <DataTable className={'overflow-scroll'} value={courses_progress} removableSort tableStyle={{ minWidth: '50rem' }}>
                            <Column className={'w-[150px]'} field="course_name" header="Курс" sortable ></Column>
                            <Column className={'w-[150px]'} field="modules_count" header="Модули" sortable ></Column>
                            <Column className={'w-[150px]'} field="all_users_count" header="Обучающиеся" sortable ></Column>
                            <Column className={'w-[150px]'} field="individual_users_count" header="Индивидуально обучающиеся" sortable ></Column>
                            <Column className={'w-[150px]'} field="user_from_groups_count" header="Обучающиеся из групп" sortable ></Column>
                            <Column className={'w-[150px]'} field="groups_count" header="Группы" sortable ></Column>
                            <Column className={'w-[150px]'} field="average_course_progress" header="Прохождение %" sortable ></Column>
                            <Column className={'w-[150px]'} field="average_test_progress" header="Средний % теста" sortable ></Column>
                        </DataTable>


                        <div className="flex flex-col gap-y-4 mt-8">
                            <div className="flex items-baseline gap-x-4 font-bold text-xl whitespace-nowrap">
                                Детальная статистика по курсу:
                                <Dropdown value={selectedCourse} onChange={(e) => setSelectedCourse(e.value)} options={course_names} optionLabel="name"
                                          placeholder="Выберите курс" className="w-full md:w-14rem" />
                            </div>

                            {
                                selectedCourse !== ''?
                                    <div className={'overflow-scroll '}>
                                        <DataTable className={'w-max'} value={preparedDetailData} className="p-datatable-striped">
                                            <Column className={'w-max'} field="user" header="Обучающийся" ></Column>
                                            {detailCourseTableInfo}
                                            <Column field="test" header="Результат теста" ></Column>
                                        </DataTable>
                                    </div>
                                    :  <>
                                        <DataTable value={skeletonItems} className="p-datatable-striped">
                                            <Column field="code" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                            <Column field="name" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                            <Column field="name" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                            <Column field="name" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                            <Column field="name" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                        </DataTable>
                                    </>
                            }
                        </div>

                    </>


                :
                <div className={'text-xl flex items-center justify-center h-[100px] bg-[#dadada80]'}>Курсы отсутствуют</div>

            }

        </div>

    )
}


export default StatisticsCoursesPage;