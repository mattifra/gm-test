import React, { Component } from 'react';
import styled from 'styled-components';
import {Container} from '../commons/Container'
import {ArticleBase, ArticleHero, ArticleMid} from '../commons/Articles'
import {ListUnstyled} from '../commons/Lists'
import {mediaMin, mediaMax} from '../config/mq'
import {SectionTitle} from '../commons/Typography'


//Component used for displaying articles


const ArticlesSection = styled.section``

const ArticlesList = styled(ListUnstyled)`
    display: grid;
    grid-gap: 30px;

    ${mediaMin.small`
      grid-template-columns: repeat(6, 1fr);
    `}
`

const ArticlesListItem = styled.li`

  &:nth-child(1) {
    ${mediaMax.small`
      margin:0 -20px 20px -20px;
    `}
    
    ${mediaMin.small`
       grid-column: 1 / 4;
       grid-row: 1 / 4;
    `}

  }

  &:nth-child(2), &:nth-child(3), &:nth-child(4) {
    ${mediaMin.small`
       grid-column: 4 / 7;
    `}
    
    figure {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: minmax(18px, 120px) 1fr;
      align-items: center;


      ${mediaMin.small`
        grid-template-columns: minmax(100px, 226px) 1fr;
      `}

    }

  }

  &:nth-child(5), &:nth-child(6), &:nth-child(7) {
    text-align: center;

    figcaption {
      margin-top: -20px;
      h3 {
        margin-top: 10px;
      }
    }

    .Tag {
      color: white; 
      background: var(--primary-color);
      padding: 4px 8px;
    }
  }

  &:nth-child(5){
    ${mediaMin.small`
      grid-column: 1 / 3;
    `}
  }
  &:nth-child(6){
    ${mediaMin.small`
      grid-column: 3 / 5;
    `}
  }
  &:nth-child(7){
    ${mediaMin.small`
       grid-column: 5 / 7;
    `}
  }
`


const GridArticles = (props) => {

  return (
    <ArticlesSection>
        <ArticleHero  img={props.list[0].coverImage} title={props.list[0].title}/>
      <Container>
        <SectionTitle>Small changes</SectionTitle>
        <ArticlesList>
          <ArticlesListItem>
            <ArticleMid  img={props.list[1].coverImage} title={props.list[1].title} tag={props.list[1].tag}/>
          </ArticlesListItem>
          {props.list.map((news, i) => 
          i > 1 ?
            <ArticlesListItem key={news.id}>
              <ArticleBase  img={news.coverImage} title={news.title} tag={news.tag}/>
            </ArticlesListItem>
          : null )}
        </ArticlesList>
      </Container>
    </ArticlesSection>
  )
}

export default GridArticles
   


