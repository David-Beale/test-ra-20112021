import { useSelector } from "react-redux";
import { selectComicById } from "../../../../redux/comics";
import { Button, CardContainer, ComicCard, Image, Title } from "./CardStyle";

export default function Card({ comicId }) {
  const comic = useSelector((state) => selectComicById(state, comicId));
  return (
    <CardContainer>
      <ComicCard>
        <Image
          src={`${comic.thumbnail.path}/portrait_uncanny.jpg`}
          alt={`${comic.title} image`}
        />
        <Title>{comic.title}</Title>
        <Button>Add to favourites</Button>
      </ComicCard>
    </CardContainer>
  );
}
