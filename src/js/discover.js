import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqAccordions = document.querySelector('.faq-accordion-container');

new Accordion(faqAccordions, {
  duration: 600,
  openOnInit: [0],
  elementClass: 'ac-faq',
  triggerClass: 'faq-ac-title',
  panelClass: 'ac-text',
  activeClass: 'is-active-faq',

  showMultiple: true,
  beforeOpen: function (currentElement) {
    toggleSvg(currentElement);
  },
  beforeClose: function (currentElement) {
    toggleSvg(currentElement);
  },
});

function toggleSvg(element) {
  let button = element.querySelector('.ac-trigger');
  let svgs = button.querySelectorAll('.ac-trigger-svg');
  svgs.forEach(svg => svg.classList.toggle('active'));
}
