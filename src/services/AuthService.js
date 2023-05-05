const useAuthService = () => {
    const logIn = async (data) => {
        let res = await fetch('http://pwopz.devaid.ru/api/Auth.Login', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());

        if(res.status === 'error') throw await res.errormessage;
        return res;
    }

    const logOut = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Auth.Logout', {
            method: 'GET'
        }).then(response => response.json());

        if(res.status === 'error') throw await res.errormessage;
        return res;
    }

    return {logIn, logOut}
}

export default useAuthService;