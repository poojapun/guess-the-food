import Question from './components/Question.js';

const renderDOM = (html) => document.getElementById('view').innerHTML = html;

export const mainView = (img_src) => {
    renderDOM(
        `${Question(img_src)}
        `);
}