import useTestService from "../../services/testService";

export async function TestLoader({params}) {
    const test_id = params.id;
    const course_id = params.course_id;

    const data = {
        test_id,
        course_id
    }

    const {getTest} = useTestService();

    let testData = await getTest(data)
        .catch(res => console.log(res));

    return {testData};
}