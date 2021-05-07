// icons of tech used
import { SiJavascript, SiReact, SiRails, SiCss3, SiBootstrap, SiAmazonaws } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { ImHtmlFive } from 'react-icons/im';
import { FaCcStripe } from 'react-icons/fa';
import { BsTerminalFill } from 'react-icons/bs';
import { IoIosConstruct } from 'react-icons/io';

// project images
import el_cartel from '../images/el_cartel.jpg';
import my_todo_list from '../images/my_todo_list.jpg';
import lyrics_x from '../images/lyrics_x.jpg';
import portfolio_v1 from '../images/portfolio_v1.jpg';
import horacinis_cafe from '../images/horacinis_cafe.jpg';
import project_coming from '../images/project_coming.jpg';

// icon variables for tech use - fit a maximum of 6 per project card
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
const underConstruction = <IoIosConstruct />;

export const projectsList = [
  {
    title: 'El CARtel',
    intro: 'Full stack two-sided marketplace created with Rails',
    // body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: el_cartel,
    iconsTechUsed: [html, ruby, rails, bootstrap, aws, stripe],
    links: {
      siteLive: 'https://elcartel.herokuapp.com/',
      repoURL: 'https://github.com/HORACINIS/el_carsales_marketplace'
    }


  },
  {
    title: 'My To-do List',
    intro: 'Front-end to-do list created with ReactJS',
    // body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: my_todo_list,
    iconsTechUsed: [javaScript, react, bootstrap],
    links: {
      siteLive: 'https://horacinis-todo.netlify.app/',
      repoURL: 'https://github.com/HORACINIS/todo-list'
    }
  },
  {
    title: 'Lyrics X',
    intro: 'Front-end lyrics finder created with ReactJS',
    // body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: lyrics_x,
    iconsTechUsed: [javaScript, react, bootstrap],
    links: {
      siteLive: 'https://lyrics-finder-horacinis.netlify.app/',
      repoURL: 'https://github.com/HORACINIS/lyrics-finder'
    }
  },
  {
    title: 'Portfolio v1',
    intro: 'Portfolio created mostly with HTML and CSS',
    // body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: portfolio_v1,
    iconsTechUsed: [html, css, javaScript,],
    links: {
      siteLive: 'https://www.horacinis.com/',
      repoURL: 'https://github.com/HORACINIS/assignment_2_portfolio'
    }
  },
  {
    title: 'Horacinis Cafe',
    intro: 'Terminal app created with Ruby and a few Gems',
    // body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: horacinis_cafe,
    iconsTechUsed: [ruby, terminal],
    links: {
      repoURL: 'https://github.com/HORACINIS/assignment_3_terminal_app'
    }
  },
  {
    title: 'More to come...',
    intro: 'Working on more projects to add here... ',
    // body: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah.',
    img: project_coming,
    iconsTechUsed: [underConstruction],
    links: {
      // siteLive: 'https://elcartel.herokuapp.com/',
      // repoURL: 'https://github.com/HORACINIS/el_carsales_marketplace'
    }
  }
];