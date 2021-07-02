var seats = document.querySelector('.onbox');

var bookedCount = 0;
var remCount = 60;

var booked = document.querySelector(".bcount");
var remaining = document.querySelector(".rcount");

booked.innerHTML = ` ${bookedCount}`;
remaining.innerHTML = ` ${remCount}`;

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('onboxclick') && e.target.classList.contains('onbox')) {
        e.target.classList.remove('onboxclick')
        bookedCount--;
        remCount++;
    }
    else if (e.target.classList.contains('onboxclick') == false && e.target.classList.contains('onbox')) {
        e.target.classList.add('onboxclick')
        bookedCount++;
        remCount--;
    }
    booked.innerHTML = ` ${bookedCount}`;
    remaining.innerHTML = ` ${remCount}`;
});




