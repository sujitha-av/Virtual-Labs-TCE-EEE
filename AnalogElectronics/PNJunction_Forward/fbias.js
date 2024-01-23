function timedText() {
    setTimeout(myTimeout0, 900)
    setTimeout(myTimeout1, 1000) 
    setTimeout(myTimeout2, 1030)
    setTimeout(myTimeout3, 1070) 
}
function timedText1(){
  setTimeout(myTimeout4, 1000)
  setTimeout(myTimeout5, 6000)
}   
function myTimeout0() {
    document.getElementById('myImg').src = "./Assets/p-n222.gif";
} 
function myTimeout1() {
    document.getElementById('myImg').src = "./Assets/p-n2.gif";
}
function myTimeout2() {
    document.getElementById('myImg').src = "./Assets/jnformation112.gif";
}
function myTimeout3() {
    document.getElementById('myImg').src = "./Assets/Snapshot_6.gif";
    check=1;
}    
function myTimeout4() {
    document.getElementById('myImg').src = "./Assets/depletion_layer1112.gif";
}
function myTimeout5() {
    document.getElementById('myImg').src = "./Assets/Snapshot_1.gif";
    
}
function myTimeout00() {
    document.getElementById('myImg').src = "./Assets/1.gif";
} 
function myTimeout11() {
    document.getElementById('myImg').src = "./Assets/2.gif";
}
function myTimeout22() {
    document.getElementById('myImg').src = "./Assets/3.gif";
}
function myTimeout33() {
    document.getElementById('myImg').src = "0v.gif";
}
function diodeval()
{
    var Vs=Number(document.getElementById("bnn").value);
    var vd=0.53;
    if(Vs>=0.54 && Vs<0.7)
    {
        document.getElementById("diode").innerHTML= 0.53+' '+ 'V';
}
    else if(Vs>=0.7 && Vs<0.9)
    {
        document.getElementById("diode").innerHTML= 0.54+' '+ 'V';
}
    else if(Vs>=0.9 && Vs<1.1)
    {
        document.getElementById("diode").innerHTML= 0.58+' '+ 'V';
}
    else if(Vs>=1.1 && Vs<1.3)
    {
        document.getElementById("diode").innerHTML= 0.6+' '+ 'V';
}
    else if(Vs>=1.3 && Vs<1.5)
    {
        document.getElementById("diode").innerHTML= 0.63+' '+ 'V';
}
    else if(Vs>=1.5 && Vs<1.7)
    {
        document.getElementById("diode").innerHTML= 0.65+' '+ 'V';
}
    else if(Vs>=1.7 && Vs<1.9)
    {
        document.getElementById("diode").innerHTML= 0.68+' '+ 'V';
}
    else if(Vs>=1.9 && Vs<2.1)
    {
        document.getElementById("diode").innerHTML= 0.7+' '+ 'V';
}
    else if(Vs>=2.1 && Vs<2.3)
    {
        document.getElementById("diode").innerHTML= 0.71+' '+ 'V';
}
    else if(Vs>=2.3 && Vs<2.6)
    {
        document.getElementById("diode").innerHTML= 0.72+' '+ 'V';
}
    else if(Vs>=2.6 && Vs<2.9)
    {
        document.getElementById("diode").innerHTML= 0.73+' '+ 'V';
}
    else if(Vs>=2.9 && Vs<3.3)
    {
        document.getElementById("diode").innerHTML= 0.74+' '+ 'V';
}
    else if(Vs>=3.3 && Vs<3.6)
    {
        document.getElementById("diode").innerHTML= 0.75+' '+ 'V';
}
    else if(Vs>=3.6 && Vs<4.1)
    {
        document.getElementById("diode").innerHTML= 0.76+' '+ 'V';
}
    else if(Vs>=4.1)
    {
        document.getElementById("diode").innerHTML= 0.77+' '+ 'V';
}
    else
    {
        document.getElementById("diode").innerHTML= 0+' '+ 'V';
}
}
function currentval()
{
    var Vs=Number(document.getElementById("bnn").value);
    var vd=0.53;
    if(Vs>=0.54)
    {    
    var V = Vs-vd;
    var r = 1000;
    var Cur = V/r*1000;
    var I = Cur.toFixed(3);
    document.getElementById("current").innerHTML= I +' '+ 'mA';  
}
    else
    {
        document.getElementById("current").innerHTML= '0 A';

}
}
function fbias(asdf) {
    document.getElementById('bnn').innerHTML=asdf;
    var v = asdf;
    if(v>=0 && v<0.1)
    {

        step3.style.display="block";
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/Snapshot_1.gif";
}
    else if(v==0.1)
    {
        step3.style.display="none";
        step4.style.display="block";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        setTimeout(myTimeout00, 0)
        setTimeout(myTimeout11, 700) 
        setTimeout(myTimeout22, 1200)
        setTimeout(myTimeout33, 1700)
}
    else if(v>=0.11 && v<=0.53)
    {
        step3.style.display="none";
        step4.style.display="block";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/06.gif";
}
    else if(v >= 0.54 && v <= 0.58 )
    {      
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="block";
        step6.style.display="none";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop1.gif";
}
    else if(v > 0.58 && v <= 0.6 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop1.5.gif";
}
    else if(v > 0.6 && v <= 0.65 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop2.gif";
}
    else if(v > 0.65 && v <= 0.7 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop2.5.gif";
}
    else if(v > 0.7 && v <= 0.72 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop3.gif";
}
    else if(v > 0.72 && v <= 0.74 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop3.5.gif";
}
    else if(v > 0.74 && v <= 0.76 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop4.gif";
}
    else if(v > 76 && v <= 0.77 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop4.5.gif";
}
    else if(v > 0.77 && v <= 2 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop5.gif";
}
    else if(v > 2 && v <= 2.5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop6.gif";
}
    else if(v > 2.5 && v <= 3)
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="block";
        step7.style.display="none";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop7.gif";
}
    else if(v > 3 && v <= 3.5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop8.gif";
}
    else if(v > 3.5 && v <= 4 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop9.gif";
}
    else if(v > 4 && v <= 5 )
    {
        step3.style.display="none";  
        step4.style.display="none";
        step5.style.display="none";
        step6.style.display="none";
        step7.style.display="block";
        document.getElementById('myImg').src= "./Assets/fbiasworkloop10.gif";
}
    
}
function steptwo()
{
    step1.style.display="none";
    step2.style.display="block";
    
}
function stepthree()
{
    step2.style.display="none";
    step3.style.display="block";

}
function stepfour()
{
    step3.style.display="none";
    step4.style.display="block";

}
function reset() 
  {
      document.getElementById('myImg').src= "./Assets/p-n221.gif";
      document.getElementById("interval1").disabled=true;
      document.getElementById("interval2").disabled=true;
      document.getElementById("interval").disabled= false;
      document.getElementById("s1").value = "0";
      document.getElementById("diode").value = "0 V";
      document.getElementById("current").value = "0 A";
      document.getElementById("bnn").value = "0";
      document.getElementById("bnn2").value = "0";
      document.getElementById("s1").disabled = true;
      step3.style.display="none";  
      step4.style.display="none";
      step5.style.display="none";
      step6.style.display="none";
      step7.style.display="none";
      step1.style.display="block";
      step2.style.display="none";
      
      
}
