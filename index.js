function sumArray(){
    var a = document.getElementById('M21').value;
    a = a.split(" ");
    var n = a.length;
    var sum = 0
    for(let i=0; i<n;i++){
        sum += parseInt(a[i]);
    }
    document.getElementById('ketQua21').value = sum;
}

// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5

function max_min_avgArray(){
    var a = document.getElementById('M22').value;
    a = a.split(" ");
    var n = a.length;
    var sum = 0
    a.sort(function(a,b){
        return a - b;
    });
    max = a[n-1];
    min = a[0];
    for(let i=0; i<n;i++){
        sum += parseInt(a[i]);
    }
    document.getElementById('ketQua22').value = "Max = "+max+", Min = "+min+", Avg = "+ sum/n;
}
// 23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3

function checkFreaquency(){
    var arr = document.getElementById('M23').value;
    arr = arr.split(" ")
    var a = [];
    var b = [];
    var prev;
    //sap xep array
    let sortData = arr.sort();
    for(let i =0; i<arr.length; i++){
        const element = arr[i];
        if(element != prev){
            a.push(element);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = element;
    }
    let maxB = Math.max(...b);
    let indexMax = b.indexOf(maxB);
    document.getElementById('ketQua23').value ="So:"+a[indexMax]+" xua hien nhieu nhat: " +maxB+" lan";
}
// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
function locMangNT(){
    var arr = document.getElementById('M24').value;
    arr = arr.split(" ")
    var arr = arr.filter(
            function(n){
                let flag = true;
                if(n < 2)
                {
                    flag = false ;
                }
                else if (n === 2){
                    flag = true ;
                }
                else if (n % 2===0){
                    flag = false;
                }
                else {
                    for( let j=3; j <= (n)/2; j+=2){
                        if( n % j===0)
                        flag = false;
                        break; 
                    }
                }
                if (flag == true) {  
                    return n;
                }   
            }
        )
    document.getElementById('ketQua24').value = arr; 
}
// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]
function binhPhuongMang(){
    var a = document.getElementById('M25').value;
    a = a.split(" ")
    var b = []; 
        for (let i = 0 ; i < a.length ; i++){
            b.push(a[i]*a[i])
        }
        document.getElementById('ketQua25').value = b;
}
// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị, và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất. 
// Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
// VD: a = [1,2,3,4,6,7]; k = 8 .Output: [7]. giải thích: 7 gần giá trị với 8 nhất
// VD: a = [1,2,3,4,6,7]; k = 5 .Output: [4,6]
function bai26(){
    var a = document.getElementById('M26').value;
    a = a.split(" ")
    var k = document.getElementById('soK').value;
    var b = [];
        a.push(k);
        a.sort();
        let K = a.indexOf(k);
        if (a[K]-(a[K-1]) == a[K+1]-a[K]){
                b.push(a[K-1]);
                b.push(a[K+1]);
             }else if (a[K]-(a[K-1])<a[K+1]-a[K]){
                 b.push(a[K-1]);
             }else if (a[K]-(a[K-1])>a[K+1]-a[K]){
                 b.push(a[K+1]);
             }
        
  
        document.getElementById('ketQua26').value = b;
}
// Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. 
// Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.
function chuanHoa(chuoi){
    chuoi = chuoi.toLowerCase();
    chuoi = chuoi.split(" ");
    var n = chuoi.length;
    for(var i =0; i<n; i++)
    {
        let chuoiTam = chuoi[i].split("");
        let m = chuoiTam.length;
        chuoiTam[0] = chuoiTam[0].toUpperCase();
        chuoi[i] = chuoiTam.join("");
    }
    chuoi = chuoi.join(" ");
    return chuoi;
 }
 function bai27(){
     var students = [
         {
             id: "T3HXX1",
             firstName: "NgAN",
             lastName: "duong tHuy"
         },
         {
             id: "T3HXX2",
             firstName: "hA",
             lastName: "do tHi Thu"
         },
         {
             id: "T3HXX5",
             firstName: "miNH",
             lastName: "Nguyen Nhat"
         }
     ];
     var n = students.length;
     var b = [];
     for(let i =0; i<n; i++)
     {            
         students[i].firstName = chuanHoa(students[i].firstName);
         students[i].lastName = chuanHoa(students[i].lastName);
         if((students[i].firstName).search("a") > 0 || (students[i].firstName).search("A") > 0)
         {
             if((students[i].firstName).length >= 3)
             {
                  b.push(students[i]);
             }
         }
         return b;
     }  
 }
 console.log(bai27());   
