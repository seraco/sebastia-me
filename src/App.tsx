import React, { Component } from 'react';

import './App.css';
import texts from './text/about.json';
import Section, { ISection } from './Section';


class App extends Component {
  sections: Array<ISection>;

  constructor(props: any) {
    super(props);
    this.sections = [
      {
        order: 0,
        title: texts.heading.join(''),
        text: texts.intro.join('') + ' ' + texts.studies.join(''),
        src: 'seb.jpg',
        alt: 'seb'
      },
      {
        order: 1,
        title: '',
        text: texts.coding.join(''),
        src: 'coding.jpeg',
        alt: 'climbing'
      },
      {
        order: 0,
        title: '',
        text: texts.work.join('') + ' ' + texts.sport.join(''),
        src: 'climbing.jpeg',
        alt: 'climbing'
      }
    ];
  }

  render() {
    let sects = this.sections.map(el =>
      <Section
        order={el.order}
        title={el.title}
        text={el.text}
        src={el.src}
        alt={el.alt}>
      </Section>
    );
    return (
      <div className="App">
        {sects}
      </div>
    );
  }
}

export default App;
