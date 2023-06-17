import {useEffect, useState} from "react";
import {Link, useLoaderData} from "react-router-dom";
import getBlockContent from "../moduleBlocks/moduleBlockController";
import useModuleService from "../../services/moduleService";


const ModulePage = () => {
    const { moduleData } = useLoaderData();
    const { module_info, modules } = moduleData;
    let previousModuleId, nextModuleId;
    getAroundModules();


    let {blocks} = module_info;


    const moduleContent = renderModuleContent();

    function renderModuleContent() {
        if(blocks){
            blocks = JSON.parse(blocks).blocks;
            return blocks.map(block =>{
                return getBlockContent(block);
            })

        } else{
            return <div className={'text-xl flex items-center justify-center h-[100px] bg-[#dadada80]'}>Контент модуля отсутствует &#128546;</div>
        }
    }

    function getAroundModules(){
        const firstLevel = modules.filter(module => !module.upper_module);
        let sortedModules = [];
        getStructureLevel(firstLevel, sortedModules);

        const index = sortedModules.findIndex(module => module.id === module_info.id);

        if(sortedModules[index-1]){
            previousModuleId = sortedModules[index-1].id;
        }

        if(sortedModules[index+1]){
            nextModuleId = sortedModules[index+1].id;
        }
    }

    function getStructureLevel(levelModules, sortedModules){
        levelModules.forEach(levelModule => {
            sortedModules.push(levelModule);

            const newLevelModules = modules.filter(module => module.upper_module === levelModule.id);
            if(newLevelModules.length>0){
                getStructureLevel(newLevelModules, sortedModules);
            }
        })
    }


    return (
        <div className={'flex flex-col gap-y-8'}>
            <h1 className={'text-3xl font-bold text-primary-800'}>{module_info.name}</h1>
            <div className="relative text-base md:text-xl">
                    {
                        previousModuleId?
                            <Link to={'../'+previousModuleId} relative="path" className="absolute left-0  text-primary-700">
                                Предыдущий модуль
                            </Link> :
                            null
                    }
                    {
                        nextModuleId?
                            <Link to={'../'+nextModuleId} relative="path" className="absolute right-0 text-primary-700">
                                Следующий модуль
                            </Link> :
                            null
                    }
            </div>
            <hr/>
            <div className="flex flex-col gap-y-8">
                {moduleContent}
            </div>
        </div>
    )
}


export default ModulePage;