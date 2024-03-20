//Expand menu
$(document).ready(function() {

    $(".thumbnail-image").click(function() {
        hideNavbar();
        var fullsizeSrc = $(this).data("fullsize");
        openModal(fullsizeSrc);
    });
});


function openModal(imgSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    
    modal.style.display = "block";
    modalImage.src = imgSrc;

    document.querySelector('.close').onclick = function() {
        closeModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    showNavbar();
}

function hideNavbar() {
    document.querySelector('.navbar').style.display = "none";
}

function showNavbar() {
    document.querySelector('.navbar').style.display = "flex";
}

// NavBar 

$(document).ready(function() {
    // Exibe ou oculta os links de navegação com base na largura da tela
    function toggleNavLinks() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        if (screenWidth <= 700) {
            $('.nav-links').hide();
        } else {
            $('.nav-links').show();
        }
    }

    // Executa a função ao carregar a página e redimensionar a janela
    toggleNavLinks();
    $(window).resize(toggleNavLinks);
});
