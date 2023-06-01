import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import {useLoaderData} from "react-router-dom";
import React, {useState} from "react";
import { Dropdown } from 'primereact/dropdown';
import {InputText} from "primereact/inputtext";
import {FilterMatchMode} from "primereact/api";

const StatisticsGroupsPage = () => {
    const { groups_progress } = useLoaderData();

    const groupsProgress = Object.values(groups_progress);
    const groups_names = groupsProgress.map(group_progress => {
        return {
            name: group_progress.group_name,
            code: group_progress.id
        }
    });
    const [selectedGroup, setSelectedGroup] = useState('');

    let preparedDetailData = null ;
    getDetailGroupTableInfo();

    function getDetailGroupTableInfo() {

        if(selectedGroup !== ''){
            preparedDetailData = groups_progress[selectedGroup.name];
        }
        return null;

    }


    const bodySkeleton = () => {
        return <Skeleton></Skeleton>
    }

    const skeletonItems = Array.from({ length: 5 }, (v, i) => i);

    const [filtersGroups, setFiltersGroups] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const onGlobalFilterGroupsChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filtersGroups };

        _filters['global'].value = value;

        setFiltersGroups(_filters);
    };
    const renderGroupsHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filtersGroups.global.value} onChange={onGlobalFilterGroupsChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const groupsHeader = renderGroupsHeader();

    const [filtersGroupCourses, setFiltersGroupCourses] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const onGlobalFilterGroupCoursesChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filtersGroups };

        _filters['global'].value = value;

        setFiltersGroupCourses(_filters);
    };
    const renderGroupCoursesHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filtersGroupCourses.global.value} onChange={onGlobalFilterGroupCoursesChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const groupCoursesHeader = renderGroupCoursesHeader();


    const [filtersGroupUsers, setFiltersGroupUsers] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const onGlobalFilterGroupUsersChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filtersGroups };

        _filters['global'].value = value;

        setFiltersGroupUsers(_filters);
    };
    const renderGroupUsersHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filtersGroupUsers.global.value} onChange={onGlobalFilterGroupUsersChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const groupUsersHeader = renderGroupUsersHeader();

    return (
        <div className={'flex flex-col gap-y-8'}>
            <div className={'font-bold text-3xl text-primary-800'}>
                 Статистика по группам
            </div>
            <hr/>
            <DataTable header={groupsHeader} filters={filtersGroups} emptyMessage="Результаты отсутствуют." value={groupsProgress} removableSort  paginator rows={10} tableStyle={{ minWidth: '50rem' }}>
                <Column style={{ minWidth: '150px' }} field="group_name" header="Группа" sortable ></Column>
                <Column className={''} field="users_count" header="Количество обучающихся" sortable ></Column>
                <Column className={''} field="group_courses_count" header="Количество курсов" sortable ></Column>
                <Column className={''} field="course_modules_progress" header="Средний % изучения курсов" sortable ></Column>
                <Column className={''} field="course_test_progress" header="Средний % теста" sortable ></Column>
            </DataTable>


            <div className="flex flex-col gap-y-4 mt-8">
                <div className="flex items-baseline gap-x-4 font-bold text-2xl whitespace-nowrap">
                    Детальная статистика группы:
                    <Dropdown value={selectedGroup} onChange={(e) => setSelectedGroup(e.value)} options={groups_names} optionLabel="name"
                              placeholder="Выберите группу" className="w-full md:w-14rem" />
                </div>

                {
                    selectedGroup !== ''?
                        <div className={'flex flex-col gap-y-10'}>
                            <div className={'flex flex-col gap-y-4 text-xl'}>
                                По курсам:
                                <DataTable header={groupCoursesHeader} filters={filtersGroupCourses} emptyMessage="Результаты отсутствуют." className="p-datatable-striped" value={preparedDetailData.group_courses_info}  paginator rows={10} tableStyle={{ minWidth: '50rem' }}  >
                                    <Column style={{ minWidth: '150px' }} field="course_name" header="Курс" sortable ></Column>
                                    <Column className={''} field="modules_count" header="Количество модулей" sortable ></Column>
                                    <Column className={''} field="course_modules_progress" header="Средний % изучения курса" sortable ></Column>
                                    <Column className={''} field="course_test_progress" header="Средний % теста" sortable ></Column>
                                </DataTable>
                            </div>

                            <div className={'flex flex-col gap-y-4 text-xl'}>
                                По обучающимся:
                                <DataTable header={groupUsersHeader} filters={filtersGroupUsers} emptyMessage="Результаты отсутствуют." className="p-datatable-striped" value={preparedDetailData.group_users_info}  paginator rows={10} tableStyle={{ minWidth: '50rem' }}  >
                                    <Column style={{ minWidth: '150px' }} field="user_fio" header="Обучающийся" sortable ></Column>
                                    <Column className={''} field="course_modules_progress" header="Средний % изучения курсов" sortable ></Column>
                                    <Column className={''} field="course_test_progress" header="Средний % тестов" sortable ></Column>
                                </DataTable>
                            </div>

                        </div>
                        :  <>
                            <DataTable value={skeletonItems} className="p-datatable-striped">
                                <Column field="code" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                <Column field="name" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                <Column field="name" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                                <Column field="name" header={bodySkeleton} style={{ width: '25%' }} body={bodySkeleton}></Column>
                            </DataTable>
                        </>
                }
            </div>
        </div>

    )
}


export default StatisticsGroupsPage;