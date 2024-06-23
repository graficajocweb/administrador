const evento = document.getElementById('send')
const enviarFormulario = () => {

        let numero = document.getElementById('numero').value;

var win = window.open(`https://www.google.com/search?q=${numero}`, '_blank');
}
evento.addEventListener('click', enviarFormulario)

function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    }, 3000);
}



const shareBtn = document.getElementById('shareBtn')
        shareBtn.addEventListener('click', event => {
            if (navigator.share) {
                //drive
                navigator.share({
                    text: 'Please read this great article: ',
                    url: 'https://graficajoc.000webhostapp.com/catalogo.html'
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                    .catch((err) => console.error(err));
            } else {

                alert("The current browser does not support the share function. Please, manually share the link")
            }
        });


        const Formulariodiceñador = document.getElementById('Formulariodiceñador')
        Formulariodiceñador.addEventListener('click', event => {
            if (navigator.share) {
                //drive
                navigator.share({
                    text: 'Please read this great article: ',
                    url: 'https://docs.google.com/forms/d/1kxXFVReG9FygdpAIu-MyeP4cGlz7PoitRy7oCyJ0_90/edit'
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                    .catch((err) => console.error(err));
            } else {

                alert("The current browser does not support the share function. Please, manually share the link")
            }
        });


    

        const Listadiceñador = document.getElementById('Listadiceñador')
        Listadiceñador.addEventListener('click', event => {
            if (navigator.share) {
                //drive
                navigator.share({
                    text: 'Please read this great article: ',
                    url: 'https://docs.google.com/spreadsheets/d/1iGC9A09DXW9HWivOmcWRB32z1vXeLYD5VfwKr50y2ak/edit#gid=200723316'
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                    .catch((err) => console.error(err));
            } else {

                alert("The current browser does not support the share function. Please, manually share the link")
            }
        });

        const ADMINISTRAR = document.getElementById('ADMINISTRAR')
        ADMINISTRAR.addEventListener('click', event => {
            if (navigator.share) {
                //drive
                navigator.share({
                    text: 'Please read this great article: ',
                    url: 'https://graficajocweb.github.io/johnnyweb/'
                }).then(() => {
                    console.log('Thanks for sharing!');
                })
                    .catch((err) => console.error(err));
            } else {

                alert("The current browser does not support the share function. Please, manually share the link")
            }
        });