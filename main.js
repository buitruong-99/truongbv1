var number_prime = document.getElementById("prime")
function check_number()
{
    var n = number_prime.value;
    var flag = true;
    if(n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
        flag =false;
    }
    else{
        for(var i=3; i<n-1; i+=2)
        {
            if(n % i == 0){
                flag = false;
                break;
            }
        }

    }

    if(flag == true){
        document.getElementById("result0").innerHTML = n +" is a number prime";

    }   
    else{
        document.getElementById("result0").innerHTML = n +" is not number prime";
    }
}

//bai 1
var daySo = document.getElementById("nhapso")
function print_sequence()
{
    var n = daySo.value;
    for (var i = 1; i <= n; i++){
        document.getElementById("result1").innerHTML  += i + " ";
    }
     
}
//bài 2
var daySoLe = document.getElementById("nhapsole")
function print_odd(){
    var n = daySoLe.value;
    for(var i = 1; i <= n; i++){
        if(i % 2 != 0){
            document.getElementById("result2").innerHTML  += i + " ";
        }
        
    }
}

//bài 3
var daySoChan = document.getElementById("nhapsochan")
function print_even_number(){
    var n = daySoChan.value;
    for(var i = 1; i <= n; i++){
        if(i % 2 == 0){
            document.getElementById("result3").innerHTML  += i + " ";
        }
        
    }
}

// //bài 4
var daySoNguyenTo = document.getElementById("nhapsonguyento")
function print_prime(){
    var n = daySoNguyenTo.value;
        for(var i = 1; i <= n; i++){
          if(i >= 2){
            document.getElementById("result4").innerHTML += i +"-";

            for(var i=3; i<n-1; i+=2)
            {
                if(n % i == 0){
                document.getElementById("result4").innerHTML += i +"-";
                }
                document.getElementById("result4").innerHTML += i +"-";
            }
        document.getElementById("result4").innerHTML += i +";";
        
    }
    else if(n < 2){
        document.getElementById("result4").innerHTML +=i +" Không hợp lệ";

    }


}
}

//bài5
var tongDaySo = document.getElementById("nhapsotong")
function total_number(){
    var n = tongDaySo.value;
    s = 0;
    for (var i = 1; i <= n; i++){
       
        s = s + i;
    }
    document.getElementById("result5").innerHTML  += s;

}



//bài6
var tongBinhPhuong = document.getElementById("tongbinhphuong")
function sum_of_squares(){
    var n = tongBinhPhuong.value;
    s = 0;
    for (var i = 1; i <= n; i++){
       
        s = s + i*i;
    }
    document.getElementById("result6").innerHTML  = s;

}

//bài 7
var tongSoLe = document.getElementById("tongsole")
function odd_totals(){
    var n = tongSoLe.value;
    s = 0;
    for(var i=1; i <= n; i++){
        
        if(i % 2 != 0){
            s = s + i;
        document.getElementById("result7").innerHTML  = s;

        }

       }

}

// // //bài 10

    var bangCuuChuong = document.getElementById("cuuchuong")
    function show(){
        var n = bangCuuChuong.value;
    var p = "";
    console.log(n);
    for ( var i = 1; i <= 10; i++){
        p += n + "*" + i + "=" + n * i + "<br>";
    }
    document.getElementById("result10").innerHTML = p;

}

