import React from "react";
import styled from "styled-components";
import { sounds } from "../soundMap";
// import SoundBox from "./SoundBox";
import NewSoundBox from "./NewSoundBox";
import media from "styled-media-query";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const SearchBox = styled.div`
  display: flex;
  width: 50rem;
  height: 4rem;
  ${media.lessThan('900px')`
    width: 50%;  
  `}
  justify-content: center;
`;
const SearchInput = styled.input`
  display: flex;
  width: 80%;
  font-size: 1.5rem;
  padding: .3rem;
  border: 2px solid #363636;
  border-radius: 4px;
`;

const SoundPanel = () => {
  
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [favorites, setFavorite] = React.useState([]);

  const AddFavorite = (sound) => {
    let newFavorites = favorites;
    newFavorites.push(sound)
    setFavorite(newFavorites)

    console.log('favorites', favorites)
  }

  const RemoveFavorite = (sound) => {
    let newFavorites = favorites;

    var index = newFavorites.indexOf(sound);
    while (index > -1) {
      newFavorites.splice(index, 1);
      index = newFavorites.indexOf(sound);
    }
    setFavorite(newFavorites)

    console.log('favorites', favorites)
  }



  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const resultSounds = sounds.filter((sound) =>
      sound.name.toLowerCase().includes(searchTerm.toLowerCase()) ||  sound.file.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(resultSounds);

    // favorites.map( (favorite)=> {
    //   let newArray = searchResults;
    //   var index = newArray.indexOf(favorite);
    //   newArray.unshift(newArray.splice(index, 1)[0]);
    //   setSearchResults(newArray)
    // })

  }, [searchTerm]);

  return (
    <>
      <MainContainer>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </SearchBox>
        {
          searchResults.length !== 0 && searchTerm !== "" && 
          <Container>
            {searchResults.map((sound) => {
              return <NewSoundBox soundName={sound} addFavorite={AddFavorite} removeFavorite={RemoveFavorite}/>;
            })}
          </Container>
        }
        <Container>
            {sounds.map((sound) => {
              return <NewSoundBox soundName={sound}/>;
            })}
        </Container>
      </MainContainer>
    </>
  );
};

export default SoundPanel;
