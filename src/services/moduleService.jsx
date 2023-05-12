const useModuleService = () => {
    const getModule = async (data) => {
        let res = await fetch('http://pwopz.devaid.ru/api/Module.GetModule', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    return {getModule}
}

export default useModuleService;