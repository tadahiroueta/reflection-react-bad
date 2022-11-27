import { useDispatch } from "react-redux"
import { setTitle } from "./store"

export default function ThumbnailRow({ name, titles }) {
    const dispatch = useDispatch()
    const openPreview = (code) => dispatch(setTitle(code))

    return (
        <div className="thumbnail-row">
            <h2 className="thumbnail-row-name">{name}</h2>
            <div className="thumbnail-treadmill">
                {titles.map((code) => <img 
                    className='thumbnail' 
                    src={`${process.env.PUBLIC_URL}/images/${code}.jpg`} 
                    alt={code}
                    onClick={() => openPreview(code)} 
                    key={code}
                />)}
            </div>
        </div>
    )
}