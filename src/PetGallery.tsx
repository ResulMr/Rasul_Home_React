import React, { useState } from 'react';
import { Box, Button, Grid, Image, Text } from '@chakra-ui/react';

const PetGallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isDog, setIsDog] = useState<boolean>(false);  




  
  const fetchDogImages = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
    const data = await response.json();
    setImages(data.message); 
    setIsDog(true); 
  };


  const fetchCatImages = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=6');
    const data = await response.json();
    setImages(data.map((cat: { url: string }) => cat.url));  
    setIsDog(false);  
  };

  return (
    <Box textAlign="center"  p={5}>
      <Text fontSize="3xl" color={'white'} fontWeight="bold" mb={6}>Pet Gallery</Text>

  
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {images.map((url, index) => (
          <Image key={index} src={url} alt={`Pet ${index + 1}`} borderRadius="md" />
        ))}
      </Grid>

  
      <Button colorScheme="teal" size="lg" onClick={fetchDogImages} mt={4} >
        Show Dogs
      </Button>

   
      <Button colorScheme="teal" size="lg" onClick={fetchCatImages} mt={4} >
        Show Cats
      </Button>
    </Box>
  );
};

export default PetGallery;
