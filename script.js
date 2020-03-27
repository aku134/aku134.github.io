var input=document.querySelector("input");
var vowel=document.querySelector("vowel");
var len=document.querySelector("#lencount");
var vcount=document.querySelector("#v_count");
var ccount=document.querySelector("#c_count");
var scount=document.querySelector("#s_count");
var sccount=document.querySelector("#sc_count");
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
   var sc=":,?,/,!,$,%,@,#,^,*,-,+,=,>,<,{},[],(),&"
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
btn.addEventListener("click", function(){
    len.textContent="Length of string:"+input.value.length;
    vcount.textContent="Total no. of vowels:"+v_count(input.value);
    ccount.textContent="Total no. of consonants:"+c_count(input.value);
    scount.textContent="Total no. of spaces:"+s_count(input.value);
    sccount.textContent="Total no. of speacial characters:"+sc_count(input.value);

});
