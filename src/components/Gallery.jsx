import Card from 'react-bootstrap/Card';
import { useState, useEffect} from 'react';
import '../gallery.css'
import IconHeart from './IconHeart';

const Gallery = () => {

  const [data, setData] = useState([]);
  

  useEffect(() => {
    getData();
}, []);



const getData = async () => {
    const response = await fetch('/photos.json'); 

    const result = await response.json();
    console.log(result.photos);
    setData(result.photos || []);
};

  return (

    <>
      <div className="gallery grid-columns-5 p-3">
        {data.map((photo, index) => (
          <Card className="bg-dark text-white" key={index}>
            <Card.Img className='img-fluid img-size' src={photo.src.medium} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Text className='text-end '>
                {photo.alt}
              </Card.Text>
              <IconHeart photo={photo} />
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </>

)};

export default Gallery;
