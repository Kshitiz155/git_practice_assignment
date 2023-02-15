let str="story";
let rev="";
for(let i=str.length;i>=0;i++)
{
rev=rev+str[i];
}
if(rev==str)
{
console.log("it is a palindrome");
}
else{
console.log("Not a palindrome");
}