import { HStack, List, Skeleton, SkeletonText, Text } from "@chakra-ui/react"

const GenreListSkeleton = () => {
  return (
    <List>
        <HStack>
            <Skeleton height="32px" width="32px" /> 
            <SkeletonText noOfLines={3} spacing="4" width='100%'/>  
        </HStack>
    </List>
  )
}

export default GenreListSkeleton