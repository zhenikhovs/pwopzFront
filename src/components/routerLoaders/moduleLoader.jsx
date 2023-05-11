import useModuleService from "../../services/moduleService";

export async function ModuleLoader({params}) {
    // const id = params.id;
    const module_id = params.module_id;

    const {getModule} = useModuleService();

    let moduleData = await getModule(module_id)
        .catch(res => console.log(res));

    return {moduleData};
}