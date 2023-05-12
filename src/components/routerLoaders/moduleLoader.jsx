import useModuleService from "../../services/moduleService";

export async function ModuleLoader({params}) {
    const course_id = params.id;
    const module_id = params.module_id;

    const data = {
        module_id, course_id
    }

    const {getModule} = useModuleService();

    let moduleData = await getModule(data)
        .catch(res => console.log(res));

    return {moduleData};
}