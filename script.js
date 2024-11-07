// Funções para rolagem suave
document.querySelector('.lista li a[href="#contato"]').addEventListener('click', function(event) {
    event.preventDefault();
    const contatoSection = document.getElementById('contato');
    contatoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('.lista li a[href="#sobre"]').addEventListener('click', function(event) {
    event.preventDefault();
    const contatoSection = document.getElementById('sobre');
    contatoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('.lista li a[href="#ambientes"]').addEventListener('click', function(event) {
    event.preventDefault();
    const contatoSection = document.getElementById('ambientes');
    contatoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

function sendToWhatsApp(event) {
    event.preventDefault(); 

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const whatsappMessage = `Olá, meu nome é ${name}.%0A` +
                            `meu Email: ${email}%0A` +
                            `Assunto: ${subject}%0A` +
                            `Mensagem: ${message}`;

    const phoneNumber = "5541995964359"; 
    
    const whatsappURL = `https://wa.me/5541995964359?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
}