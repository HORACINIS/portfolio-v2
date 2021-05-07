// icons of tech used
import { SiJavascript, SiReact, SiRails, SiCss3, SiBootstrap, SiAmazonaws } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';

// project images
import el_cartel from '../images/el_cartel.jpg';
import my_todo_list from '../images/my_todo_list.jpg';

// icon variable to be used with the object below
const html = <ImHtmlFive />;
const css = <SiCss3 />;
const javaScript = <SiJavascript />;
const react = <SiReact />;
const ruby = <DiRuby />;
const rails = <SiRails />;
const bootstrap = <SiBootstrap />;
const aws = <SiAmazonaws />;
const stripe = <FaCcStripe />

export const projectsList = [
  {
    title: 'El Cartel',
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
    title: 'El Cartel',
    intro: 'Full stack two-sided marketplace created with Rails',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: el_cartel,
    iconsTechUsed: [css, javaScript, react],
    siteLive: 'https://elcartel.herokuapp.com/',
    repoURL: 'https://github.com/HORACINIS/el_carsales_marketplace'
  },
  {
    title: 'El Cartel DOS',
    intro: 'Full stack two-sided marketplace created with Rails',
    body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: el_cartel,
    iconsTechUsed: [javaScript, react, ruby],
    siteLive: 'https://elcartel.herokuapp.com/',
    repoURL: 'https://github.com/HORACINIS/el_carsales_marketplace'
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