import React, { useEffect, useState } from 'react';
import axios from "axios";
// import "./Profile.css";
import styled from "styled-components";


const AppLayout = styled.div`
background-color: red;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5px;
`;

const Header2 = styled.h2`
  color: whitesmoke;
  text-align: center;
`;

const Button = styled.button`
  color: whitesmoke;
  background-color: #2d3a2d;
  text-align: center;
  font-size: 2rem;
  border-radius: 1rem;
  margin-left: 40%;
  padding: 1%;
`;

function Records() {
    const [artistName, setArtistName] = useState("");
    const [recordImage, setRecordImage] = useState("");
    const [albumName, setAlbumName] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [description, setDescription] = useState("");
    const [sales, setSales] = useState("");

    const recordsData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/records/all");
            console.log(res);
            if (res.statusText === "OK") {
            setArtistName(res.data.allRecords[0].artist)
            setRecordImage(res.data.allRecords[0].album_cover_image)
            setReleaseDate(res.data.allRecords[0].release_year);
            setSales(res.data.allRecords[0].sales);
            setDescription(res.data.allRecords[0].description);
            setAlbumName(res.data.allRecords[0].album_name);
            console.log(res);
        }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        recordsData();
    }, []);

  return (
    
    <div className='card-grid'>
        <button className='RecordsBtn' onClick={recordsData}>New Record</button>
    
        <div className='card'>
            <img src={recordImage} style={{width: "100%"}}/>
            <h1>{artistName}</h1>
            <h2>{albumName}</h2>
            <p className='title'>{description}</p>
            <h3>{releaseDate}</h3>
            <h3>{sales}</h3>
            <p>
                <button>Add to Cart</button>
            </p>

        
    </div>
     
     </div>
  )
}

// return (
//     <div className=" bg-dark d-flex-">
     
//       <AppLayout>
//         {recordsData.length > 0 &&
//           recordsData.map((user, i) => (
//             <div key={i} className="card border border-warning m-4">
//               <img
//                 className="card-img-top"
//                 src={user.recordImage}
//                 alt="your face"
//               />
//             <h1>{user.artistName}</h1>
//             <h2>{user.albumName}</h2>
//               <div className="card-body">
//                 <h3 className="card-text"> {user.description}</h3>
//                 <h3 className="card-text"> {user.releaseDate}</h3>
//                 <h3 className="card-text"> {user.sales}</h3>
//               </div>
//             </div>
//           ))}
//       </AppLayout>
//       <Button onClick={recordsData}>Featured Records</Button>
//     </div>
//   );
// }

export default Records