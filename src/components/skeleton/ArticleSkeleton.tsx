

const ArticleSkeleton = () => {
    return (
        <div className='-z-10 shadow-md rounded-2xl p-4 grid grid-cols-2 gap-5 animate-pulse'>
            <div className='w-full flex justify-center items-center'>
                <div className='w-30 h-30 bg-gray-300 rounded'></div>
            </div>
            <div>
                <div className='h-5 bg-gray-300 rounded w-3/4 mb-2'></div>
                <div className='h-3 bg-gray-300 rounded w-full mb-2'></div>
                <div className='h-3 bg-gray-300 rounded w-5/6 mb-4'></div>
                <div className='h-6 bg-amber-500 rounded w-1/2 mb-3'></div>
                <div className='h-8 bg-gray-400 rounded w-full'></div>
            </div>
        </div>
    )
}

export default ArticleSkeleton
