const useResultService = () => {
    const getCoursesProgress = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Result.GetCoursesProgress', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    return {getCoursesProgress}
}

export default useResultService;