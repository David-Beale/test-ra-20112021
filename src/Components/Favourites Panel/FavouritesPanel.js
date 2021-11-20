import FavouritesContent from "./Components/FavouritesContent/FavouriteContent";
import FavouritesHeader from "./Components/FavouritesHeader/FavouritesHeader";
import { FavouritesPanelContainer } from "./FavouritesPanelStyle";

export default function FavouritesPanel() {
  return (
    <FavouritesPanelContainer>
      <FavouritesHeader />
      <FavouritesContent />
    </FavouritesPanelContainer>
  );
}
