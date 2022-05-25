var inputfield=document.getElementById("input1");
var btn=document.getElementById("btn1");
var span1=document.querySelector("#second-1 .current");
var span2=document.querySelector("#second-1 .next");
console.log(span1,span2);
btn.addEventListener('click',function()
{
	var value=inputfield.value;
	if(isNaN(value))
	{
		alert("please enter a number");
		clearInterval(id);
		return;
	}
	if(value<1 || value>9)
	{
		alert("Range out of bounds");
		clearInterval(id);
		return;
	}
	console.log(value);
	inputfield.value="";
	var integer=parseInt(value);
	console.log(integer);
	var i=0;
	resetNumbers(span1,span2);
	clearInterval(id);
	function counting()
	{
		console.log(i);
      if(i===integer)
      {
      	clearInterval(id);
      	alert("Timer Has Stopped");
      	return;
      }
	  increaseCount(span1,span2);
	  i++;
      
	}
	var id=setInterval(counting,1000);
})
function resetNumbers(span1,span2,end)
{
	span1.innerText=0;
	span2.innerText=1;
}
function increaseCount(span1,span2)
{
	span2.classList.add("animate");
	setTimeout(function()
	{
		span1.innerText=span2.innerText;
		span2.classList.remove("animate");
		span2.innerText=parseInt(span2.innerText)+1;
	},500);
}