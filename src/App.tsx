import React, { Component } from 'react';

import './App.css';
import Section, { ISection } from './Section';


class App extends Component {
  sections: Array<ISection>;

  constructor(props: any) {
    super(props);
    this.sections = [
      {
        order: 0,
        text: 'Hello, this is a test!',
        src: 'seb.jpg',
        alt: 'seb'
      },
      {
        order: 1,
        text: 'Hello, this is a test!',
        src: 'climbing.jpeg',
        alt: 'climbing'
      },
      {
        order: 0,
        text: 'Hello, this is a test!',
        src: 'climbing.jpeg',
        alt: 'climbing'
      }
    ];
  }

  render() {
    let sects = this.sections.map(el =>
      <Section
        order={el.order}
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
