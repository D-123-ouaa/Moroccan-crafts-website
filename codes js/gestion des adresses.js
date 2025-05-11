$(document).ready(function() {
    // Initialisation des éléments
    initAddressManagement();

    function initAddressManagement() {
        if ($('.GESTION').length) {
            initAddresses();
            setupAddressButtons();
            animateElements();
            ensureAddButtonExists(); // Nouvelle fonction pour garantir l'existence du bouton
        }
        
        if ($('.NOUVELLE').length) {
            setupNewAddressForm();
        }
    }

    // Nouvelle fonction pour s'assurer que le bouton existe
    function ensureAddButtonExists() {
        // Vérifie si le bouton existe déjà
        if ($('.gestion .b').length === 0) {
            // Crée le bouton s'il n'existe pas
            $('.gestion').append(`
                <button class="b"><a href="Nouvelle adresse.html">Ajouter une adresse</a></button>
                <br>
            `);
        }
    }

    // Fonctions existantes (conservées sans modification)
    function initAddresses() {
        let addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
        
        if (addresses.length === 0) {
            addresses = [{
                id: generateId(),
                address: "009 Rue EL saada, Casablanca",
                isDefault: true
            }];
            localStorage.setItem('userAddresses', JSON.stringify(addresses));
        }
        
        displayCurrentAddress(addresses);
    }

    function displayCurrentAddress(addresses) {
        if (addresses.length > 0) {
            $('#stock').text(addresses[0].address);
        }
    }

    function setupAddressButtons() {
        $('.gestion button:contains("Modifier")').on('click', function() {
            const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
            if (addresses.length === 0) return;
            
            const newAddress = prompt("Modifiez l'adresse:", addresses[0].address);
            if (newAddress && newAddress !== addresses[0].address) {
                addresses[0].address = newAddress;
                localStorage.setItem('userAddresses', JSON.stringify(addresses));
                $('#stock').text(newAddress);
                showNotification('Adresse modifiée avec succès!');
            }
        });
        
        $('.gestion button:contains("Supprimer")').on('click', function() {
            const addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
            if (addresses.length === 0) return;
            
            if (confirm('Voulez-vous vraiment supprimer cette adresse?')) {
                addresses.shift();
                
                if (addresses.length === 0) {
                    addresses.push({
                        id: generateId(),
                        address: "Adresse par défaut",
                        isDefault: true
                    });
                }
                
                localStorage.setItem('userAddresses', JSON.stringify(addresses));
                $('#stock').text(addresses[0].address);
                showNotification('Adresse supprimée avec succès!');
            }
        });
    }

    function setupNewAddressForm() {
        $('.Enregitrer').on('click', function() {
            const address = $('input[placeholder="Entrez votre adresse"]').val().trim();
            
            if (!address) {
                alert('Veuillez entrer une adresse valide');
                return;
            }
            
            let addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
            addresses.push({
                id: generateId(),
                address: address,
                isDefault: false
            });
            
            localStorage.setItem('userAddresses', JSON.stringify(addresses));
            window.location.href = "Gestion des adresses.html";
        });
    }

    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    function animateElements() {
        $('.GESTION h1, .gestion > *').css({
            'opacity': '0',
            'transform': 'translateY(20px)'
        }).each(function(i) {
            $(this).delay(200 * i).animate({
                'opacity': '1',
                'transform': 'translateY(0)'
            }, 600);
        });
    }

    function showNotification(message, isSuccess = true) {
        const notification = $(`
            <div class="notification alert alert-${isSuccess ? 'success' : 'danger'}">
                ${message}
            </div>
        `);
        
        $('body').append(notification);
        notification.css({
            'position': 'fixed',
            'top': '20px',
            'right': '20px',
            'z-index': '10000',
            'opacity': '0',
            'transition': 'opacity 0.3s'
        });
        
        notification.animate({'opacity': 1}, 200);
        setTimeout(() => notification.fadeOut(() => notification.remove()), 3000);
    }
});