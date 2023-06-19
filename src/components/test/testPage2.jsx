import React, { useState, useEffect } from 'react';
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";

export default function TestPage2() {

    const value = [
        {
            count:1,
            name:'alalala'
        },
        {
            count:2,
            name:'Lola'
        }
    ]

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(value);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array',
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE =
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE,
                });

                module.default.saveAs(
                    data,
                    fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
                );
            }
        });
    };

    const header = (
        <div className="flex align-items-center justify-end gap-2">
            <Button
                type="button"
                icon="pi pi-file-excel"
                severity="success"
                rounded
                onClick={exportExcel}
                data-pr-tooltip="XLS"
            />
        </div>
    );

    return (
        <div>
            <DataTable header={header} emptyMessage="Результаты отсутствуют." value={value} removableSort  paginator rows={10} tableStyle={{ minWidth: '50rem' }}>
                <Column className={''} field="count" header="Количество обучающихся" sortable ></Column>
                <Column className={''} field="name" header="Количество курсов" sortable ></Column>
            </DataTable>

        </div>

    )
}