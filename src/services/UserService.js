const useUserService = () => {
    const getUser = async (data) => {
        let res = await fetch('http://pwopz.devaid.ru/api/Auth.GetUser', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw new Error(await res.errorMessage);
        return res;
    }

    return {getUser}
}

export default useUserService;