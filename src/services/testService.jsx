import {data} from "autoprefixer";

const useTestService = () => {
    const getUserTests = async () => {
        let res = await fetch('http://pwopz.devaid.ru/api/Test.GetUserTests', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    const getTest = async (data) => {
        let res = await fetch('http://pwopz.devaid.ru/api/Test.GetTest', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    const sendTestResults = async (data) => {
        let res = await fetch('http://pwopz.devaid.ru/api/Test.AddDoneTest', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    return {getUserTests, getTest, sendTestResults}
}

export default useTestService;