window.addEventListener('DOMContentLoaded', function() {
    // Modal

    let modalTrigger = document.querySelectorAll('#modal-opener'),
        modal = document.querySelector('.form-booking'),
        modalCloseBtn = document.querySelector('.form-booking__close');

    closeModal();
        
    function openModal () {
        modal.style.display = 'block';
        modal.classList.add('.active-modal');
        /*document.body.style.overflow = 'hidden';*/
        clearInterval(modalTimerId);
    };
            
    function closeModal () {
        modal.style.display = 'none';
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
        if (e.code === "Escape" && modal.classList.contains('block')) { 
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 3000);
})