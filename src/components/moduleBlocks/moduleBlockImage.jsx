const BlockImage = ({img}) => {
    return (
        <div className={'w-full flex justify-center'}>
            <img src={img.file.ORIGIN_SRC} className={'object-contain w-full h-[300px] md:h-[400px] xl:h-[50vh]'} alt={img.desc}/>
        </div>
    )
}


export default BlockImage;