
const all_options = ['biryani', 'burger', 'butter-chicken', 'dessert', 'dosa', 'idly', 'pasta', 'pizza', 'rice', 'samosa'];
const totalOptions = all_options.length;

var fourOptions = [];

function getFourOptions(answer){
    var taken = [];
    for(let i=0; i<3; i++){
        var notDone = true;
        while(notDone){
            let pos = Math.floor(Math.random() * (totalOptions));
            if (all_options[pos] === answer){}
            else{
                if (!taken.includes(pos)){
                    taken.push(pos);
                    fourOptions.push(all_options[pos]);
                    notDone = false;
                }
            }
        }
    }
}

function shuffleOptions(){
    for(let i=fourOptions.length-1; i>0; i--){
        const j = Math.floor(Math.random() * i);
        const temp = fourOptions[i];
        fourOptions[i] = fourOptions[j];
        fourOptions[j] = temp;
    }
}

const getOptions = (img_src) => {
    var answer = img_src.split('/')[4];
    fourOptions.push(answer);
    getFourOptions(answer);
    shuffleOptions();
    return fourOptions;
}

export default getOptions;
