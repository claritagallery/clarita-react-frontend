import React from "react"
import { PreviousOrNext } from "../data/types"
import { Link } from "react-router-dom"

interface PhotoThumbParams {
  photo: PreviousOrNext
  albumId?: string
}
function PhotoThumb({ photo, albumId }: PhotoThumbParams) {
  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }

  return (
    <div className="thumb" onClick={(e) => stopPropagation(e)}>
      {photo && (
        <Link to={`/albums/${albumId}/photos/${photo.id}`}>
          <button className="button-thumb">{photo.title}</button>
        </Link>
      )}
    </div>
  )
}
// function PhotoThumb({ previous, next, albumId }: PhotoThumbParams) {
//   console.log(albumId)
//   function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//     e.stopPropagation()
//   }
//   const previousId = previous ? previous.id : null
//   const nextId = next ? next.id : null
//   return (
//     <div className="photo-thumb-container">
//       <div className="thumb not-prev-or-next" onClick={(e) => stopPropagation(e)}>
//         {previousId && (
//           <Link to={`/albums/${albumId}/photos/${previousId}`}>
//             {" "}
//             <button className="button-thumb">{previous ? previous.name : null}</button>
//           </Link>
//         )}
//       </div>
//       <div className="thumb not-prev-or-next" onClick={(e) => stopPropagation(e)}>
//         {nextId && (
//           <Link to={`/albums/${albumId}/photos/${nextId}`}>
//             {" "}
//             <button className="button-thumb">{next ? next.name : null}</button>
//           </Link>
//         )}
//       </div>
//     </div>
//   )
// }

export default PhotoThumb
