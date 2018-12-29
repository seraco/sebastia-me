import React, { Component } from 'react';

import './App.css';
import texts from './text/about.json';
import Section, { ISection } from './Section';

interface IState {
  width: number;
  height: number;
}

class App extends Component {
  state: IState;
  sections: Array<ISection>;

  constructor(props: any) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.sections = [
      {
        order: 0,
        title: texts.heading.join(''),
        text: texts.intro.join('') + ' ' + texts.studies.join(''),
        src: 'seb.jpg',
        alt: 'seb'
      },
      {
        order: 0,
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
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    let ratio = this.state.width / this.state.height;
    let orient = ratio > 1 ? 'landscape' : 'portrait';
    let sects = this.sections.map((el, idx) =>
      <Section
        order={orient === 'landscape' ? idx % 2 : 0}
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
