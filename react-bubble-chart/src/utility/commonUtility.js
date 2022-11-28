
export function getRandomColor(){
    let color = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
    return color
}

export function getEllipsis(circleRadius, text){
    let fontSize = 14;
    let circleDiameter = circleRadius*2;
    let maxTextLength = circleDiameter/fontSize;
    let currentTextLength = text ? text.length : 0;
    let formattedtext = text;
    if(currentTextLength > maxTextLength){
        if(maxTextLength > 3){
            formattedtext = formattedtext.slice(0,maxTextLength)+'...'
        }else{
            formattedtext = ''
        }
    }
    return formattedtext

}