function cliqueSurLaBox() {

    var generalBackground = document.getElementById('generalBackground');

    // Get the checkbox
    var checkBox = document.getElementById("myCheck");

    // Get the output text
    //var text = document.getElementById("text");

    //----  Button
    var button = document.getElementById("button");
    var petitRond = document.getElementById('petitRond');
    //Powered by CMG
    var poweredCMG = document.getElementById("poweredCMG");

    var liensUtiles = document.getElementById("liensUtiles");

    var svgLinkedin = document.getElementById("svgLinkedin");
    var svgFacebook = document.getElementById("svgFacebook");


    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        //text.style.display = "block";
        //---- ON
        generalBackground.style.backgroundColor = '#0b2425';
        

        liensUtiles.style.color = 'white';
        poweredCMG.style.color = 'white';
        svgLinkedin.style.color = 'white';
        svgFacebook.style.color = 'white';

        //button
        button.style.boxShadow = 'rgb(109 109 109 / 30%) -1px -4px 5px -2px, rgb(74 74 74 / 66%) 4px 4px 10px 0px, rgb(115 115 115) 4px 4px 4px 0px inset, rgb(134 134 134 / 62%) -4px -4px 4px 0px inset';
        petitRond.style.boxShadow = '-8px -4px 8px 0px #d4d4d43b, 8px 4px 12px 0px #58af47';

    } else {
        //text.style.display = "none";
        //---- OFF
        generalBackground.style.backgroundColor = '#F5F5F1';

        liensUtiles.style.color = '#0b2425';
        poweredCMG.style.color = 'black';
        svgLinkedin.style.color = '#0b2425';
        svgFacebook.style.color = '#0b2425';

        button.style.boxShadow = '-8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset';
        petitRond.style.boxShadow = '-8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6';


    }
}