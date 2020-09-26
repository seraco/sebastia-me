import React, { Component } from 'react';

import './App.css';
import Section, { ISection } from './Section';
import Social from './Social';
import Link from './Link';

interface IState {
  width: number;
  height: number;
}

const links = {
  'corrux': <Link href="https://corrux.io">Corrux</Link>,
  'open-cosmos': <Link href="https://open-cosmos.com">Open Cosmos</Link>,
  'react': <Link href="https://ca.reactjs.org">React</Link>,
  'wetipp': <Link href="https://www.wetipp.com">WeTipp</Link>,
};

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
          src="seb.webp"
          alt="seb">
          I'm a Software Developer and Aerospace Engineer.
          <br /><br />
          Currently working at {links['corrux']}. Previously,
          at {links['wetipp']} and {links['open-cosmos']}. I maintain
          the {links['react']} website translation into Catalan.
          In my free time, I love climbing, hiking and skiing. If you want
          to find me, I'll probably be in the mountains.
        </Section>
        <Social />
      </div>
    );
  }
}

export default App;
