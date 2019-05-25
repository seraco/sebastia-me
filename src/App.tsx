import React, { Component } from 'react';

import './App.css';
import Section, { ISection } from './Section';
import Social from './Social';
import Link from './Link';

interface IState {
  width: number;
  height: number;
}

class App extends Component {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = { width: 0, height: 0 };
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
    return (
      <div className="App">
        <Section
          order={orient === 'landscape' ? 0 : 0}
          title="Hey! My name is Seb"
          src="seb.jpg"
          alt="seb">
          I am an Aerospace Engineer and Software Developer. I studied Aerospace
          Engineering at the <Link href="https://www.upc.edu/en">Polytechnic
          University of Catalonia</Link>. During my studies, I moved abroad to
          learn more about different cultures and approaches to teaching. As an
          Erasmus student, I studied at
          the <Link href="https://www.polimi.it/en/">Polytechnic University of
          Milan</Link>; I later undertook my MSc
          at <Link href="https://www.imperial.ac.uk/">Imperial College
          London</Link>.
        </Section>
        <Section
          order={orient === 'landscape' ? 1 : 0}
          src="coding.jpeg"
          alt="coding">
          I love coding! In parallel to my university studies, I expanded my
          knowledge in Computer Science. I enjoy attending hackathons, where an
          idea can materialise into a working project in just a few hours. I
          have previously been fully financed in two programming
          competitions: <Link href="http://visionhack.misis.ru/">VisionHack
          </Link> in Moscow and <Link href="https://hackdays.fcbayern.com/">FC
          Bayern HackDays</Link>. Additionally, I have
          worked as a freelancer on several projects.
        </Section>
        <Section
          order={orient === 'landscape' ? 0 : 0}
          src="climbing.jpeg"
          alt="climbing">
          After completing my studies at Imperial College, I
          joined <Link href="https://open-cosmos.com">Open Cosmos
          Ltd</Link>. There I led the Front End development for the company,
          focusing on creating an intuitive and robust platform. Now, I am a
          Mobile Developer at <Link href="https://www.wetipp.com">WeTipp</Link>.
          I am proficient in React and Angular. During my free time, I love
          doing mountaineering sports. If you want to join me, you’ll probably
          find me in the mountains.
        </Section>
        <Social></Social>
      </div>
    );
  }
}

export default App;
