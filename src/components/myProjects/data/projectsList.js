// icons of tech used
import { SiJavascript, SiReact, SiRails, SiCss3, SiBootstrap, SiAmazonaws } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';
import { BsTerminalFill } from 'react-icons/bs';

// project images
import el_cartel from '../images/el_cartel.jpg';
import my_todo_list from '../images/my_todo_list.jpg';
import lyrics_x from '../images/lyrics_x.jpg';
import portfolio_v1 from '../images/portfolio_v1.jpg';
import horacinis_cafe from '../images/horacinis_cafe.jpg';

// icon variable to be used with the object below
const html = <ImHtmlFive />;
const css = <SiCss3 />;
const javaScript = <SiJavascript />;
const react = <SiReact />;
const ruby = <DiRuby />;
const rails = <SiRails />;
const terminal = <BsTerminalFill />;
const bootstrap = <SiBootstrap />;
const aws = <SiAmazonaws />;
const stripe = <FaCcStripe />

export const projectsList = [
  {
    title: 'El CARtel',
    intro: 'Full stack two-sided marketplace created with Rails',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: el_cartel,
    iconsTechUsed: [html, ruby, rails, bootstrap, aws, stripe],
    siteLive: 'https://elcartel.herokuapp.com/',
    repoURL: 'https://github.com/HORACINIS/el_carsales_marketplace'

  },
  {
    title: 'My To-do List',
    intro: 'Front-end to-do list created with ReactJS',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: my_todo_list,
    iconsTechUsed: [javaScript, react, bootstrap],
    siteLive: 'https://horacinis-todo.netlify.app/',
    repoURL: 'https://github.com/HORACINIS/todo-list'
  },
  {
    title: 'Lyrics X',
    intro: 'Front-end lyrics finder created with ReactJS',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: lyrics_x,
    iconsTechUsed: [javaScript, react, bootstrap],
    siteLive: 'https://lyrics-finder-horacinis.netlify.app/',
    repoURL: 'https://github.com/HORACINIS/lyrics-finder'
  },
  {
    title: 'Portfolio v1',
    intro: 'Portfolio created mostly with HTML and CSS',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: portfolio_v1,
    iconsTechUsed: [html, css, javaScript,],
    siteLive: 'https://www.horacinis.com/',
    repoURL: 'https://github.com/HORACINIS/assignment_2_portfolio'
  },
  {
    title: 'Horacinis Cafe',
    intro: 'Terminal app created with Ruby and a few Gems',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: horacinis_cafe,
    iconsTechUsed: [ruby, terminal],
    repoURL: 'https://github.com/HORACINIS/assignment_3_terminal_app'
  },
  {
    title: 'El Cartel DOS',
    intro: 'Full stack two-sided marketplace created with Rails',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: el_cartel,
    iconsTechUsed: [javaScript, react, ruby],
    siteLive: 'https://elcartel.herokuapp.com/',
    repoURL: 'https://github.com/HORACINIS/el_carsales_marketplace'
  }
];