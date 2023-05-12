const BlockImage = ({img}) => {
    return (
        <div className={'w-full flex justify-center'}>
            <img src={img.file.ORIGIN_SRC} className={'h-[50vh]'} alt={img.desc}/>
        </div>
    )
}


export default BlockImage;