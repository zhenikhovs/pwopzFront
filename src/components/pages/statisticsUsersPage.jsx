import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import {useLoaderData} from "react-router-dom";
import React, {useState} from "react";
import { Dropdown } from 'primereact/dropdown';
import {InputText} from "primereact/inputtext";
import {FilterMatchMode} from "primereact/api";

const StatisticsUsersPage = () => {
    const { users_progress } = useLoaderData();
    const { users_courses, users_detail_courses, users } = users_progress;

    const usersInfo = users.map(user => {
        return {
            name: user.name + ' ' + user.last_name,
            code: user.id
        }
    });
    const [selectedUser, setSelectedUser] = useState('');

    const bodySkeleton = () => {
        return <Skeleton></Skeleton>
    }

    const skeletonItems = Array.from({ length: 5 }, (v, i) => i);


    const [filtersUsers, setFiltersUsers] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const onGlobalFilterUsersChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filtersUsers };

        _filters['global'].value = value;

        setFiltersUsers(_filters);
    };
    const renderUsersHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filtersUsers.global.value} onChange={onGlobalFilterUsersChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const usersHeader = renderUsersHeader();

    const [filtersDetailUser, setFiltersDetailUser] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    });
    const onGlobalFilterDetailUserChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filtersDetailUser };

        _filters['global'].value = value;

        setFiltersDetailUser(_filters);
    };
    const renderDetailUserHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={filtersDetailUser.global.value} onChange={onGlobalFilterDetailUserChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const detailUserHeader = renderDetailUserHeader();

    return (
        <div className={'flex flex-col gap-y-8'}>
            <div className={'font-bold text-3xl text-primary-800'}>
                 Статистика по обучающимся
            </div>
            <hr/>
            <DataTable header={usersHeader} filters={filtersUsers} emptyMessage="Результаты отсутствуют." value={users_courses} removableSort  paginator rows={10} tableStyle={{ minWidth: '50rem' }}>
                <Column style={{ minWidth: '150px' }} field="user_fio" header="Обучающийся" sortable ></Column>
                <Column className={''} field="course_count" header="Количество курсов" sortable ></Column>
                <Column className={''} field="course_modules_progress" header="% изучения курсов" sortable ></Column>
                <Column className={''} field="course_test_progress" header="Средний % теста" sortable ></Column>
            </DataTable>


            <div className="flex flex-col gap-y-4 mt-8">
                <div className="flex flex-col lg:flex-row  items-baseline gap-4 font-bold text-2xl whitespace-nowrap">
                    Детальная статистика пользователя:
                    <Dropdown value={selectedUser} onChange={(e) => setSelectedUser(e.value)} options={usersInfo} optionLabel="name"
                              placeholder="Выберите пользователя" className="w-full md:w-14rem" />
                </div>

                {
                    selectedUser !== ''?
                        <DataTable header={detailUserHeader} filters={filtersDetailUser} emptyMessage="Результаты отсутствуют." value={users_detail_courses[selectedUser.code]} removableSort  paginator rows={10} tableStyle={{ minWidth: '50rem' }}>
                            <Column style={{ minWidth: '150px' }} field="course_name" header="Курс" sortable ></Column>
                            <Column className={''} field="modules_count" header="Количество модулей" sortable ></Column>
                            <Column className={''} field="course_progress" header="% изучения курсов" sortable ></Column>
                            <Column className={''} field="test_progress" header="% теста" sortable ></Column>
                        </DataTable>
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


export default StatisticsUsersPage;