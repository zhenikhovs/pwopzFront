import './moduleBlockText.scss';

const BlockButtonLink = ({buttonLink}) => {

    return (
        <a href={buttonLink.url} className={'w-1/2 self-center text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '}>
            {buttonLink.title}
        </a>
    )
}


export default BlockButtonLink;