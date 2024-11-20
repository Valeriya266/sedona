window.addEventListener('DOMContentLoaded', function() {
    // Modal

    let modalTrigger = document.querySelectorAll('#modal-opener'),
        modal = document.querySelector('.form-booking'),
        modalCloseBtn = document.querySelector('.form-booking__close');

    closeModal();
        
    function openModal () {
        modal.style.display = 'block';
        /*modal.classList.add('.active-modal');
        /*document.body.style.background-color = "rgba(0, 0, 0, 0.5)";*/

        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;

        clearInterval(modalTimerId);
    };
            
    function closeModal () {
        modal.style.display = 'none';

        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        /*document.body.style.overflow = '';*/
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