import { useSelector } from "react-redux";
import { selectAllComics } from "../../redux/comics";
import { ContentContainer } from "./ContentStyle";
import { useFetchComics } from "./Hooks/useFetchComics";

export default function Content() {
  useFetchComics();
  const comics = useSelector(selectAllComics);
  console.log(comics);
  return <ContentContainer></ContentContainer>;
}
