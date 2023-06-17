import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {FilterMatchMode} from "primereact/api";
import {MultiSelect} from "primereact/multiselect";

import './table.scss';
import {InputText} from "primereact/inputtext";

export default function TestPage2() {

    return (
        <div className="card">
            <div className={'w-20 h-20 border group'}>
                <div className={'hidden group-hover:flex'}>
                    text
                </div>
            </div>
        </div>
    );
}