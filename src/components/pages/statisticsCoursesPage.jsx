import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import {useLoaderData} from "react-router-dom";
import React, {useState} from "react";
import { Dropdown } from 'primereact/dropdown';
import {InputText} from "primereact/inputtext";
import {FilterMatchMode} from "primereact/api";

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
                 <Column style={{ minWidth: '150px' }} field={module.id} header={module.name} sortable ></Column>
            )
        } return null;

    }

    const bodySkeleton = () => {
        return <Skeleton></Skeleton>
    }

    const skeletonItems = Array.from({ length: 5 }, (v, i) => i);

    const [filtersCourses, setFiltersCourses] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const onGlobalFilterCoursesChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filtersCourses };

        _filters['global'].value = value;

        setFiltersCourses(_filters);
    };
    const renderCoursesHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filtersCourses.global.value} onChange={onGlobalFilterCoursesChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const coursesHeader = renderCoursesHeader();

    const [filtersCourse, setFiltersCourse] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const onGlobalFilterCourseChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filtersCourse };

        _filters['global'].value = value;

        setFiltersCourse(_filters);
    };
    const renderCourseHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filtersCourse.global.value} onChange={onGlobalFilterCourseChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const courseHeader = renderCourseHeader();

    return (
        <div className={'flex flex-col gap-y-8'}>
            <div className={'font-bold text-3xl text-primary-800'}>
                 Статистика по курсам
            </div>
            <hr/>
            {
                courses_progress.length > 0 ?
                    <>
                        <DataTable emptyMessage="Результаты отсутствуют." value={courses_progress} removableSort  paginator rows={10} tableStyle={{ minWidth: '50rem' }} header={coursesHeader} filters={filtersCourses}>
                            <Column style={{ minWidth: '150px' }} field="course_name" header="Курс" sortable ></Column>
                            <Column className={''} field="modules_count" header="Модули" sortable ></Column>
                            <Column className={''} field="all_users_count" header="Обучающиеся" sortable ></Column>
                            <Column className={''} field="individual_users_count" header="Индивидуально обучающиеся" sortable ></Column>
                            <Column className={''} field="user_from_groups_count" header="Обучающиеся из групп" sortable ></Column>
                            <Column className={''} field="groups_count" header="Группы" sortable ></Column>
                            <Column className={''} field="average_course_progress" header="Прохождение %" sortable ></Column>
                            <Column className={''} field="average_test_progress" header="Средний % теста" sortable ></Column>
                        </DataTable>


                        <div className="flex flex-col gap-y-4 mt-8">
                            <div className="flex items-baseline gap-x-4 font-bold text-xl whitespace-nowrap">
                                Детальная статистика по курсу:
                                <Dropdown value={selectedCourse} onChange={(e) => setSelectedCourse(e.value)} options={course_names} optionLabel="name"
                                          placeholder="Выберите курс" className="w-full md:w-14rem" />
                            </div>

                            {
                                selectedCourse !== ''?
                                    <div>
                                        <DataTable emptyMessage="Результаты отсутствуют." className="p-datatable-striped" value={preparedDetailData} header={courseHeader} paginator rows={10} tableStyle={{ minWidth: '50rem' }} filters={filtersCourse} >
                                            <Column sortable style={{ minWidth: '200px' }} field="user" header="Обучающийся" ></Column>
                                            {detailCourseTableInfo}
                                            <Column sortable field="test" header="Результат теста" ></Column>
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