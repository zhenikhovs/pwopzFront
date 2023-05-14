import useTestService from "../../services/testService";

export async function TestsLoader() {
    const {getUserTests} = useTestService();

    let {tests, courses_tests_info} = await getUserTests()
        .catch(res => console.log(res));

    return {tests,courses_tests_info};
}