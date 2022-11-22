import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import { ROWS } from '../static/row'

const Home = () => {
  return (
    <>
      <Main />
      {
        ROWS?.map(({id, title, fetchURL}) => <Row key={id} rowID={id} title={title} fetchURL={fetchURL} />)
      }
    </>
  );
};

export default Home;
