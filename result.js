var iMoney;
var eMoney;
var url;

function load(){
    url = new URL(window.location);
    iMoney = Number(url.searchParams.get("iMoney"));
    eMoney = Number(url.searchParams.get("eMoney"));
    console.log(iMoney);


}

function updateMoney(isTrue){    
    
    console.log('about to start');

    if (isTrue){
        iMoney += parseInt(document.getElementById("update").value);
    }
    else{
        iMoney += parseInt(document.getElementById("update2").value);
       
    }

    document.getElementById("moneyBalance").innerText = "$" + iMoney;
    console.log(iMoney);
    console.log(eMoney);
    console.log(iMoney/eMoney);
    if ((iMoney <= 0)) {
        console.log('stage 0');
        document.getElementById('image').src = 'stg0.png';
    }
    else if((iMoney/eMoney) <= (0.1)) {
        console.log('stage 1');
        document.getElementById('image').src = 'stg1.png';
    }
    else if (((iMoney/eMoney) <= (0.2)) && ((iMoney/eMoney) > (0.1))) {
        console.log('stage 2');
        document.getElementById('image').src = 'stg2.png'; 
    }
    else if (((iMoney/eMoney) <= (0.3)) && ((iMoney/eMoney) > (0.2))) {
         console.log('stage 3');
         document.getElementById('image').src = 'stg3.png';
    }
    else if (((iMoney/eMoney) <= (0.4)) && ((iMoney/eMoney) > (0.3))) {
         console.log('stage 4');
         document.getElementById('image').src = 'stg4.png';
    }
    else if (((iMoney/eMoney) <= (0.5)) && ((iMoney/eMoney) > (0.4))) {
         console.log('stage 5');
         document.getElementById('image').src = 'stg5.png';
    }
    else if (((iMoney/eMoney) <= (0.6)) && ((iMoney/eMoney) > (0.5))) {
         console.log('stage 6');
         document.getElementById('image').src = 'stg6.png';
    }
    else if (((iMoney/eMoney) <= (0.7)) && ((iMoney/eMoney) > (0.6))) {
         console.log('stage 7');
         document.getElementById('image').src = 'stg7.png';
    }
    else if (((iMoney/eMoney) <= (0.8)) && ((iMoney/eMoney) > (0.7))) {
         console.log('stage 8');
         document.getElementById('image').src = 'stg8.png';
    }
    else if (((iMoney/eMoney) <= (0.9)) && ((iMoney/eMoney) > (0.8))) {
         console.log('stage 9');
         document.getElementById('image').src = 'stg9.png';
    }
    else {
         console.log('stage 10');
         document.getElementById('image').src = 'stg10.png';
    }
}