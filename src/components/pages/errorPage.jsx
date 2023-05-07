import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold text-gray-400 md:text-3xl">Извините, мы не смогли найти страницу.</p>
                    <p className="mt-4 mb-8 text-gray-500">Проверьте адрес или вернитесь на главную страницу.</p>
                    <Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-gray-600 text-[#FFF]">Back to homepage</Link>
                </div>
            </div>
        </section>

    )
}


export default ErrorPage;