import GalleryItem from "./GalleryItem"
import { useContext } from "react"
import { DataContext} from '../context/DataContext'

export default function Gallery(){
    const data = useContext(DataContext)
    const display = data.map((item,i)=>{
        return(
            <GalleryItem item={item} key={i} />
        )
    })
    return(
        <div>
            <h1>Gallery</h1>
            {display}
        </div>
    )
}