document.addEventListener('DOMContentLoaded', function() {
    // Création du style pour les alertes
    const style = document.createElement('style');
    style.textContent = `
        .custom-alert {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 30px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: fadeIn 0.3s, fadeOut 0.5s 2.5s;
        }
        .alert-success {
            background-color: #4CAF50;
        }
        .alert-error {
            background-color: #F44336;
        }
        @keyframes fadeIn {
            from { opacity: 0; top: 0; }
            to { opacity: 1; top: 20px; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Fonction pour afficher les alertes personnalisées
    function showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `custom-alert alert-${type}`;
        alert.textContent = message;
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    // Configuration
    const infoMessage = "Veuillez ajouter une adresse";
    const stockDiv = document.getElementById('stock');
    const urlParams = new URLSearchParams(window.location.search);
    const newAddress = urlParams.get('newAddress');

    // Charger ou initialiser les adresses
    let addresses = JSON.parse(localStorage.getItem('userAddresses')) || [];
    
    // Gestion de l'affichage initial
    function initDisplay() {
        if (newAddress) {
            const decodedAddress = decodeURIComponent(newAddress);
            updateAddress(decodedAddress);
            window.history.replaceState({}, document.title, window.location.pathname);
            showAlert("Adresse ajoutée avec succès", "success");
        } else if (addresses.length > 0) {
            stockDiv.textContent = addresses[0].adresse;
        } else {
            showInfoMessage();
        }
    }

    // Fonctions d'affichage
    function showInfoMessage() {
        stockDiv.textContent = infoMessage;
        stockDiv.style.color = "#999";
        stockDiv.style.fontStyle = "italic";
    }

    function showAddress(address) {
        stockDiv.textContent = address;
        stockDiv.style.color = "";
        stockDiv.style.fontStyle = "";
    }

    // Fonctions de gestion du localStorage
    function updateAddress(newAddress) {
        if (addresses.length > 0) {
            addresses[0].adresse = newAddress;
            showAlert("Adresse modifiée avec succès", "success");
        } else {
            addresses.push({ adresse: newAddress });
            showAlert("Adresse enregistrée avec succès", "success");
        }
        localStorage.setItem('userAddresses', JSON.stringify(addresses));
        showAddress(newAddress);
    }

    function removeAddress() {
        addresses = [];
        localStorage.setItem('userAddresses', JSON.stringify(addresses));
        showInfoMessage();
        showAlert("Adresse supprimée avec succès", "success");
    }

    // Initialisation des boutons
    const modifyBtn = document.querySelector('.gestion button:first-of-type');
    const deleteBtn = document.querySelector('.gestion button:nth-of-type(2)');

    if (modifyBtn && deleteBtn) {
        // Gestion du bouton Modifier
        modifyBtn.addEventListener('click', function() {
            if (stockDiv.textContent === infoMessage) {
                showAlert("Veuillez d'abord ajouter une adresse", "error");
                return;
            }

            const newAddress = prompt("Modifier l'adresse (format: Adresse, Ville):", stockDiv.textContent);
            
            if (newAddress === null) return; // Annulation
            
            if (newAddress.trim() === "") {
                removeAddress();
            } else if (newAddress.includes(',')) {
                updateAddress(newAddress);
            } else {
                showAlert('Format requis: Adresse, Ville', "error");
            }
        });

        // Gestion du bouton Supprimer
        deleteBtn.addEventListener('click', function() {
            if (stockDiv.textContent === infoMessage) {
                showAlert("Aucune adresse à supprimer", "error");
                return;
            }

            if (confirm('Voulez-vous vraiment supprimer cette adresse ?')) {
                removeAddress();
            }
        });
    }

    // Initialisation
    initDisplay();

    // Animation du titre (optionnel)
    const title = document.querySelector('.GESTION h1');
    if (title) {
        const originalText = title.textContent;
        title.textContent = '';
        
        originalText.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? ' ' : char;
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.transition = `opacity 0.3s ease ${index * 0.1}s, transform 0.3s ease ${index * 0.1}s`;
            span.style.transform = `translate(${(Math.random() * 20 - 10)}px, ${(Math.random() * 20 - 10)}px)`;
            
            title.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translate(0, 0)';
            }, 100 + index * 100);
        });
    }
});