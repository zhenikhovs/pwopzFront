const useCourseService = () => {
    const getUserCourses = async () => {
        let res = await fetch('http://edu.legacystudio.ru/api/Course.GetUserCourses', {
            method: 'GET',
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    const getCourse = async (course_id) => {
        const data = {
            course_id
        }

        let res = await fetch('http://edu.legacystudio.ru/api/Course.GetCourse', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json());

        if(res.status === 'error') throw await res.error_message;
        return res.result;
    }

    return {getUserCourses, getCourse}
}

export default useCourseService;