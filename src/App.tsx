import React, { Component } from 'react';

import './App.css';
import Section from './Section';
import Social from './Social';
import Link from './Link';

enum ELanguages {
  ca = 'ca',
  en = 'en',
}

type TLanguage = keyof typeof ELanguages;

interface IState {
  language: TLanguage;
  window: {
    width: number;
    height: number;
  };
}

const links = {
  'corrux': <Link href="https://corrux.io">Corrux</Link>,
  'open-cosmos': <Link href="https://open-cosmos.com">Open Cosmos</Link>,
  'react': <Link href="https://ca.reactjs.org">React</Link>,
  'wetipp': <Link href="https://www.wetipp.com">WeTipp</Link>,
};

const title = {
  'ca': 'Uep! Som en Sebastià',
  'en': 'Hey! My name is Seb',
};

const text = {
  'ca': () => (
    <>
      Som programador i enginyer aeronàutic.
      <br /><br />
      Actualment treball a {links['corrux']}. Anteriorment,
      a {links['wetipp']} i {links['open-cosmos']}. Mantenc la
      traducció a català de la pàgina web de {links['react']}.
      En el meu temps lliure, m'encanta escalar, anar d'excursió i esquiar.
      Si vols trobar-me, probablement estaré a les muntanyes.
    </>
  ),
  'en': () => (
    <>
      I'm a Software Developer and Aerospace Engineer.
      <br /><br />
      Currently working at {links['corrux']}. Previously,
      at {links['wetipp']} and {links['open-cosmos']}. I maintain
      the translation into Catalan of {links['react']}'s website.
      In my free time, I love climbing, hiking and skiing. If you want
      to find me, I'll probably be in the mountains.
    </>
  ),
};

class App extends Component {
  state: IState;

  constructor(props: any) {
    super(props);
    this.state = {
      language: 'en',
      window: { width: 0, height: 0 },
    };
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
    this.setState(prevState => ({
      ...prevState,
      window: { width: window.innerWidth, height: window.innerHeight },
    }));
  }

  handleLanguageChange(language: TLanguage) {
    setTimeout(() => {
      this.setState(prevState => ({ ...prevState, language }));
    }, 400);
  }

  render() {
    const { language, window: { width, height } } = this.state;
    const ratio = width / height;
    const orient = ratio > 1 ? 'landscape' : 'portrait';
    return (
      <div className="App">
        <Section
          order={orient === 'landscape' ? 0 : 0}
          title={title[language]}
          src="seb.webp"
          alt="seb"
          onMouseEnterContent={() => this.handleLanguageChange('ca')}
          onMouseLeaveContent={() => this.handleLanguageChange('en')}>
          {text[language]()}
        </Section>
        <Social />
      </div>
    );
  }
}

export default App;
