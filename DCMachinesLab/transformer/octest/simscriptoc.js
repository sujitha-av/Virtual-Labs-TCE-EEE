 google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawGaugeChart);

      function drawGaugeChart() {

        var dvp = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['V', 0 ],
        ]);
          
          var dip = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['A', 0 ],
        ]);
          
          var dwp = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['W', 0 ],
        ]);

        var ovp = {
            min:0,max:300,
          width: 75, height: 75,
          minorTicks: 5
        };
          
          var oip = {
            min:0,max:5,
          width: 75, height: 75,
          minorTicks: 5
        };
          
          var owp = {
            min:0,max:600,
          width: 75, height: 75,
          minorTicks: 5
        };
          

          var cvp = new google.visualization.Gauge(document.getElementById('vp'));
          var cip = new google.visualization.Gauge(document.getElementById('ip'));
          var cwp = new google.visualization.Gauge(document.getElementById('wp'));

        cvp.draw(dvp, ovp); 
          setInterval(function() {
          dvp.setValue(0, 1, pvoltmeter.value);
          cvp.draw(dvp, ovp);
        }, 100);
          
          
           cip.draw(dip, oip); 
          setInterval(function() {
          dip.setValue(0, 1, pammeter.value);
          cip.draw(dip, oip);
        }, 100);
          
          
           cwp.draw(dwp, owp); 
          setInterval(function() {
          dwp.setValue(0, 1, pwattmeter.value);
          cwp.draw(dwp, owp);
        }, 100);
          
      }

    var sup;
        function supplyonoff(){ 
            if(supply.value=="ON"){
                 supply.value="OFF"
                document.getElementById('kvafix').disabled=true;
                document.getElementById('kvafix').style.opacity=0.5;
                document.getElementById('ratiofix').disabled=true;
                document.getElementById('ratiofix').style.opacity=0.5;
                document.getElementById('ledcolor').style.backgroundColor= "#ABFF00";
            }
            else
            {
                supply.value="ON";
                document.getElementById('kvafix').disabled=false;
                document.getElementById('kvafix').style.opacity=1;
                document.getElementById('ratiofix').disabled=false;
                document.getElementById('ratiofix').style.opacity=1;
                document.getElementById('ledcolor').style.backgroundColor= "#f44336";
            }
            
        }
  
      
var irated=2.0;
var ipfactor=1;
var vprated=250;
  function noload(){
            if(variac.value<=20){
                pammeter.value=0;
            }
            else if(variac.value<50){
                pammeter.value=(0.1*irated*ipfactor*ipfactor).toFixed(2);
            }
            else if(variac.value<70){
                pammeter.value=(0.2*irated*ipfactor*ipfactor).toFixed(2);
            }
            else if(variac.value<90){
                pammeter.value=(0.3*irated*ipfactor*ipfactor).toFixed(2);
                    }
            else if(variac.value<110){
                pammeter.value=(0.4*irated*ipfactor*ipfactor).toFixed(2);
            }
            else if(variac.value<130){
                pammeter.value=(0.5*irated*ipfactor*ipfactor).toFixed(2);
            }else if(variac.value<150){
                pammeter.value=(0.6*irated*ipfactor*ipfactor).toFixed(2);
            }else if(variac.value<170){
                pammeter.value=(0.7*irated*ipfactor*ipfactor).toFixed(2);
            }else if(variac.value<190){
                pammeter.value=(0.8*irated*ipfactor*ipfactor).toFixed(2);
            }else if(variac.value<210){
                pammeter.value=(0.9*irated*ipfactor*ipfactor).toFixed(2);
            }else if(variac.value<=250){
                pammeter.value=(1.0*irated*ipfactor*ipfactor).toFixed(2);
            }else if(variac.value>250){
                pammeter.value=(1.2*irated*ipfactor*ipfactor).toFixed(2);
            }
        }
    
        function loading(){
            if(supply.value=="OFF"){
             varout.value=variac.value;
        document.getElementById('supply').disabled=true;
        document.getElementById('supply').style.opacity=0.5;
            
                    noload();
                    pvoltmeter.value=variac.value;
                    pwattmeter.value=(pvoltmeter.value*pammeter.value*0.2).toFixed(2);
            

        }
        if(variac.value==0){
            document.getElementById('supply').disabled=false;
            document.getElementById('supply').style.opacity=1;
        }
       
        if(supply.value=="ON" && (variac.value>0)){
            window.alert("TURN ON the supply!");
            variac.value=0;
        }
            
        }

function findParameters(){
    var vo,io,wo,iw,iu,ro,xo;
    vo=parseFloat(pvoltmeter.value);
    io=parseFloat(pammeter.value);
    wo=parseFloat(pwattmeter.value);
    iw=(io*0.2).toFixed(3);
    iu=(Math.sqrt((Math.pow(io,2))-(Math.pow(iw,2)))).toFixed(3);
    ro=(vo/iw).toFixed(0);
    xo=(vo/iu).toFixed(0);
    document.getElementById('eqres').innerHTML=(ro+" Ω");
    document.getElementById('eqreact').innerHTML=(xo+" Ω");
}


function fixratio(){
     if(ratioselect.value=="(250 V / 125 V)"){
            document.getElementById('kvachange').innerHTML="1 Phase "+(kvaselect.value)+" (250 V / 125 V) Transformer";
            ipfactor=1;
            vprated=250;
            
        }
        else if(ratioselect.value=="(125 V / 250 V)"){
            document.getElementById('kvachange').innerHTML="1 Phase "+(kvaselect.value)+" (125 V / 250 V) Transformer";
            ipfactor=2;
            vprated=125;
            
        } 
        else{
            document.getElementById('kvachange').innerHTML="1 Phase "+(kvaselect.value)+" (250 V / 250 V) Transformer";
            ipfactor=1;
            vprated=250;
            
            }
    }

function fixkva(){
     if(kvaselect.value=="1 KVA"){
            document.getElementById('kvachange').innerHTML="1 Phase 1 KVA "+(ratioselect.value)+" Transformer";
            irated=0.4;
        }
        else if(kvaselect.value=="2 KVA"){
            document.getElementById('kvachange').innerHTML="1 Phase 2 KVA "+(ratioselect.value)+" Transformer";
            irated=0.8;
        } 
        else if(kvaselect.value=="3 KVA"){
            document.getElementById('kvachange').innerHTML="1 Phase 3 KVA "+(ratioselect.value)+" Transformer";
            irated=1.2;
        } 
        else if(kvaselect.value=="4 KVA"){
            document.getElementById('kvachange').innerHTML="1 Phase 4 KVA "+(ratioselect.value)+" Transformer";
            irated=1.6;
        } 
        else{
            document.getElementById('kvachange').innerHTML="1 Phase 5 KVA "+(ratioselect.value)+" Transformer";
            irated=2.0;
            }
    }


        var i=1;
function addToTable() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(i);
  var no = row.insertCell(0);
  var vp = row.insertCell(1);
  var ip = row.insertCell(2);
  var wp = row.insertCell(3);
  
  no.innerHTML = i;
  vp.innerHTML = pvoltmeter.value;
  ip.innerHTML = pammeter.value;
  wp.innerHTML = pwattmeter.value;
    
  i+=1;
}
        function deleteFromTable(){
            var d=document.getElementById('del').value;
            d=parseInt(d)
            if(d>=1 && i>1){
            document.getElementById("myTable").deleteRow(d);
                 i-=1;
                for(var j=d;j<=i-1;j++){
                    var t=document.getElementById("myTable").rows[j].cells;
                    t[0].innerHTML=j;
                }
            d-=1;
            }
        }
        
       
 