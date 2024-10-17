document.getElementById('sub').addEventListener('click', this.openWin);

function openWin(ev) {
    console.log('open a popup window');
    let win = window.open(
      'questiontwopop.html',
      null, 
      'popup,width=500,height=500,left=500px,right=500px,top=200px'
      
    );
    $(".dialogue2").fadeOut(1000);
}
