const useResultService = () => {

    const getUserCoursesProgress = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Result.GetUserCoursesProgress', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    const getStatisticsCourses = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Result.GetStatisticsCourses', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    return {getUserCoursesProgress, getStatisticsCourses}
}

export default useResultService;