
 
 var samosa = 90;
    var Fruit_Juices = 100;
    var Chole_Bhature = 250;
    var Daal_Baati = 150;
    var Cakes = 140;
    var total = 0;
    var check = 1;
    var gw;
    var sfood;
    var perkg;
    var adder = document.querySelector("#getme");
    adder.addEventListener("click", getMe);
    var by = document.querySelector("#out");
    by.addEventListener("click", checkOut);
    var cme = document.querySelector("#clr");
    cme.addEventListener("click", clearMe);

    function getMe() {
      sfood = document.querySelector("#sf").value;
      perkg = parseFloat(document.querySelector("#entrybox").value);
      gw = document.querySelector("#writeme");
      if (Number.isNaN(perkg) === true) {
        alert("Only Numbers !!! Or The Field is Empty");
        check = 0;
      }
      else if (perkg<0) {
        alert("Negative value!! @stupid");
        check = 0;
      }
      else{
        check = 1;
      }
      if (check == 1) {
     
        switch (sfood) {
          case "Samosa":
            var sam = samosa * perkg;
            gw.value += "Samosa " + perkg + " pcs = " + sam + " rs\r";
            total += sam;
            perkg.value = "";
            break;
          case "Fruit Juices":
            var fj = Fruit_Juices * perkg;
            gw.value += "Fruit Juices " + perkg + " pcs = " + fj + " rs\r";
            total += fj;
            perkg.value = "";
            break;
          case "Chole Bhature":
            var cb = Chole_Bhature * perkg;
            gw.value += "Chole Bhature " + perkg + " pcs  = " + cb + " rs\r";
            total += cb;
            perkg.value = "";
            break;
          case "Daal Baati":
            var db = Daal_Baati * perkg;
            gw.value += "Daal Baati " + perkg + " pcs  = " + db + " RS\r";
            total += db;
            perkg.value = "";
            break;
          case "Cakes":
            var cake = Cakes * perkg;
            gw.value += "Cakes " + perkg + " pcs  = " + cake + " rs\r";
            total += cake;
            perkg.value = "";
            break;
        }

      }
    }

    function checkOut() {
      gw.value += "--------------------------------------------------------------\r";
      gw.value += "Your Total Bill Is = " + total + " rs Thanks For Shopping! :)\r";
      gw.value += "--------------------------------------------------------------\r";
      total = 0;
    }
    function clearMe () {
      gw.value = "";
    }


    