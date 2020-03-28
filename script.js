var input=document.querySelector("input");
var vowel=document.querySelector("vowel");
var len=document.querySelector("#lencount");
var vcount=document.querySelector("#v_count");
var ccount=document.querySelector("#c_count");
var scount=document.querySelector("#s_count");
var sccount=document.querySelector("#sc_count");
var numcount=document.querySelector("#num_count");
var btn=document.querySelector("button.analyse")
function v_count(input)
{
    var vowel='aeiouAEIOU';
    var vowelscount=0;
    for( var i=0;i<input.length;i++)
    {
        if(vowel.indexOf(input[i])!==-1)
        {
            vowelscount++;
        }
    }
    return vowelscount;
}
function c_count(input)
{    var vowel='aeiouAEIOU';
     var consonantcount=0;
     for( var i=0;i<input.length;i++)
     
     {
         if(vowel.indexOf(input[i])==-1)
         {
             consonantcount++;
         }
     }
     return consonantcount;
    

}
function s_count(input)
{   
    var space=' '
    var spacecount=0
    for(var i=0;i<input.length;i++)
    {
        if(space.indexOf(input[i])!==-1)
        {
            spacecount++
        }
    }
    return spacecount
}
function sc_count(input)
{
   var sc=":,?,/,!,$,%,@,#,^,*,-,+,=,>,<,{},[],(),&,;,\,.,~"
   var scount=0
   for(var i=0;i<input.length;i++)
   {
       if(sc.indexOf(input[i])!==-1)
       {
         scount++;

       }
       
   }
   return scount
}
function num_count(input)
{
    var num="0,1,2,3,4,5,6,7,8,9"
    var numcount=0;
    for(var i=0;i<input.length;i++)
    {
        if(num.indexOf(input[i])!=-1)
        
        {
            numcount++
        }
    }
    return numcount
}
btn.addEventListener("click", function(){
   len.textContent="Length of string:"+input.value.length;
    vcount.textContent="Total no. of vowels:"+v_count(input.value);
    ccount.textContent="Total no. of consonants:"+(c_count(input.value)-(s_count(input.value)+sc_count(input.value)+num_count(input.value)));
    scount.textContent="Total no. of spaces:"+s_count(input.value);
    sccount.textContent="Total no. of special characters:"+sc_count(input.value);
    numcount.textContent="Total no. of digits:"+num_count(input.value);


});
