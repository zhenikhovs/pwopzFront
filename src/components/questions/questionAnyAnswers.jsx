const QuestionAnyAnswers = ({question, index}) => {

    return (
        <div className={'flex flex-col gap-y-2'}>
            <div className={'flex gap-x-3 items-baseline'}>
                <div className={'text-2xl'}>Вопрос № {index+1}.</div>
                <div className={'text-xl'}>{question.name}</div>
            </div>

            <div className="flex flex-col w-max gap-y-2">
                {question.answers.map((answer,index) => {
                    return <div className="flex items-center">
                        <input name={question.id} id={question.id + '_' +index} type="checkbox" value={answer}
                               className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"/>
                        <label htmlFor={question.id + '_' +index}
                               className="ml-2 text-sm font-medium text-gray-900">{answer}</label>
                    </div>
                })}

            </div>
        </div>
    )
}


export default QuestionAnyAnswers;
