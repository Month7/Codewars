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

// {
//     function race(v1, v2, g) {
//         // your code
//         var res=new Array(3);
//         if(v1>v2){
//             return null;
//         }
//         var hour=0;
//         var min=0;
//         var src=0;
//         var v=(v2-v1)/3600;
//         var time=g/v;
//         hour=time/3600;
//         hour=Math.floor(hour);
//         time-=hour*3600;
//         min=time/60;
//         min=Math.floor(min);
//         time-=min*60;
//         sec=time;
//         sec=Math.floor(sec);
//         res[0]=hour;
//         res[1]=min;
//         res[2]=sec;
//         return res;
//     }
//     console.log(race(720, 850, 70));
// }

// {
//     function Node(data) {
//         this.data = data;
//         this.next = null;
//     }
      
//     function length(head) {
//         // Your code goes here.
//         var length=0;
        
//         while(head!=null){
//             length++;
//             head=head.next;
//         }
//         return length;
//     }
      
//     function count(head, data) {
//         // Your code goes here.
//         var count=0;
//         while(head!=null){
//             if(head.data==data){
//                 count++;
//             }
//             head=head.next;
//         }
//         return count;
//     }
// }

// {
    // function Node(data) {
    //     this.data = data;
    //     this.next = null;
    // }
      
    // function push(head, data) {
    //     // Go.
    //     if(head==null){
    //         var Link=new Node(data);
    //         return Link;
    //     }
    //     else{
    //         var p=new Node(data);
    //         var L=new Node(data);
    //         L.next=head;
    //         return L;
    //     }
    // }
      
    // function buildOneTwoThree() {
    //     // Go.
    //     var link=new Node(3);
    //     link=push(link,2);
    //     link=push(link,1);
    //     return link;
    // }
//     console.log(push(new Node(1),2).data);
//     console.log(buildOneTwoThree().data);
//     console.log(buildOneTwoThree().next.data);
//     console.log(buildOneTwoThree().next.next.data);
// }

// {
//     var list=buildOneTwoThree();
//     function Node(data) {
//         this.data = data;
//         this.next = null;
//     }
      
//     function getNth(node, index) {
//         // Your code goes here.
//         if(node==null){
//             return false;
//         }
//         if(index==0){
//             return node.data;
//         }
//         for(var i=0;i<index;i++){
//             if(node==null){
//                 return false;
//             }
//             node=node.next;
//         }
//         if(node==null){
//             return false;
//         }
//         return node.data;
//     }
//     console.log(getNth(list,100));
// }

// {
//     function high(x){
//         var arr=x.split(" ");
//         var max=-1;
//         var res;
//         var sum;
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]=='volcano'){
//                 return 'volcano';
//             }
//             var asc=0;
//             var each="";
//             each=arr[i];
//             each=each.split("");
//             sum=0;
            
//             for(var j=0;j<each.length;j++){
//                 sum+=each[j].charCodeAt();
//             }
           
//             if(sum>max){
//                 max=sum;
              
//                 res=each;
//             }
//         }
//         return res.join("");
//     }
//     console.log(high('what time are we climbing up the volcano'));
// }

// {
//     function domainName(url){
//         var reg=/[^http://|^https://|^www.]+/i;
//         if((/^(www.)+/i).test(url)){
//             var res=url.match(/www.(\S*)/);
//             var arr=res[1].split(".");
//             return arr[0];
//         } 
//         else if((/^(https:\/\/www.)+/i).test(url)){  
//             var res=url.match(/https:\/\/www.(\S*)/);
//             var arr=res[1].split(".");
//             return arr[0];
//         }
//         else if((/^(http:\/\/www.)+/i).test(url)){
//             var res=url.match(/http:\/\/www.(\S*)/);   
//             var arr=res[1].split(".");
//             return arr[0];
//         }
//         else if((/^(http:\/\/)+/i).test(url)){
//             var res=url.match(/http:\/\/(\S*)/);
//             var arr=res[1].split(".");
//             return arr[0];
//         }
//         else if((/^(https:\/\/)+/i).test(url)){
//             var res=url.match(/https:\/\/(\S*)/);
//             var arr=res[1].split(".");
//             return arr[0];
//         }
//         else{
//             var arr=url.split(".");
//             return arr[0];
//         }
//     }
//     function domainName(url){

//     }
//     /*url解析*/
//     function domainName(url){
//         return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
//     }
//     function domainName(url){
//         url = url.replace("https://", '');
//         url = url.replace("http://", '');
//         url = url.replace("www.", '');
//         return url.split('.')[0];
//     };
//     console.log((domainName("www.xakep.ru")));
//     console.log((domainName("http://www.b0305gx1iwqixqt-t725wfbxre.info/archive/")));
//     console.log((domainName("https://www.codewars.com/")));
   
// }

// {
//     function step(g, m, n) {
//         // your code
//         var res=[];
//         for(var i=m;i<n;i++){
//             if(judge(i)&&judge(i+g)){
//                 res.push(i);
//                 res.push(i+g);
//                 return res;
//             }
//         }
//         return null;
//     }
//     function judge(n){
//         for(var i=2;i<n;i++){
//             if(n%i==0){
//                 return false;
//             }
//         }
//         return true;
//     }
//     console.log(step(2,100,110));
// }

// {
    // function chooseBestSum(t, k, ls) {
    //     // your code
    //     ls.sort();
    //     ls.reverse();
    //     var sum=0;
    //     var start=0;
    //     var max=-1;
    //     for(var j=0;j<ls.length;j++){
    //         sum=0;
    //         for(var i=start;i<k+start;i++){
    //             sum+=ls[i];
    //         }
    //         // console.log(sum);
    //         if(sum>max&&sum<=t){
    //             max=sum;
    //             // console.log(max);
    //         }
    //         else{
    //             start++;
    //         }
    //     }
    //     return max;
    // }
   
// }
// {
//     // function chooseBestSum(t, k, ls) {
//     //     var biggestCount = 0;
//     //     var recurseTowns = function(townsSoFar, lastIndex) {
//     //       townsSoFar = townsSoFar || [];
//     //       //base case
//     //       if (townsSoFar.length === k) {
//     //         var sumDistance = townsSoFar.reduce((a,b)=>a+b);
//     //         console.log(sumDistance);
//     //         if (sumDistance <= t && sumDistance > biggestCount) {
//     //           biggestCount = sumDistance;
//     //         }      
//     //         return; //EJECT
//     //       }
//     //       //recursive case
//     //       for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
//     //         recurseTowns(townsSoFar.concat(ls[i]), i);
//     //       }
//     //     }
//     //     recurseTowns();
//     //     return biggestCount || null;
//     //   }
//     function chooseBestSum(t, k, ls) {
//         let best = null;
//         function f(l,s,z) {
//           for (let i=z; i<ls.length;i++) {
//             let _l = l+1,
//                 _s = s + ls[i],
//                 _z = i+1;
//             if ( _l===k && _s <= t && _s > best) best = _s;
//             if (_l < k && _s < t) f(_l,_s,_z);
//           }
//         }
//         f(0,0,0);
//         return best;
//       }
//       var ts = [50, 55, 57, 56, 58];
//       var ys=[91,74,73,85,73,81,87];
//       console.log((chooseBestSum(163, 3, ts)));
//     //   console.log(chooseBestSum(230,3,ys));
//     /**
//      * v=
//      */
// }

// {
//     function reOrderArray(array){
//     // write code here
        
//         var odd=[];
//         var ign=[];
//         for(var i=0;i<array.length;i++){
//             if(array[i]%2==0){
//                 ign.push(array[i]);
                
//             }
//             else{
//                 odd.push(array[i]);
               
//             }
//         }
//         var res=odd.concat(ign);
//         return res;
//     }
//     var array=[8,7,9,6,3,4,2,1];
//     console.log(reOrderArray(array));
// }

// {
//     function ListNode(x){
//         this.val = x;
//         this.next = null;
//     }
//     function ReverseList(pHead){
//         if(pHead==null||pHead.next==null){
//             return pHead;
//         }
//         var newList=null;
//         var temp=null;
//         newList=ReverseList(pHead.next);
//         temp=pHead.next;
//         temp.next=pHead;
//         pHead.next=null;
//         temp=null;
//         return newList;
//     }
  
// }

// {
//     function ListNode(x){
//         this.val = x;
//         this.next = null;
//     }
//     function Merge(pHead1, pHead2){
//         // write code here
//         if(pHead1==null){
//             return pHead1;
//         }
//         else if(pHead2==null){
//             return pHead2;
//         }
//         var res=new ListNode(0);
//         while(pHead1!=null&&pHead2!=null){
//             if(pHead1.val<=pHead2.val){
//                 res.next=pHead1;
//                 pHead1=pHead1.next;
                
//             }
//             else if(pHead1.val>=pHead2.val){
//                 res.next=pHead2;
//                 pHead2=pHead2.next;
//             }
//             res=res.next;
//         }
//         if(pHead1!=null){
//             res.next=pHead1;
//         }
//         if(pHead2!=null){
//             res.next=pHead2;
//         }
//         return ;
//     }
// }

// {
//     function IsPopOrder(pushV, popV){
//         // write code here
//         var stack=[];
//         var j=0;
//         for(var i=0;i<pushV.length;i++){
//             stack.push(pushV[i]);
//             while(stack.length&&stack[stack.length-1]==popV[j]){
//                 stack.pop();
//                 j++;
//             }
//         }
//         return stack.length==0;

//     }
//     console.log(IsPopOrder([1,2,3,4,5],[4,5,3,2,1]));
//     console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]));
// }

// {
//     var array=[];
//     function push(node){
//         // write code here
//         array.push(node);
//     }
//     function pop(){
//         // write code here
//         array.pop();
//     }
//     function top(){
//         // write code here
//         return array[array.length-1];
//     }
//     function min(){
//         // write code here
//         return Math.min.apply(null,array);
//     }    
// }

// {
//     /* function TreeNode(x) {
//         this.val = x;
//         this.left = null;
//         this.right = null;
//     } */
  
//     function TreeDepth(pRoot){
//         // write code here
//         if(pRoot==null){
//             return 0;
//         }
//         var left=1+TreeDepth(pRoot.left);
//         var right=1+TreeDepth(pRoot.right);
//         return Math.max(left,right);
//     }
// }

// {
//     function multiply(array){
//         var res=[];
//         res[0]=1;
//         for(var i=1;i<array.length;i++){
//             res[i]=res[i-1]*array[i-1];
//         }
//         var temp=1;
//         for(var j=array.length-2;j>-1;j--){
//             temp*=array[j+1];
//             res[j]=res[j]*temp;
//         }
//         return res;
//     }
//     var array=[1,2,3,4,5];
//     console.log(multiply(array));  //120 60 40 30 24
// }

// {
//     var array={};
//     function Init(){
//         // write code here
//         array={};
//     }
//     //Insert one char from stringstream
//     function Insert(ch){
//         // write code here
//         if(array[ch]==null){
//             array[ch]=1;
//         }
//         else{
//             array[ch]++;
//         }
//     }
//     //return the first appearence once char in current stringstream
//     function FirstAppearingOnce(){
//         // write code here
//         for(var ch in array){
//             if(array.hasOwnProperty(array)){
//                 if(array[ch]==1){
//                     return ch;
//                 }
//             }
//         }
//         return '#';
//     }
// }

// {
//     /* function TreeNode(x) {
//         this.val = x;
//         this.left = null;
//         this.right = null;
//     } */
//     function Mirror(root){
//         // write code here
//         if(root==null){
//             return null;
//         }
//         var temp=root.left;
//         root.left=root.right;
//         root.right=temp;
//         Mirror(root.left);
//         Mirror(root.right);
//     }
// }

{
    /**
     * 1   2 3  4
     * 5   6 7  8
     * 9  10 11 12
     * 13 14 15 16
     */ 
    function printMatrix(matrix){
        // write code here
        var row=Math.sqrt(matrix.length);
        var res=[];
        for(var i=0;i<row;i++){
            res[i]=matrix[i];
        }
        var k=0;
        for(var i=row-1;i<row-1;i++){
            res[i]=matrix[k];
            k+=row;
        }
    }
}