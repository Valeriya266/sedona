window.addEventListener('DOMContentLoaded', function() {
    // Modal

    let modalTrigger = document.querySelectorAll('[modal-opener]'),
        modal = document.querySelector('.form-booking'),
        modalCloseBtn = document.querySelector('form-booking__close');

    closeModal();
        
    function openModal () {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    };
            
    function closeModal () {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal ();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);
})