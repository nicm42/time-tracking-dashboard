import './styles.scss';
import data from '../data.json';

interface IObjectKeys {
  [key: string]: string | string;
}

interface ITimes extends IObjectKeys {
  daily: string;
  weekly: string;
  monthly: string;
}

const buttons = document.querySelectorAll('.button');
const titles = document.querySelectorAll('.stats__title');
const hours = document.querySelectorAll('.stats__number');
const last = document.querySelectorAll('.stats__previous');

const setData = (time: string): void => {
  // Change eg weekly to eg Week
  let timeText = time.charAt(0).toUpperCase() + time.slice(1, -2);
  // However for daily this have Dai, but we want Day
  // So we'll need to do that separately
  if (time === 'daily') {
    timeText = 'Day';
  }

  data.forEach((element, index) => {
    const times = element.timeframes[time as keyof ITimes];
    const current = times.current;
    const previous = times.previous;
    titles[index].innerHTML = element.title;
    hours[index].innerHTML = `${current}hrs`;
    last[index].innerHTML = `Last ${timeText} - ${previous}hrs`;
  });
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((time) => time.classList.remove('active'));
    button.classList.add('active');
    setData(button.id);
  });
});

// Set it to default to weekly if no button has been pressed yet
setData('weekly');
