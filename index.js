let enter = document.querySelector(`.innerEnter`)
let exit = document.querySelector(`.innerExit`)
let prev = document.querySelector(`.prev`)
let next = document.querySelector(`.next`)
let price = document.querySelector('.price');
prev.addEventListener(`click`, () => {
    const dateEnter = new Date();
    const hour = dateEnter.getHours()
    const min = dateEnter.getMinutes()
    const second = dateEnter.getSeconds()
    // console.log(`${hour}:${min}`);
    enter.innerHTML = `${hour}:${min}:${second}`
    next.addEventListener(`click`, () => {
        const dateExit = new Date();
        const hourexit = dateExit.getHours()

        const minexit = dateExit.getMinutes()

        const secondexit = dateExit.getSeconds()
        exit.innerHTML = `${hourexit}:${minexit}:${secondexit}`
        const absMin = Math.abs(minexit - min)
        const absHours = hourexit - hour
        if (absHours >= 1) {
            for (let i = 0; i <= 24; i++) {
                if (absHours <= i) {
                    price.innerHTML = `${i} soat ${absMin} daqiqa turdingiz <p>Siznig tolovingiz:${i * 4 + 5}$ </p> `
                    break
                }
            }
            return
        }
        if (absMin > 0 || absMin < 59) {
            if (absMin < 1) {
                price.innerHTML = `${absMin} daqiqa turdingiz <p>Siznig tolovingiz: 2$</p> `
            } else {
                price.innerHTML = `${absMin} daqiqa turdingiz <p>Siznig tolovingiz: 5$</p> `
            }
        }














        // let our = ``
        // for(let i = 0  ; i<=enter.innerHTML.length-1; i++){
        //     our +=enter.innerHTML[i]
        // }
        // // console.log(our);
        // let our2 = +our.slice(3)
        // let exitOur
        // // console.log(our2);
    })
})
