const QuestionEnterSpace = ({question, index}) => {

    return (
        <div className={'flex flex-col gap-y-2'}>
            <div className={'flex gap-x-3 items-baseline'}>
                <div className={'text-2xl'}>Вопрос № {index+1}.</div>
                <div className={'text-xl'}>{question.name}</div>
            </div>

            <div className="flex flex-col w-max">
                <label htmlFor={question.id}
                       className="flex text-sm font-medium text-gray-900">Впишите ответ:</label>
                <input type="text" name={question.id} id={question.id}
                       className="w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                       placeholder="Ответ" required/>
               </div>
        </div>
    )
}


export default QuestionEnterSpace;
