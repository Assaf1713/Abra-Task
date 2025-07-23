// import { useContext, useState } from "react";
// import DBContext from "./Util/DBContext";
// import Button from "./Button";

// export default function Place({place}){
//  const DBCTX = useContext(DBContext);

//  return (
//     <li className="place-item">
//       <article>
//         <div>
//           <h2>{place.name}</h2>
//           <p className="place-item-type"> {place.type}    </p>
//           <p className="place-item-adress">{place.adress}</p>
//         </div>
//         <p className="place-item-actions">
//           <Button onClick={selectHandler}>
//             הוסף לסל
//           </Button>
//         </p>
//       </article>
//     </li>
//  )
// }