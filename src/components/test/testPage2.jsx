import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function TestPage2() {

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
        }
    ]


    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}