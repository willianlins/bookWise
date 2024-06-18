import { Rating } from 'react-simple-star-rating'

interface RatingEbookProps {
  sizes?: number
}

export function RatingEbook({sizes = 16}:RatingEbookProps ) {
  return (
    <Rating
      initialValue={3}
      fillColor="#8381D9"
      size={sizes}
      readonly={true}
      allowFraction={true}
    />
  )
}
