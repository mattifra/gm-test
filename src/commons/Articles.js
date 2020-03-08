import React from 'react';
import styled from 'styled-components';
import {Container} from './Container'
import {ImgFull} from './Images'
import {Tag} from './Tags'
import {TitleArticle, TitleArticleBig} from '../commons/Typography'
import {mediaMin, mediaMax} from '../config/mq'

//Atomic articles for displaying them in other components



//Basic article

const Article = styled.article``
const Figure = styled.figure``;
const Figcaption = styled.figcaption``;


export const ArticleBase = (props)=> {
  return (
    <Article>
      <Figure>
        <a href="#"><ImgFull src={props.img} /></a>
        <Figcaption>
          <Tag className='Tag' href="#">{props.tag}</Tag>
          <TitleArticle  text={props.title} href="#" />
        </Figcaption>
      </Figure>
    </Article>
  );
}



//Hero article


const FigureHero = styled(Figure)`
 position: relative; 
 overflow: hidden;
 margin-bottom: 60px;

 &:after {
   content: "";
   padding-bottom: 100%;
   display: block;
   ${mediaMin.small`
    padding-bottom: 52.23%;
  `}
 }
 img {
    position: absolute;
    height: 100%;
    max-width: none;
    width: auto;
    left: 50%;  
    transform: translateX(-50%);
  }
`

const FigCaptionFull = styled(Figcaption)`
    position: absolute;
    padding-bottom: 40px;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
`;

const FigcaptionContainer = styled(Container)`
  width: 100%;
`


export const ArticleHero = (props)=> {
  return (
    <Article>
      <FigureHero>
        <a href="#"><ImgFull src={props.img} /></a>
        <FigCaptionFull>
          <FigcaptionContainer>
            <TitleArticleBig  text={props.title} href="#" />
          </FigcaptionContainer>
        </FigCaptionFull>
      </FigureHero>
    </Article>
  );
}




//Mid sized  article


const ArticleFull = styled(Article)`
  height: 100%;
  ${mediaMax.small`
    background: var(--primary-color);
    padding-bottom: 36px;
  `}
`
const FigureMid = styled(Figure)`
${mediaMin.small`
  position: relative; 
  overflow: hidden;
  height: 100%;`
}`

const ImgAbsolute = styled.img`
  ${mediaMin.small`
    position: absolute;
    height: 100%;
    max-width: none;
    width: auto;
    left: 50%;  
    transform: translateX(-50%);
  `}
`

const FigcaptionMid = styled(Figcaption)`
  ${mediaMax.small`
    background: white;
    margin: -40px 40px 0 40px;
    position: relative;
    padding: 15px;
  `}
  ${mediaMin.small`
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
    color: #fff;
  `}
`

export const ArticleMid = (props)=> {
  return (
    <ArticleFull>
      <FigureMid>
        <a href="#"><ImgAbsolute src={props.img} /></a>
        <FigcaptionMid>
            <Tag className='Tag' href="#">{props.tag}</Tag>
            <TitleArticle  text={props.title} href="#" />
        </FigcaptionMid>
      </FigureMid>
    </ArticleFull>
  );
}