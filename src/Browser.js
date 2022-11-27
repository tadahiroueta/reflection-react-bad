import { useSelector } from 'react-redux'
import { selectTitle, isPreviewOpen } from './store'
import ThumbnailRow from './ThumbnailRow'
import Preview from './Preview'


export default function Browser({ genres }) {
    const isBlurred = useSelector(isPreviewOpen)
    const title = useSelector(selectTitle)

    return (
        <div className="browser">
            {title ? <Preview /> : null}
            <div className={`thumbnail-rows ${isBlurred ? "blurred" : null}`}>
                {genres.map((genre) => {
                    const genreName = genre.name
                    return <ThumbnailRow key={genreName} name={genreName} titles={genre.titles} />
                })}
            </div>
        </div>
    )
}