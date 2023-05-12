import ReactPlayer from 'react-player'

const BlockVideo = ({video}) => {

    return (
        <div className={'w-full flex justify-center'}>
            <ReactPlayer url={video.url} />
        </div>
    )
}


export default BlockVideo;