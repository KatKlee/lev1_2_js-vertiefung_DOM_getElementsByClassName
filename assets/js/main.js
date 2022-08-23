const example = document.getElementsByClassName('example')

let myFunction = () => {
    for (let i = 0; i < example.length; i++) {
        example[i].style.backgroundColor = 'black'
        example[i].style.color = 'white'
    }
}


// Bonus? Wenn man nochmal den Button anklickt, ändert sich die Hintergrundfarbe wieder zurück