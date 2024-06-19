import { Rating, RatingProps } from 'react-simple-star-rating'

interface RatingEbookProps extends RatingProps {
  sizes?: number
}

export function RatingEbook({ sizes = 16, ...rest }: RatingEbookProps) {
  return (
    <Rating
      // initialValue={3}
      fillColor="#8381D9"
      size={sizes}
      // readonly
      allowFraction={true}
      {...rest}
    />
  )
}
