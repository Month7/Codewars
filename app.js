// {
//     function findNb(m) {
//         // your code
//         for(var i=1;i<Math.sqrt(m);i++){
//             if(cal(i)==Math.sqrt(m)){
//                 return i;
//             }
//         }
        
//         return (-1);
//     }
//     function cal(n){
//         return n*(n+1)/2;
//     }
// }
// {
//     function findShort(s){
//         var arr=[];
//         var str=s.split(" ");
//         var len=0;
//         for(var i=0;i<str.length;i++){
//             arr.push(str[i].length)
//         }
//         return Math.min.apply(null,arr);
//     }
// }
// {
//     function maskify(cc) {
//         if(cc.length<4){
//             return cc;
//         }
//         var str1="";
//         var str2="";
//         for(var i=cc.length-4;i<cc.length;i++){
//             str1+=cc[i];
//         }
//         for(var i=0;i<cc.length-4;i++){
//             str2+="#";
//         }
//         return str2+str1;
//     }
// }
// {
//     function DNAStrand(dna){
//         //your code here
//         if(dna.length==0)
//             return "";
//         var str="";
//         for(var i=0;i<dna.length;i++){
//             switch(dna[i]){
//                 case 'A':str+='T'; break;
//                 case 'T':str+='A'; break;
//                 case 'C':str+='G'; break;
//                 case 'G':str+='C'; break;
//             }
//         }
//         return str;
//     }
// }
// {
//     function SeriesSum(n)
// {
//     // Happy Coding ^_^
//     if(n==0){
//         return "0.00";
// }
//     if(n==1){
//         return "1.00";
//     }
//     if(n>1){
//         var res=1;
//         for(var i=0;i<n-1;i++){
//             res+=1/(4+3*(i));
//         } 
//         res=new Number(res);
//         return res.toFixed(2);
//     }
   
// }
// }
// {
//     function duplicateCount(text){
//         //...
//         if(text.length==0){
//             return 0;
//         }
//         var res=[];
//         var arr=[];
//         var res2=[];
//         for(var i=0;i<text.length;i++){
//             if(arr.indexOf(text[i].toLowerCase())==-1&&arr.indexOf(text[i].toUpperCase())==-1){
//                 arr.push(text[i].toLowerCase());
//             }
//             else if(arr.indexOf(text[i].toLowerCase())!=-1){
//                 res.push(text[i]);
             
//             }
//         }
//         for(var i=0;i<res.length;i++){
//             if(res2.indexOf(res[i].toLowerCase())==-1&&res2.indexOf(res[i].toUpperCase())==-1){
//                 res2.push(res[i]);
//             }
//         }
//         return res2.length;
//     }
// }
// {
//     function createPhoneNumber(numbers){
//         var str="(";
//         for(var i=0;i<3;i++)
//             str+=numbers[i];
//         str+=") ";
//         for(var i=3;i<6;i++){
//             str+=numbers[i];
//         }
//         str+="-";
//         for(var i=6;i<10;i++){
//             str+=numbers[i];
//         }
//         return str;
//     }
//     var array=[1,8,0,0,0,3,5,1,4,2,6]
//     console.log(createPhoneNumber(array));
// }
// {
//     function goodVsEvil(good, evil){
//         good=good.split(" ");
//         evil=evil.split(" ");
//         var goodScore=0;
//         var evilScore=0;
//         var goodArr=[1,2,3,3,4,10];
//         var evilArr=[1,2,2,2,3,5,10];
        
//         for(var i=0;i<good.length;i++){
//             goodScore+=good[i]*goodArr[i];
//         }
//         for(var i=0;i<evil.length;i++){
//             evilScore+=evil[i]*evilArr[i];
//         }
//         if(goodScore>evilScore){
//             return "Battle Result: Good triumphs over Evil";
//         }

//         if(goodScore<evilScore){
//             return "Battle Result: Evil eradicates all trace of Good";
//         }
//         if(goodScore==evilScore){
//             return "Battle Result: No victor on this battle field";
//         }
//     }
//     console.log(goodVsEvil("1 1 1","1"));
// }


// {
//     function groupCheck(s){
//         if(s.length==0){
//             return true;
//         }
//         var arr=[];
//         var arr2=[];
//         var flag=true;
//         for(var i=0;i<s.length;i++){
//             if(s[i]=='('||s[i]=='{'||s[i]=='['){
//                 arr.push(s[i]);
//             }
//             else if(s[i]==')'){
//                 if(arr.length==0){
//                     return false;
//                 }
//                 else if(arr[arr.length-1]=='('){
//                     arr.pop();
//                 }
//             }
//             else if(s[i]=='}'){
//                 if(arr.length==0){
//                     return false;
//                 }
//                 else if(arr[arr.length-1]=='{'){
//                     arr.pop();
//                 }
//             }
//             else if(s[i]==']'){
//                 if(arr.length==0){
//                     return false;
//                 }
//                 else if(arr[arr.length-1]=='['){
//                     arr.pop();
//                 }
//             }
//         }
//         if(arr.length!=0){
//             flag=false;
//         }
//         return flag;
//     }
//     console.log(groupCheck("()"));
// }

// {
//     function zero(){

//     }
//     function one(){

//     }
//     function two(){

//     }
//     function three(){

//     }
//     function four(){

//     }
//     function five(){

//     }
//     function six(){

//     }
//     function seven(){

//     }
//     function eight(){

//     }
//     function nine(){

//     }

//     function plus(){

//     }
//     function minus(){

//     }
//     function times(){

//     }

//     function dividedBy(){

//     }
// }

// {
//     var fibonacci = function(n) {
//         var arr=new Array(n);
//         arr[0]=0;
//         arr[1]=1;
       
//         for(var i=2;i<n+1;i++){
//             arr[i]=arr[i-1]+arr[i-2];
//         }
    
        
//         return arr[n];
//     }
//     console.log(fibonacci(70));
// }

{
    function multipleOfIndex(array) {
        // good luck
        var res=[];
        for(var i=0;i<array.length;i++){
            if(array[i]%(i)==0){
                
                res.push(array[i]);
            }
        }
        return res;
    }
    console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));
}