import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.  
  return (
    <VStack rounded="lg" alignItems="flex-start" bg="white" color="black">
      <Image rounded="lg" w="100%" src={imageSrc} alt={title} />
      <VStack alignItems="flex-start" padding={3} style={{margin:"auto"}}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack><Text>See more</Text><FontAwesomeIcon icon={faArrowRight} size="1x" /></HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
