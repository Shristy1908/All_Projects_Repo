function placeOrder(){
    document.getElementById("order summary").style.display="block";
    document.getElementById("orderForm").style.display="none";
    var uName=document.getElementById("textname");
    var mobile=document.getElementById("textMobile");
    var adrs=document.getElementById("textAddress");
    var burger=document.getElementById("optBurger");
    var pizza=document.getElementById("optPizza");
    var egg=document.getElementById("optEgg_roll");
    var spring=document.getElementById("optSpring_roll");
    var dosha=document.getElementById("optDhosha");
    var chowmin=document.getElementById("optChowmin");

    var mcost=0;
    var mname=" ";
    if(burger.checked){
        mcost=mcost+50;
        mname=mname+burger.value;
    }
    if(pizza.checked){
        mcost=mcost+190;
        mname=mname+pizza.value;
    }
    if(egg.checked){
        mcost=mcost+100;
        mname=mname+egg.value;
    }
    if(spring.checked){
        mcost=mcost+80;
        mname=mname+spring.value;
    }
    if(dosha.checked){
        mcost=mcost+70;
        mname=mname+dosha.value;
    }
    if(chowmin.checked){
        mcost=mcost+120;
        mname=mname+chowmin.value;
    }
    document.getElementById("lblName").innerHTML=uName.value;
    document.getElementById("lblMobile").innerHTML=mobile.value;
    document.getElementById("lblAddress").innerHTML=adrs.value;
    document.getElementById("lblMeal").innerHTML=mname;
    document.getElementById("lblAmount").innerHTML=mcost;
}