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
            min:0,max:50,
          width: 75, height: 75,
          minorTicks: 5
        };
          
          var owp = {
            min:0,max:6000,
          width: 75, height: 75,
          minorTicks: 5
        };
          

          var cvp = new google.visualization.Gauge(document.getElementById('vp'));
          var cvs = new google.visualization.Gauge(document.getElementById('vs'));
          var cip = new google.visualization.Gauge(document.getElementById('ip'));
          var cis = new google.visualization.Gauge(document.getElementById('is'));
          var cwp = new google.visualization.Gauge(document.getElementById('wp'));
          var cws = new google.visualization.Gauge(document.getElementById('ws'));

        cvp.draw(dvp, ovp); 
          setInterval(function() {
          dvp.setValue(0, 1, pvoltmeter.value);
          cvp.draw(dvp, ovp);
        }, 100);
          
          cvs.draw(dvp, ovp); 
          setInterval(function() {
          dvp.setValue(0, 1, svoltmeter.value);
          cvs.draw(dvp, ovp);
        }, 100);
          
           cip.draw(dip, oip); 
          setInterval(function() {
          dip.setValue(0, 1, pammeter.value);
          cip.draw(dip, oip);
        }, 100);
          
          cis.draw(dip, oip); 
          setInterval(function() {
          dip.setValue(0, 1, sammeter.value);
          cis.draw(dip, oip);
        }, 100);
          
           cwp.draw(dwp, owp); 
          setInterval(function() {
          dwp.setValue(0, 1, pwattmeter.value);
          cwp.draw(dwp, owp);
        }, 100);
          
          cws.draw(dwp, owp); 
          setInterval(function() {
          dwp.setValue(0, 1, swattmeter.value);
          cws.draw(dwp, owp);
        }, 100);
          
      }

        function supplyonoff(){ 
            if(supply.value=="ON"){
                 supply.value="OFF"
                document.getElementById('loadfix').disabled=true;
                document.getElementById('loadfix').style.opacity=0.5;
                document.getElementById('kvafix').disabled=true;
                document.getElementById('kvafix').style.opacity=0.5;
                document.getElementById('ratiofix').disabled=true;
                document.getElementById('ratiofix').style.opacity=0.5;
                document.getElementById('ledcolor').style.backgroundColor= "#ABFF00";
            }
            else
            {
                supply.value="ON";
                document.getElementById('loadfix').disabled=false;
                document.getElementById('loadfix').style.opacity=1;
                document.getElementById('kvafix').disabled=false;
                document.getElementById('kvafix').style.opacity=1;
                document.getElementById('ratiofix').disabled=false;
                document.getElementById('ratiofix').style.opacity=1;
                document.getElementById('ledcolor').style.backgroundColor= "#f44336";
            }
            
        }
  
        function supplydrop(){
            if(variac.value>=250){
                var r=0.85;
            return (variac.value)-(pammeter.value*r);
            }else{
                return (variac.value);
            }
            
        }
var irated=2.0;
var ipfactor=1;
var isfactor=1;
var vprated=250;
var vsfactor=1;
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
             loadout.value=load.value;
        document.getElementById('supply').disabled=true;
        document.getElementById('supply').style.opacity=0.5;
             if(load.value>0 && variac.value>=vprated){
                 document.getElementById('variac').disabled=true;
                 
            }else{
                document.getElementById('variac').disabled=false;
            }
            
                if(variac.value<vprated){
                     document.getElementById('load').disabled=true;
                    loadout.value=0;
                    load.value=0;
                }
                else{
                     document.getElementById('load').disabled=false;
                }
                
                if(variac.value<vprated){
                     noload();
                pvoltmeter.value=variac.value;
                pwattmeter.value=(pvoltmeter.value*pammeter.value*0.2).toFixed(2);
                svoltmeter.value=((variac.value-(sammeter.value*1))/vsfactor).toFixed(2);
                }
               
                if(variac.value>=vprated && load.value>0){var x;
                   
                    pammeter.value=((irated*ipfactor*ipfactor)+((irated*ipfactor*10)*(load.value)/100)).toFixed(2);
                    pvoltmeter.value=(variac.value-(pammeter.value*0.1)).toFixed(2);
                    sammeter.value=((irated*isfactor*10)*(load.value)/100).toFixed(2);
                    svoltmeter.value=((variac.value-(sammeter.value*0.5))/vsfactor).toFixed(2);
                    swattmeter.value=(svoltmeter.value*sammeter.value*0.96).toFixed(2);
                     x=((Math.pow(sammeter.value,2)*0.5)+(Math.pow(pammeter.value,2)*0.1)+(variac.value*(irated*ipfactor)*0.2)+(svoltmeter.value*sammeter.value*0.96)).toFixed(2);
                     pwattmeter.value=x;
                    if(loadselect.value=="inductive"){
                        pwattmeter.value=(x*0.9).toFixed(2);
                        swattmeter.value=(swattmeter.value*0.9).toFixed(2);
                    }
                    document.getElementById('eff').innerHTML=((swattmeter.value/pwattmeter.value)*100).toFixed(2);
                     document.getElementById('reg').innerHTML=((((variac.value/vsfactor)-svoltmeter.value)/(variac.value/vsfactor))*100).toFixed(2);
                    
                   
                }
               /* if(variac.value>=vprated && load.value==0){
                    noload();
                pvoltmeter.value=variac.value;
                 pwattmeter.value=(pvoltmeter.value*pammeter.value*0.2).toFixed(2);
                    sammeter.value=((irated*isfactor*10)*(load.value)/100).toFixed(2);
                    svoltmeter.value=((variac.value-(sammeter.value*1))/vsfactor).toFixed(2);
                    swattmeter.value=(svoltmeter.value*sammeter.value*0.96).toFixed(2);
                    document.getElementById('eff').innerHTML=((swattmeter.value/pwattmeter.value)*100).toFixed(2);
                     document.getElementById('reg').innerHTML=((((variac.value/vsfactor)-svoltmeter.value)/(variac.value/vsfactor))*100).toFixed(2);
                    
                }*/
                

                
                

        }
        if(load.value==0 && variac.value==0){
            document.getElementById('supply').disabled=false;
            document.getElementById('supply').style.opacity=1;
        }
       
        if(supply.value=="ON" && (variac.value>0 || load.value>0)){
            window.alert("TURN ON the supply!");
            variac.value=0;
            load.value=0;
        }
            
        }

function fixratio(){
     if(ratioselect.value=="(250 V / 125 V)"){
            document.getElementById('kvachange').innerHTML="1 Phase "+(kvaselect.value)+" (250 V / 125 V) Transformer";
            ipfactor=1;
            isfactor=2;
            vprated=250;
            vsfactor=2;
            
        }
        else if(ratioselect.value=="(125 V / 250 V)"){
            document.getElementById('kvachange').innerHTML="1 Phase "+(kvaselect.value)+" (125 V / 250 V) Transformer";
            ipfactor=2;
            isfactor=1;
            vprated=125;
            vsfactor=0.5;
            
        } 
        else{
            document.getElementById('kvachange').innerHTML="1 Phase "+(kvaselect.value)+" (250 V / 250 V) Transformer";
            ipfactor=1;
            isfactor=1;
            vprated=250;
            vsfactor=1;

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


function fixload(){
     if(loadselect.value=="inductive"){
            document.getElementById('loadchange').innerHTML="1 Phase Resistive and Inductive Load (%)";
            document.getElementById('cap').innerHTML="Tabulation: Resistive and Inductive Load";
        }
        else{document.getElementById('loadchange').innerHTML="1 Phase Resistive Load (%)";
             document.getElementById('cap').innerHTML="Tabulation: Resistive Load";}   
    }

        var i=1;
function addToTable() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(i);
  var no = row.insertCell(0);
  var vp = row.insertCell(1);
  var ip = row.insertCell(2);
  var wp = row.insertCell(3);
  var vs = row.insertCell(4);
  var is = row.insertCell(5);
  var ws = row.insertCell(6);
  var ef = row.insertCell(7);
  var re = row.insertCell(8);
  no.innerHTML = i;
  vp.innerHTML = pvoltmeter.value;
  ip.innerHTML = pammeter.value;
    wp.innerHTML = pwattmeter.value;
    vs.innerHTML = svoltmeter.value;
    is.innerHTML = sammeter.value;
    ws.innerHTML = swattmeter.value;
    ef.innerHTML = eff.value;
    re.innerHTML = reg.value;
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
        
       function tabletoarrayr() {
                    var myData = document.getElementById('myTable').rows;
                    var mylist = [];
                    for (var i = 1; i < myData.length; i++) {
                            var el = myData[i].children;
                            var myel = [];
                            for (var j = 1; j < el.length; j++) {
                                    myel.push(el[j].innerText);
                            }
                            mylist.push(myel);

                    }
                    return mylist;
       }
 google.charts.load('current', {'packages':['corechart', 'line']});
    
    function addef(){
         mylis=tabletoarrayr();
         var datarows = [];
         var l=document.getElementById("myTable").rows.length;
    for (var i = 0; i < l-1; i++) {
      datarows.push([parseFloat(mylis[i][5]), parseFloat(mylis[i][6])]);
    }
        return datarows;
    }
 function addre(){
         mylis=tabletoarrayr();
         var datarows = [];
         var l=document.getElementById("myTable").rows.length;
    for (var i = 0; i < l-1; i++) {
      datarows.push([parseFloat(mylis[i][5]), parseFloat(mylis[i][7])]);
    }
        return datarows;
    }
    
    function drawChart() {

      var opvsef = document.getElementById('opvsef');
      var dataef = new google.visualization.DataTable();
      dataef.addColumn('number', 'Index');
      dataef.addColumn('number', 'Efficiency (%)');
      var g=addef();
      dataef.addRows(g);

      var optionsef = {
        title: 'Output Power vs % of Efficiency',
        curveType: 'function',
        legend: 'none',
        width: 900,
        height: 500,
          pointSize:5,
          hAxis:{title:'Output Power (Watts)',
                },
          vAxis:{title:'Efficiency (%)',
                },
          };

        var chartef = new google.visualization.LineChart(opvsef);
        chartef.draw(dataef, optionsef);
        
         var opvsre = document.getElementById('opvsre');
      var datare = new google.visualization.DataTable();
      datare.addColumn('number', 'Index');
      datare.addColumn('number', 'Regulation (%)');
      var h=addre();
      datare.addRows(h);

      var optionsre = {
        title: 'Output Power vs % of Regulation',
        curveType: 'function',
        legend: 'none',
        width: 900,
        height: 500,
          pointSize:5,
          hAxis:{title:'Output Power (Watts)',
                },
          vAxis:{title:'Regulation (%)',
                },
          };

        var chartre = new google.visualization.LineChart(opvsre);
        chartre.draw(datare, optionsre);
    }