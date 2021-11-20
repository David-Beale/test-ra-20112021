import { useSelector } from "react-redux";
import { selectAllComics } from "../../redux/comics";

import { useFetchComics } from "./Hooks/useFetchComics";

import { ComicsList, ContentContainer } from "./ContentStyle";

import Card from "./Components/Card/Card";

export default function Content() {
  useFetchComics();
  const comics = useSelector(selectAllComics);
  console.log(comics);
  return (
    <ContentContainer>
      <ComicsList>
        {comics.map((comic) => (
          <Card key={comic.id} comic={comic} />
        ))}
      </ComicsList>
    </ContentContainer>
  );
}
