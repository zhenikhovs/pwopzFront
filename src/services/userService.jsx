const useUserService = () => {
    const getUser = async () => {
        let res = await fetch('http://edu.legacystudio.ru/api/User.GetUser', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    const updateUser = async (data) => {
        let res = await fetch('http://edu.legacystudio.ru/api/User.UpdateUser', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    const updateUserPassword = async (data) => {
        let res = await fetch('http://edu.legacystudio.ru/api/User.UpdateUserPassword', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    return {getUser, updateUser, updateUserPassword}
}

export default useUserService;