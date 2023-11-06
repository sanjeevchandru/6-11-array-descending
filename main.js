document.write("Descending order of an array elements"+"<br>");
document.write("----------------------------------------"+"<br>");

let arr=[-7,20,10,4,2,8,0,-3,-1,];
let b=[];
temp=0;
document.write("the given array:" +arr+"<br>");

for(let i=0;i<arr.length;i++)
{
	for(let j=i+1;j<arr.length;j++)
	{
		if(arr[i]<arr[j])
		{
			temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
		}
		
	}
	b.push(arr[i]);
}
 
 document.write("The descending array elements:"+b);