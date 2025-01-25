import React from 'react';
import ContentLeft from '../../components/contentLeft/ContentLeft';
import ContentRight from '../../components/contentright/ContentRight';
import style from "../home/home.module.scss";



function Home() {
  return (
    <>
    <section className={`${style["home-content-wrapper"]}`}>
    <ContentLeft />
    <ContentRight />
    </section>
    </>
  )
}

export default Home