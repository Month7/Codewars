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
    // var fibonacci = function(n) {
    //     var arr=new Array(n);
    //     arr[0]=0;
    //     arr[1]=1;
       
    //     for(var i=2;i<n+1;i++){
    //         arr[i]=arr[i-1]+arr[i-2];
    //     }
    
        
    //     return arr[n];
    // }
//     console.log(fibonacci(70));
// }

// {
//     function multipleOfIndex(array) {
//         // good luck
//         var res=[];
//         for(var i=0;i<array.length;i++){
//             if(array[i]%(i)==0){
                
//                 res.push(array[i]);
//             }
//         }
//         return res;
//     }
//     console.log(multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]));
// }

// {
//     function getLengthOfMissingArray(arrayOfArrays) {
//         if(arrayOfArrays==null){
//             return 0;
//         }
//         var len=[];
//         if(arrayOfArrays.length==0||arrayOfArrays.length==1){
//             return 0;
//         }
//         for(var i=0;i<arrayOfArrays.length;i++){
//             if(arrayOfArrays[i]==null){
//                 return 0;
//             }
//         }
//         for(var i=0;i<arrayOfArrays.length;i++){
//             len.push(arrayOfArrays[i].length);
//         }
//         if(len==null){
//             return 0;
//         }
//         if(len.length==1){
//             return 0;
//         }
//         for(var i=0;i<len.length;i++){
//             if(len[i]==0){
//                 return 0;
//             }
//         }
//         for(var i=0;i<len.length;i++){
//             for(var j=i+1;j<len.length;j++){
//                 if(len[i]>len[j]){
//                     var temp=len[i];
//                     len[i]=len[j];
//                     len[j]=temp;
//                 }
//             }
//         }
//         for(var i=0;i<len.length-1;i++){
//             if(len[i+1]!=len[i]+1){
//                 return len[i]+1;
//             }
//         }
//         return 0;
//     }
//     console.log(getLengthOfMissingArray([null,null]));
// }

// {
//     function isValidWalk(walk) {
//         //insert brilliant code here
//         if(walk.length!=10){
//             return false;
//         }
//         var s=0;
//         var n=0;
//         var w=0;
//         var e=0;
//         for(var i=0;i<walk.length;i++){
//             if(walk[i]=='s'){
//                 s++;
//             }
//             else if(walk[i]=='n'){
//                 n++;
//             }
//             else if(walk[i]=='w'){
//                 w++;
//             }
//             else if(walk[i]=='e'){
//                 e++;
//             }
//         }
//         if(w==e&&s==n){
//             return true;
//         }
//         return false;
//     }
//     console.log(isValidWalk(['e','w','w','e','s','n','n','n','s','s']))
// }

// {
//     function Xbonacci(signature,n){
//         var res=new Array(n);
//         var begin=0;
//         for(var i=0;i<n;i++){
//             res[i]=signature[i];
//         }
//         var len=signature.length;
//         var num=0;
//         var start=0;
//         var end=start+len-1;  
        

//         for(var i=signature.length;i<n;i++){
//             console.log(n);
//             for(var i=start;i<=end;i++){
//                 if(res[i]!=undefined){
//                     num+=res[i];
//                 }
//             }
//             start++;
//             end++;
           
//             console.log("i="+i);
//             res[i]=num;
//             num=0;
//         }
//         return res;
//     }
//     // console.log(Xbonacci([0,1],10));
//     // console.log(Xbonacci([1,1],10));
//     // console.log(Xbonacci([0,0,0,0,1],10));
//     // console.log(Xbonacci([1,0,0,0,0,0,1],10));
//     // console.log(Xbonacci([1,0,0,0,0,0,0,0,0,0],20));
//      console.log(Xbonacci([16, 17, 3, 11, 1, 11, 15],5));
// }

{
    function race(v1, v2, g) {
        // your code
        var res=new Array(3);
        if(v1>v2){
            return null;
        }
        var hour=0;
        var min=0;
        var src=0;
        var v=(v2-v1)/3600;
        var time=g/v;
        hour=time/3600;
        hour=Math.floor(hour);
        time-=hour*3600;
        min=time/60;
        min=Math.floor(min);
        time-=min*60;
        sec=time;
        sec=Math.floor(sec);
        res[0]=hour;
        res[1]=min;
        res[2]=sec;
        return res;
    }
    console.log(race(720, 850, 70));
}