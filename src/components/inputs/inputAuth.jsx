const InputAuth = (props) => {

    const {inputLabel, inputName, inputType, value, onChange, disabled=false } = props;

    return(
        <div>
            <div className="relative">
                <input type={inputType} name={inputName} id={inputName}
                       value={value}
                       onChange={onChange}
                       required={true}
                       className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none disabled:text-[#666666] focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                       placeholder=" " disabled={disabled} />
                <label htmlFor="default_outlined"
                       className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    {inputLabel}</label>
            </div>
        </div>
    )
}

export default InputAuth;