import { SiJavascript, SiReact } from 'react-icons/si'
import { DiRuby } from 'react-icons/di';
import el_cartel from './images/el_cartel.png';

export const projectsList = [
  {
    id: '1',
    title: 'El Cartel',
    intro: 'Full stack two-sided marketplace created with Rails',
    body: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    img: { el_cartel },
    iconsTechUsed: [SiJavascript, SiReact]
  },
  {
    id: '2',
    title: 'El Cartel DOS',
    intro: 'Full stack two-sided marketplace created with Rails',
    body: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    img: { el_cartel },
    iconsTechUsed: [SiJavascript, SiReact, DiRuby]
  }
]