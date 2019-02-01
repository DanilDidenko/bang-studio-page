import React, { Component } from 'react';
import PortfolioCard from '../PortfolioCard';
import {Fade} from 'react-reveal';

export default class PortfolioBody extends Component {
  render() {
    return (
      <section>
          <Fade bottom>
           <PortfolioCard title={'pidar'} description={`Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон. При разработке сайта были учтены все пожелания клиента и использованы передовые технологии`} reverse ></PortfolioCard>
          </Fade>
            <Fade bottom>
                 <PortfolioCard title={'pidar'} description={`Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон. При разработке сайта были учтены все пожелания клиента и использованы передовые технологии`}  ></PortfolioCard>
            </Fade>
         <Fade bottom>
            <PortfolioCard title={'pidar'} reverse description={`Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон. При разработке сайта были учтены все пожелания клиента и использованы передовые технологии`} ></PortfolioCard>
         </Fade>
          <Fade bottom>
              <PortfolioCard title={'pidar'} description={`Корпоративынй сайт который был разработан для адвокатского фирмы в городе Херсон. При разработке сайта были учтены все пожелания клиента и использованы передовые технологии`} ></PortfolioCard>
          </Fade>
          
      </section>
    )
  }
}
