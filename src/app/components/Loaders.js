import { Skeleton } from 'antd';

export const BlogxCardSkel = ({ totalFields = 5, className = '' }) => {
    return (
        <div className={`loader-wrapper w-100 ${className}`}>
            <div className="ld-row">
                {Array?.from({ length: totalFields }, (_, id) => (
                    <div className="ld-col" key={id}>
                        <div className="skel-inner">
                            <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} className='img-plgc' />
                            <Skeleton active title={false} paragraph={{ rows: 1, width: "70%" }} className='para-skl1' />
                            <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} className='para-skl' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const BlogxCardDtSkel = ({ className = '' }) => {
    return (
        <div className={`loader-wrapper w-100 ${className}`}>
            <div className="skel-inner">
                <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} className='img-plgc' />
                <Skeleton active title={false} paragraph={{ rows: 1, width: "70%" }} className='para-skl1' />
                <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} className='para-skl' />
            </div>
        </div>
    )
}


export const ProdxCardSkel = ({ totalFields = 5, className = '' }) => {
    return (
        <div className={`loader-wrapper w-100 ${className}`}>
            <div className="ld-row">
                {Array?.from({ length: totalFields }, (_, id) => (
                    <div className="ld-col" key={id}>
                        <div className="skel-inner">
                            <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} className='img-plgc' />
                            <Skeleton active title={false} paragraph={{ rows: 1, width: "70%" }} className='para-skl1' />
                            <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} className='para-skl' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const ProdGalleySktl = () => {
    return (
        <div className="skel-inner productGalley-inner-sktl">
            <Skeleton active title={false} paragraph={{ rows: 1, width: "100%" }} className='gal-plgc' />
        </div>
    )
}

export const ProdDxtsSktl = () => {
    return (
        <div className="skel-inner prodcDt-inner-sktl">
            <Skeleton active title={false} paragraph={{ rows: 1, width: "40%" }} className='title-plgc' />
            <Skeleton active title={false} paragraph={{ rows: 1, width: "55%" }} className='table-plgc' />
            <Skeleton active title={false} paragraph={{ rows: 1, width: "30%" }} className='button-plgc' />
        </div>
    )
}