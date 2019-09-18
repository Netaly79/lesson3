    // script 1

    let value=+prompt("Your number");
    if (value>0)
        alert("positive number");
    else if (value<0)
        alert ("negative number");
    else
        alert ("zero");

    // script 2

    let a=10, b=3, c=7;
    let min_v=a;
    let min_n="a";
    if (b<min_v)
    {
        min_v=b;
        min_n="b";
    }  
    if (c<min_v)
    {
        min_v=c;
        min_n="c";
    }  
    alert (`a=${a}, b=${b}, c=${c}. Min variable name is ${min_n}, min value = ${min_v}`);

    // script 3

    var my_cash=+prompt("My cash");
    var my_friend_cash=+prompt("My friend`s cash");
    var our_cash=my_cash+my_friend_cash;
    if (our_cash<1000)
        alert("We will drink beer");
    else
        alert ("We will fly to Mallorca");

     // script 4
    let age=+prompt("How old is he?");
    if (age>=20 && age<27)
        alert ("Выслать повестку");

    // script 5
    let number_bus=+prompt("Number of bus");
    if (number_bus==7 || number_bus==225 || number_bus==255)
        alert ("You can go home");
    else
        alert ("You need to wait for the next bus");

    //script 6
    let today= new Date();
    let day=today.getDay();
    if (day!=0 && day!=6)
        alert ("You need to go to work");

    // script 7
    let x=+prompt ("value from -20 to 20");
    let y=+prompt ("value from -20 to 20");

    if (x<=1&&(y>=3||y<0))
        alert (`x+y=${x+y}`);
    else
        alert("Неверно!");

    //script 8
    let x=+prompt ("value from -20 to 20");
    let y=+prompt ("value from -20 to 20");
    if ((x>2 && x<11)||(y>=6 && y<14))
        x*=2;
    else
        x+=5;
    alert (`new x=${x}`);

    //script 9
    let name=prompt("your name");
    if (name!=null && name!="")
    alert (`Hello, ${name}!`);

    //script 10
    let greeting, lang;
    lang =prompt ("language: ru, en, de");
    if (lang!=="ru"&&lang!=="en"&&lang!=="de")
    alert ("Error");
    else
    {
        if (lang==="ru")
            greeting="Привет всем!";
        else if (lang==="en")
            greeting="Hello, world!";
        else 
            greeting="hallo alle zusammen";
        alert (`using 'if' message ${greeting} `);

        switch(lang){
            case "ru":
                greeting="Привет всем!";
                break;
            case "ru":
                greeting="Hello, world!";
                break;
            default:
                greeting="hallo alle zusammen";
        }
        alert (`using 'switch' message ${greeting} `);
    }
   
    // script 11
    let date= new Date();
    let month=date.getMonth();
    if (month<2||month==11)
    alert("winter");
    if (month>1&&month<5)
    alert("spring");
    if (month>4&&month<8)
    alert("summer");
    if (month>7&&month<11)
    alert("autumn");

    //script 12
    let lang;
    lang =prompt ("language: ru, en");
    if (lang!=="ru"&&lang!=="en")
    alert ("Error");
    else
    {
        let date=new Date();
        let day=date.getDay();
        
        if (lang==="ru")
        {
            switch(day){
                case 0:
                alert ("воскресенье");
                break;
                case 1:
                alert ("понедельник");
                break;
                case 2:
                alert ("вторник");
                break;
                case 3:
                alert ("среда");
                break;
                case 4:
                alert ("четверг");
                break;
                case 5:
                alert ("пятница");
                break;
                case 6:
                alert ("суббота");
            }
        }
        else{
            switch(day){
                case 0:
                alert ("sunday");
                break;
                case 1:
                alert ("monday");
                break;
                case 2:
                alert ("tuesday");
                break;
                case 3:
                alert ("wednesday ");
                break;
                case 4:
                alert ("thursday ");
                break;
                case 5:
                alert ("friday ");
                break;
                case 6:
                alert ("saturday");
            }
        }
    }