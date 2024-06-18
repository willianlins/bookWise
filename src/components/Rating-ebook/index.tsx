import { Rating, RatingProps } from 'react-simple-star-rating'

interface RatingEbookProps {
  sizes?: number
  rest: RatingProps
}

export function RatingEbook({ sizes = 16, ...rest }: RatingEbookProps) {
  return (
    <Rating
      initialValue={3}
      fillColor="#8381D9"
      size={sizes}
      // readonly
      allowFraction={true}
      {...rest}
    />
  )
}
