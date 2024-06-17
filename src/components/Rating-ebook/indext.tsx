import { Rating } from 'react-simple-star-rating'

export function RatingEbook() {
  return (
    <Rating
      initialValue={2}
      fillColor="#8381D9"
      size={16}
      readonly={true}
      allowFraction={true}
    />
  )
}
