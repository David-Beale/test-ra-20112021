import { Button, CardContainer, ComicCard, Image, Title } from "./CardStyle";

export default function Card({ comic }) {
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
