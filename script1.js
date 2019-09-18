//script 1
let str='.';
for (let i=0;i<10; i++)
    str+='#.';
alert (str);

//script 2
for (let i=1; i<10; i++)
{
    if (i%2==0)
    console.log(i*i);
}

//script 3
let username=prompt("User name");
for (let y=0; y<4; y++)
{
    if (y!=2)
    console.log("Happy birthday to you");
    else
    console.log (`Happy birthday dear ${username}`);
}

//script 4
let val=0;
while(!confirm("finish?"))
{
    val++;
    console.log (`${val} iteration`);
}

// script 5
let last=+prompt("max value");
let sum=0;
for (let i=1; i<last; i+=2)
{
    sum+=i;
}
alert(`summa = ${sum}`);

// script 6
let r_value;
let iter=0;
while (true){
    r_value=Math.random();
    iter++;
    if (r_value>0.9){
        alert(`value=${r_value}, ${iter} iteration`);
        break;
    }
}

//script 7
for (let i=1; i<10; i++)
{
    for (let j=1; j<10; j++)
    {
        console.log(`${i}*${j}=${i*j}`);
    }
}

//script 8
let prev, cur, rez, str_f="";
prev=0;
cur=1;
str_f+=`${prev} ${cur}`;
for (let i=0; i<20; i++, rez=prev+cur, prev=cur, cur=rez, str_f+=` ${rez}`);
console.log (str_f);

//script 9
let counter=0, my_sum=0, avg=0, my_val;
while(my_val=+prompt("new value"))
{
    counter++;
    my_sum+=my_val;
    avg=my_sum/counter;
}
console.log (`counter = ${counter}, summa=${my_sum}, avg=${avg}`);

//script10
let password_etalon="qwerty";
let users;

while (password_etalon!==(users=prompt("Password"))){
    if (users==null){
        var r=confirm('Вы уверены, что хотите отменить авторизацию?');
        if (r)
        {
            alert('Вы отменили авторизацию');
            break;
        } 
    }
}
if (password_etalon===users){
    alert('Вы успешно авторизованы');
}

//script 11{
    for (let i=1; i<50; i++)
    {
        if (i%3==0&&i%5==0){
        console.log('FizzBuzz');
        continue;
        }
        if (i%3==0)
        {
            console.log ('Fizz');
        }
        else if (i%5==0){
            console.log ('Buzz');
        }
        else
        console.log (i);
    }

let res="";
let arr = [
    ["tomato", "lemon", "potato"],
    [15,20,5],
     ["John", "Kate", "Jack"]
     ];

for (let i=0; i<arr.length; i++)
     {
         for (let y=0; y<arr[i].length; y++)
         {
             if ((i==0&&y==2) || (i==1&&y==2)|| (i==2&&y==0))
             {
                 res+=arr[i][y];
             }
             if ((i==0&&y==2) || (i==1&&y==2))
             res+=" _ ";

         }
        }
        console.log(res);