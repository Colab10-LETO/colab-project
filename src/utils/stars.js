export default function getStars (rating) {
    if (rating === 0){
        <img src="https://placekitten.com/g/50/50" alt="kitten" />
    } else if (rating === 0.5) {
        <img src="https://place-puppy.com/50x50" alt="puppy" />
    } else if (rating === 1){
        <img src="https://www.placecage.com/50/50" alt="cage" />
    } else if (rating === 1.5){
        <img src="https://placekeanu.com/50/50/" alt="kenue"/>
    } else if (rating === 2){
        <img src="http://placebacon.net/50/50" alt="bacon"/>
    } else if (rating === 2.5){
        <img src="https://placebear.com/50/50" alt="bear"/>
    } else if (rating === 3) {
        <img src="https://placekitten.com/g/50/50" alt="kitten" />
    } else if (rating === 3.5) {
        <img src="https://place-puppy.com/50x50" alt="puppy" />
    }  else if (rating === 4){
        <img src="https://www.placecage.com/50/50" alt="cage" />
    } else if (rating === 4.5){
        <img src="https://placekeanu.com/50/50/" alt="kenue"/>
    } else if (rating === 5){
        <img src="http://placebacon.net/50/50" alt="bacon"/>
    } else {
        return <p>no rating</p>
    }
    
}