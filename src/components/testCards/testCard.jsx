import {Link} from "react-router-dom";

const TestCard = ({test}) => {
    const {course_id, course_name, test_id, test_name} = test;
    return (
        <div
            className="flex flex-col justify-between min-w-[300px] p-6 bg-white border border-gray-200 rounded-lg shadow">
            <Link to={test_id+'/'+course_id}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{test_name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">Тест курса <span className={'font-bold'}>"{course_name}"</span></p>
            <Link to={test_id+'/'+course_id}
               className="self-end inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                Перейти к тесту
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                </svg>
            </Link>
        </div>
    )
}


export default TestCard;