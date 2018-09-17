window.onload = function(){
    // let oCan = document.getElementById("can");
    // let conText = oCan.getContext("2d");
    // conText.moveTo(0,0);
    // conText.lineTo(100,100);
    // conText.lineTo(100,300);
    // conText.lineTo(300,400);
    // conText.closePath();
    // conText.stroke();
    let oCan = document.getElementById("can");
    let oBtn = document.getElementById("btn");
    let con = oCan.getContext("2d");
    let w = oCan.width,h = oCan.height;
    con.lineCap="round";//square
    con.lineWidth=30;
    con.strokeStyle="red";
    con.fillStyle="pink";
    con.beginPath();
    con.arc(150,150,50,0,30*2*Math.PI/180,false);
    con.rect(300,300,100,200);
    con.moveTo(50,50);
    con.lineTo(100,100);
    //con.fill()
    con.stroke();
    oBtn.onclick = function(){
        con.clearRect(0,0,w,h);

        let x = Math.random()*500;
        let y = Math.random()*500;
        con.strokeStyle ="red";
        con.lineWidth=15;
        con.lineJoin="bevel";//round
        con.beginPath();
        con.moveTo(x,y);
        con.lineTo(x,Math.cos(Math.random()*Math.PI)*100);
        con.lineTo(Math.sin(Math.random()*Math.PI)*100,y)
        //con.lineTo(x,y);
        con.closePath();
        con.stroke();

    }
}