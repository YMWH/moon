window.onload = function(){
    let oCan = document.getElementById("can");
    let oList = document.getElementById("list");
    let oColor_li = document.getElementById("Color");
    let oColor = oColor_li.getElementsByTagName("input")[0];
    let o_Box = document.getElementById("box");
    let con = oCan.getContext("2d");
    pencil();
    color();
    oList.onclick = function(e){
         e = e || event;
         let target = e.target || e.srcElement;
         if(target.nodeName.toLowerCase() == "li"){
             switch(target.id){
                 case "Delete":
                 con.clearRect(0,0,oCan.width,oCan.height);
                 break;
                 case "Eraser":
                     eraser(e);
                     break;
                 case "Pencil":
                     let oBox = document.getElementsByClassName("box")[0];
                     if(oBox){

                         oBox.parentNode.removeChild(oBox);
                     }
                     pencil();
                     break;
                 case "Ring":
                     oRingOrOFillRing(target.id);
                     break;
                 case "fillRing":
                     oRingOrOFillRing(target.id);
                     break;
                 case "Rect":
                     oRectOrFill_rect(target.id)
                     break;
                 case "fill_rect":
                     oRectOrFill_rect(target.id)
                     break;
             }
         }
     };
    //fill_rect or Rect
    function oRectOrFill_rect (who){
        o_Box.style.display = "block";
        o_Box.onmousedown = function(e){
            e = e || event;
            let oRingRect = document.createElement("div");
            let startX = e.pageX - oCan.offsetLeft,startY = e.pageY - oCan.offsetTop;
            let endX,endY;
            document.onmousemove = function(e){
                e = e || event;
                endX = e.pageX - oCan.offsetLeft,endY = e.pageY - oCan.offsetTop;
                oRingRect.style.cssText = "position:absolute;top:"+startY+"px;left:"+startX+"px;border:1px solid red;width:"+(endX-startX)+"px;height:"+(endY-startY)+"px";
                o_Box.appendChild(oRingRect);
            };
            document.onmouseup = function(){
                this.onmousemove = null;
                this.onmouseup = null;
                let X = (endX-startX),Y = (endY-startY);

                if(who == "Rect"){
                    con.beginPath();
                    con.rect(startX,startY,X,Y);
                    con.closePath();
                    con.stroke();
                    o_Box.removeChild(oRingRect);
                    o_Box.style.display = "none";
                }else if(who == "fill_rect"){
                    con.fillStyle=oColor.value||"#000";
                    con.beginPath();
                    con.rect(startX,startY,X,Y);
                    con.closePath();
                    con.fill();
                    o_Box.removeChild(oRingRect);
                    o_Box.style.display = "none";
                }
            };

        };
    }
    //oRing or oFillRing
    function oRingOrOFillRing(who){
        o_Box.style.display = "block";
        o_Box.onmousedown = function(e){
            e = e || event;
            let oRingRect = document.createElement("div");
            let oRing = document.createElement("div");
            let startX = e.pageX - oCan.offsetLeft,startY = e.pageY - oCan.offsetTop;
            let endX,endY;
            document.onmousemove = function(e){
                e = e || event;
                endX = e.pageX - oCan.offsetLeft,endY = e.pageY - oCan.offsetTop;
                oRingRect.style.cssText = "position:absolute;top:"+startY+"px;left:"+startX+"px;border:1px solid red;width:"+(endX-startX)+"px;height:"+(endY-startY)+"px";
                oRing.style.cssText = "width:"+(endX-startX)+"px;height:"+(endY-startY)+"px;position:absolute;top:0px;left:0px;border:1px solid blue;border-radius:100%;";
                o_Box.appendChild(oRingRect);
                oRingRect.appendChild(oRing);
            };
            document.onmouseup = function(){
                this.onmousemove = null;
                this.onmouseup = null;
                let X = startX+(endX-startX)/2,Y = startY+(endY-startY)/2,R = Math.max((endX-startX)/2,(endY-startY)/2);

                if(who == "Ring"){
                    con.beginPath();
                    con.arc(X,Y,R,0,2*Math.PI,false);
                    con.closePath();
                    con.stroke();
                    o_Box.removeChild(oRingRect);
                    o_Box.style.display = "none";
                }else if(who == "fillRing"){
                    con.fillStyle=oColor.value||"#000";
                    con.beginPath();
                    con.arc(X,Y,R,0,2*Math.PI,false);
                    con.closePath();
                    con.fill();
                    o_Box.removeChild(oRingRect);
                    o_Box.style.display = "none";
                }
            };

        };
    }
    //pencil
    function pencil(){
        oCan.onmousedown = function(e){
            e = e || event;
            let startX = e.pageX-oCan.offsetLeft,startY = e.pageY-oCan.offsetTop;
            con.beginPath();
            con.moveTo(startX,startY);

            document.onmousemove = function(e){
                e = e || event;
                let endX = e.pageX-oCan.offsetLeft,endY = e.pageY-oCan.offsetTop;
                con.lineTo(endX,endY);
                // con.closePath();
                con.stroke();
            };
            document.onmouseup = function(){
                this.onmousemove = null;
                this.onmouseup = null;
            };
        };
    }
    //Color
    function color(){
        oColor.onchange = function(){
            con.strokeStyle = oColor.value;
        };
    }
    //Eraser
    function eraser(e){
        let EX = e.pageX,EY = e.pageY;
        let oDiv = document.createElement("div");
        oDiv.className = "box";
        oDiv.style.left = EX-10+"px";
        oDiv.style.top = EY - 10+"px";
        document.body.appendChild(oDiv);
        document.onmousemove = function(e){
            e = e || event;
            let endX = e.pageX,endY = e.pageY;
            endX<oCan.offsetLeft||endX>oCan.offsetLeft+oCan.width||endY<oCan.offsetTop||endY>oCan.offsetTop+oCan.height?oDiv.style.display = "none":oDiv.style.display = "block";

            oDiv.style.left =endX - 10 +"px";
            oDiv.style.top =endY - 10 +"px";
        };
        oDiv.onmousedown = function(e){
            e = e || event;
            let startX = e.pageX,startY = e.pageY;
            let This = this;
            let x_= startX-oCan.offsetLeft-10,y_ = startY-oCan.offsetTop-10;
            con.clearRect(x_,y_,parseInt(getStyle(This,"width")),parseInt(getStyle(This,"height")));
            con.beginPath();
            this.onmousemove = function(e){
                e = e || event;
                let endX = e.pageX,endY = e.pageY;
                let x = endX-oCan.offsetLeft-10,y = endY-oCan.offsetTop-10;
                oDiv.style.left = endX - 10+"px";
                oDiv.style.top = endY - 10+"px";
                con.clearRect(x,y,parseInt(getStyle(This,"width")),parseInt(getStyle(This,"height")));
                con.beginPath();
            };
            document.onmouseup = function(){
                oDiv.onmousemove = null;
                this.onmouseup = null;
            };
        };
    }
    function getStyle(obj,styleName){
        return obj.currentStyle?obj.currentStyle[styleName]:getComputedStyle(obj)[styleName];
    }
};