import {Link, useLoaderData} from "react-router-dom";

import './course_structure.scss';

const CoursePage = () => {
    const { courseData } = useLoaderData();

    const { modules, course_info} = courseData;


    const structure = renderStructure();

    function renderStructure(){
        const firstLevel = modules.filter(module => !module.upper_module);

        return renderStructureLevel(firstLevel);
    }

    function renderStructureLevel(newLevelModules){
        return newLevelModules.map(newLevelModule => {
            const newLevelModules = modules.filter(module => module.upper_module === newLevelModule.id);
            let newLevel;
            if(newLevelModules.length>0){
                newLevel=<ol className={'pl-5 space-y-1'}>
                    {renderStructureLevel(newLevelModules)}
                </ol>;
            }

            return <li className={''}>
                <Link to={newLevelModule.id}>{newLevelModule.name}</Link>
                {newLevel}
            </li>
        })
    }

    return (
        <div className={'flex flex-col gap-y-8'}>
            <div className="flex flex-col gap-y-5 ">
                <h1 className={'text-3xl font-bold text-primary-800'}>{course_info.name}</h1>
                {course_info.description?
                    <div className={'flex flex-col gap-y-2'}>
                        <div className="font-bold text-xl">Описание курса:</div>
                        <div className={'flex gap-x-4 w-1/2'}>{course_info.description}</div>
                    </div> : null
                }
            </div>
            <hr/>
            {
                modules.length > 0 ?
                    <div className={'flex flex-col gap-y-4'}>
                        <div className="font-bold text-2xl text-primary-700">Структура курса:</div>
                        <div className={'course_structure flex flex-col text-xl pl-5' }>
                            <ol className={'space-y-1'}>{structure}</ol>
                        </div>
                    </div> : null
            }
        </div>
    )
}


export default CoursePage;