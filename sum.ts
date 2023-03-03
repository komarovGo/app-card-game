function reversCard(shirtCard: any) {
    for (let i = 0; i < shirtCard.length; i++) {
        shirtCard[i].classList.add('shirt_pick');        
    }
}
module.exports = reversCard;
