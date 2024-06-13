import { Rating } from 'react-simple-star-rating'
import {
  ContainerSectionRead,
  ContainerSections,
  ContentArticle,
  ContentInfoBook,
  ContentInfoRating,
  ContentSectionsInfo,
} from './styles'
import Image, { StaticImageData } from 'next/image'

interface SectioMyEbookProps {
  imageSrc: StaticImageData
}

export function SectioMyEbook({ imageSrc }: SectioMyEbookProps) {
  return (
    <ContainerSections>
      <ContentSectionsInfo>
        <span>Há 2 dias</span>
      </ContentSectionsInfo>
      <ContainerSectionRead>
        <button>
          <ContentArticle>
            <ContentInfoRating>
              <Image src={imageSrc} height={134} alt="" quality={100} />

              <ContentInfoBook>
                <div>
                  <h2>O Hobbit</h2>
                  <span>J.R.R. Tolkien</span>
                </div>

                <Rating
                  initialValue={2}
                  fillColor="#8381D9"
                  size={16}
                  readonly={true}
                  allowFraction={true}
                />
              </ContentInfoBook>
            </ContentInfoRating>
            <p>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar...
            </p>
          </ContentArticle>
        </button>
      </ContainerSectionRead>
    </ContainerSections>
  )
}
