import React from "react";
import styled from 'styled-components';
import { useState , useEffect} from "react";
import { images } from '../assets/';


const CenterCarousel = styled.div`
  height: 100vh;
  padding-top: 100px;
  //background-color: hsl(0, 0%, 75%);
  background-image: conic-gradient(
      deeppink,
      coral,
      gold,
      coral,
      deeppink /* <-- same color! */
    );;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
`

const CarouselWrapper = styled.div`
  // arrowsize number
  // cardWidth number
  // style? object
  // scrollingDisabled boolean 
  // gap: number
  // buttonHidden? boolean
  // initialScrollOffset: number
  // maxContentWindowWidth: nnumber
  // isCircular: boolean

  // Elements ****************
  // prevButton? jsxelement
  // nextButton? jsxElement
  // children? React.ChildrenArray<jsxElement>
  /* padding-left: 10px; */
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 960px;
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  transition: transform 1s ease;
  gap:20px;
  /* transform: translateX(300px); */
`;

const CarouselItem = styled.div``;

const Image = styled.img`
  max-width: 300px;
  border-radius: 3%;
  box-shadow: 0px 0px 20px 1px hsl(265, 100%, 35%);
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? 'left:90%' : 'right:90%')};
`;

const getUploadcareImageUrl = (uuid, transformations) => {
  const baseUrl = `https://ucarecdn.com/${uuid}`;
  const transformationsString = transformations.join('/');
  return `${baseUrl}/${transformationsString}/`;
};

const uuids = [
'600ad34e-7128-44d4-b4f7-058f01bad750',
'44d7c159-4f4f-4b9c-bd65-aa7751c4a80c',
"a81fd0b4-e843-4102-af35-dc6b10ecfb03",
// Add more UUIDs as needed
];

export default function Carrousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch images from Uploadcare and update the state
    // Replace 'YOUR_UUID_HERE' with the actual UUID
    const fetchImages = async () => {
      try {
        const promises = uuids.map(async (uuid) => {
          const response = await fetch(`https://api.uploadcare.com/files/${uuid}/`);
          const data = await response.json();
          const imageUrl = getUploadcareImageUrl(uuid, [
            '-/preview/600x800/',
            '-/format/auto/',
            '-/quality/smart/'
          ]);
          return imageUrl;
        });

        const uploadedImages = await Promise.all(promises);
        setImages(uploadedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <CenterCarousel id="CenterCarousel">
      <CarouselWrapper>
        <CarouselTrack
          style={{ transform: `translateX(-${currentIndex * 320}px)` }}
        >
          {images.map((image, index) => {
            return (
              <CarouselItem key={`img${index}`}>
                <Image src={image} alt={`carousel-item-${index}`} />
              </CarouselItem>
            );
          })}
        </CarouselTrack>
        {/* Add navigation buttons or indicators */}
        <Button direction={'left'} onClick={handlePrev}>left</Button>
        <Button direction={'right'} onClick={handleNext}>right</Button>
        {/* Implement event handlers for next and previous buttons */}
      </CarouselWrapper>
    </CenterCarousel>
  );
}
