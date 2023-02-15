let num=6;
let count=0;
for(let i=2;i<num;i++)
{
if(num%i==0)
{
count++;
}
}
(count==2)? console.log("Prime number") :console.log("Not Prime");
