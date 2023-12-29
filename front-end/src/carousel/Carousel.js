import React from "react";
import styled from 'styled-components';
import { useState , useEffect} from "react";
//import { images } from '../assets/';
import { ReactComponent as RightSvg} from '../svgs/rightArrow.svg'
import { ReactComponent as LeftSvg} from '../svgs/leftArrow.svg'



const CenterCarousel = styled.div`
  height: 100vh;
  padding-top: 100px;
  //background-color: hsl(0, 0%, 75%);
  /* background: conic-gradient( 
    from 300deg at 50% 50%,
    hsl(198, 82%, 5%),
    hsl(265, 100%, 50%), 
    hsl(265, 100%, 50%), 
    hsl(198, 82%, 5%)
    ); */
  background-color: hsl(198, 82%, 5%);
  background-image:
  linear-gradient(
    calc(180deg - 20deg),
    transparent 0%,
    transparent 70%,
    hsl(265, 100%, 50%) 50%,
    hsl(198, 82%, 5%) 100%
  ),
  linear-gradient(
    calc(180deg - 20deg),
    transparent 0%,
    transparent 50%,
    hsl(265, 100%, 35%) 50%,
    hsl(198, 82%, 5%)100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
`

const CarouselWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 960px;
  overflow: hidden;

  @media (max-width: 950px) {
    max-width: 645px;
  }

  @media (max-width: 600px) {
    max-width: 325px;
  }
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
  box-shadow: 0px 0px 10px 1px hsl(265, 100%, 50%);
`;

const Button = styled.div`
  display: flex;
  position: absolute;
  border-radius: 50%;
  background-color: hsl(315, 100%, 50%);
  border-radius: 50%;
  top: 50%;
  
  @media (max-width: 600px) {
    top: 90%; 
    ${(props) => (props.direction === 'right' ? 'left:60%' : 'right:60%')};
  }

  /* below we move the pictures manipulating css */
  ${(props) => (props.direction === 'right' ? 'left:90%' : 'right:90%')};

/* Hover effect */
  :hover {
    transform: scale(1.3);
    background-color: hsl(315, 100%, 50%);
    border-radius: 50%;
    transition: transform 300ms;
  }

`;

const getUploadcareImageUrl = (uuid, transformations) => {
  const baseUrl = `https://ucarecdn.com/${uuid}`;
  const transformationsString = transformations.join('/');
  return `${baseUrl}/${transformationsString}/`;
};

const uuids = [
'ff75dcd1-3d8d-48e6-975f-0cec75e2cec6',
'c7c299b7-74d7-472f-94be-ecfb7cf681c6',
"cfafce80-0c86-41ba-b7ee-671ecce588b2",
'3015364a-ce6a-4b2d-9094-53a4ccf12c8a',
'8d688e91-1353-46f2-8ae7-998e5d71f3dc'
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
      <CarouselWrapper id="CarouselWrapper">
        {/* here we pass values to move hidden pictures by */}
        <CarouselTrack id="CarouselTrack"
          style={{ transform: `translateX(-${currentIndex * 320}px)` }}
        >
          {images.map((image, index) => {
            return (
              <CarouselItem id="CarouselItem" key={`img${index}`}>
                <Image id="Image" src={image} alt={`carousel-item-${index}`} />
              </CarouselItem>
            );
          })}
        </CarouselTrack>

        {/* navigation buttons or indicators */}
        <Button id="Button" direction={'left'} onClick={handlePrev}>
          <LeftSvg/>
        </Button>
        
        <Button id="Button" direction={'right'} onClick={handleNext}>
          <RightSvg  />
        </Button>
        
        
      </CarouselWrapper>
    </CenterCarousel>
  );
}
