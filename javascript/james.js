document.getElementById('sub2').addEventListener('click', openWin);

function openWin(ev) {
    console.log('open a popup window');
    let win1 = window.open(
        'james.html',
        'popup1',
        'popup,width=300,height=600,left=100px,top=50px'

    );

    setTimeout(() => {
        let win2 = window.open(
            'bobby.html',
            'popup2',
            'popup,width=300,height=500, left=1010,top=400'
        );
    }, 1000);

    setTimeout(() => {
        let win3 = window.open(
            'family.html',
            'popup3',
            'popup,width=500,height=300, left=450,top=50'
        );
    }, 2000);

    setTimeout(() => {
        let win3 = window.open(
            'coffee.html',
            'popup4',
            'popup,width=500,height=300, left=450,top=450'
        );
    }, 3000);

    setTimeout(() => {
        let win3 = window.open(
            'friends.html',
            'popup5',
            'popup,width=450,height=200, left=975,top=50'
        );
    }, 4000);

    setTimeout(() => {
        $(".dialogue2").fadeOut(500, function() {
            $(".eyes_normal").fadeOut(500);
            $(".angels").fadeIn(1000);
        });
    }, 4500);
}
