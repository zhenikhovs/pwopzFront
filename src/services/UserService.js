const useUserService = () => {
    const getUser = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Auth.GetUser', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    return {getUser}
}

export default useUserService;