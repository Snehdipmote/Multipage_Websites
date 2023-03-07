// program for colour mixer
function Mixer(colour1,colour2)
{
switch(colour1&&colour2) {
    case 'Red'&&'Blue':
        console.log(`${colour1} And ${colour2} =`,"Purple");
        break;
    case 'Blue' && 'Yellow':
        console.log(`${colour1} And ${colour2} =`,"Green");
        break;
    case 'Red'&& 'Yellow':
        console.log(`${colour1} And ${colour2} =`,"Orange");
        break;
    default:
        console.log("Invalid color combination");
        break;
}
}
Mixer("Red","Yellow");
Mixer("Red","Blue");
Mixer("Blue","Yellow");
Mixer("Red","Y");
// o/p: 
// Red And Yellow = Green
// Red And Blue = Purple
// Blue And Yellow = Green
// Invalid color combination
