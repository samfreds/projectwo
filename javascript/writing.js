document.getElementById('sub').addEventListener('click', openWin);

function openWin(ev) {
    console.log('open a popup window');
    let win1 = window.open(
        'fire.html',
        'popup6',
        'popup,width=500,height=500,left=50px,top=50px'

    );

    setTimeout(() => {
        let win2 = window.open(
            'fire.html',
            'popup7',
            'popup,width=500,height=500, left=450,top=50'
        );
    }, 500);

    setTimeout(() => {
        let win3 = window.open(
            'fire.html',
            'popup8',
            'popup,width=500,height=500, left=850,top=50'
        );
    }, 1000);

    setTimeout(() => {
        let win3 = window.open(
            'fire.html',
            'popup9',
            'popup,width=500,height=500, left=50,top=450'
        );
    }, 1500);

    setTimeout(() => {
        let win3 = window.open(
            'fire.html',
            'popup10',
            'popup,width=500,height=500, left=450,top=450'
        );
    }, 2000);

    setTimeout(() => {
        let win3 = window.open(
            'fire.html',
            'popup11',
            'popup,width=500,height=500, left=850,top=450'
        );
    }, 2500);

    setTimeout(() => {
        $(".dialogue2").fadeOut(500, function() {
            $(".eyes_normal").fadeOut(500);
            $(".angels").fadeIn(1000);
        });
    }, 2500);
}
