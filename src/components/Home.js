import styled from "styled-components";
import { ImgSlider } from "./ImgSlider";
import { Viewers } from "./Viewers";
import { Recommends } from "./Recommends";
import { NewDisney } from "./NewDisney";
import { Originals } from "./Originals";
import { Trending } from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { ...doc.data(), id: doc.id }];
            break;
          case "new":
            newDisneys = [...newDisneys, { ...doc.data(), id: doc.id }];
            break;
          case "originals":
            originals = [...originals, { ...doc.data(), id: doc.id }];
            break;
          case "trending":
            trending = [...trending, { ...doc.data(), id: doc.id }];
            break;
        }
      });
       dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
    });
   
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <NewDisney />
      <Recommends />
      <Originals />
      <Trending />
    </Container>
  );
};
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
