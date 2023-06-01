import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {FilterMatchMode} from "primereact/api";
import {MultiSelect} from "primereact/multiselect";

import './table.scss';
import {InputText} from "primereact/inputtext";

export default function TestPage2() {
    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
        name: { value: null, matchMode: FilterMatchMode.IN },
    });

    const products = [
        {
            code: 12121,
            name: "Скотт",
            category: 3,
            quantity: 4,
        },
        {
            code: 15456,
            name: "Элисон",
            category: 3,
            quantity: 4,
        },
        {
            code: 1,
            name: "Дэрэк",
            category: 3,
            quantity: 4,
        },
        {
            code: 1,
            name: "Дэрэ5к",
            category: 3,
            quantity: 4,
        },
        {
            code: 1,
            name: "Дэр3эк",
            category: 3,
            quantity: 4,
        },
        {
            code: 1,
            name: "Дэрэ1к",
            category: 3,
            quantity: 4,
        },
        {
            code: 1,
            name: "Дэр2эк",
            category: 3,
            quantity: 4,
        }
    ]


    const representativeRowFilterTemplate = (options) => {
        return (
            <MultiSelect className={'p-[0 0.75rem]'}
                value={options.value}
                options={products.map(product => product.name)}
                onChange={(e) => options.filterApplyCallback(e.value)}
                maxSelectedLabels={1}
            />
        );
    };

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    const renderHeader = () => {
        return (
            <div className="flex justify-end">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Поиск элемента" />
                </span>
            </div>
        );
    };
    const header = renderHeader();

    return (
        <div className="card">
            <DataTable header={header} filterDisplay="row" value={products} paginator rows={3} tableStyle={{ minWidth: '50rem' }} filters={filters}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column showFilterMenu={false}  filter filterElement={representativeRowFilterTemplate} field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}