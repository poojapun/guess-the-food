import getOptions from './four_options.js';


const Question = (img_src) => {
    var fourOptions = getOptions(img_src);
    return `<h4> What do you think it is? </h4><br>
    <img id='img' class='m-2'src=${img_src} width='350' height='350'>

    <div class='m-2'>
        <input type="radio" name="options" value=${fourOptions[0]}>
        <label for="choice-1">${fourOptions[0]}</label>

        <input type="radio" name="options" value=${fourOptions[1]}>
        <label for="choice-2">${fourOptions[1]}</label>

        <input type="radio" name="options" value=${fourOptions[2]}>
        <label for="choice-3">${fourOptions[2]}</label>

        <input type="radio" name="options" value=${fourOptions[3]}>
        <label for="choice-4">${fourOptions[3]}</label>
    </div>
    <button class='m-2' id='submit-button'> Submit </button><br><br>`
}

export default Question;