function generateHeaderAndFooter() {
  // Add the header and footer HTML as you've done in your dynamic script
  const header = document.getElementById('header-placeholder');
  const footer = document.getElementById('footer-placeholder');

  header.innerHTML = `
 <div class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <!-- Logo -->
        <a href="index.html" class="text-2xl font-bold text-gray-800">
            Offer<span class="text-blue-500">best</span>daily
        </a>

        <!-- Navigation Links (Visible on medium screens and up) -->
       
       <nav class="hidden md:flex space-x-6 bg-blue-500 px-4 py-2 rounded-lg">
            <a href="home.html" class="text-white text-lg font-medium hover:bg-blue-600 px-3 py-2 rounded transition-all duration-300">Hjem</a>
            <a href="about.html" class="text-white text-lg font-medium hover:bg-blue-600 px-3 py-2 rounded transition-all duration-300">Om oss</a>
            <a href="contact.html" class="text-white text-lg font-medium hover:bg-blue-600 px-3 py-2 rounded transition-all duration-300">Kontakt</a>
            <a href="games.html" class="text-white text-lg font-medium hover:bg-blue-600 px-3 py-2 rounded transition-all duration-300">Spill</a>
            <a href="favorites.html" class="text-white text-lg font-medium hover:bg-blue-600 px-3 py-2 rounded transition-all duration-300">Favoritter</a>
        </nav>

        <!-- Mobile Menu Button (Visible only on small screens) -->
        <div class="md:hidden">
            <button id="hamburger-btn" class="text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </div>

    <!-- Mobile Menu (Hidden by default, toggled with JavaScript) -->
    <div id="mobile-menu" class="hidden md:hidden bg-gray-50 shadow-lg">
        <div class="flex flex-col items-center py-4 space-y-4">
            <a href="home.html" class="text-gray-700 text-lg font-medium hover:text-blue-500 transition-colors duration-300">Hjem</a>
            <a href="about.html" class="text-gray-700 text-lg font-medium hover:text-blue-500 transition-colors duration-300">Om oss</a>
            <a href="contact.html" class="text-gray-700 text-lg font-medium hover:text-blue-500 transition-colors duration-300">Kontakt</a>
            <a href="games.html" class="text-gray-700 text-lg font-medium hover:text-blue-500 transition-colors duration-300">Spill</a>
            <a href="favorites.html" class="text-gray-700 text-lg font-medium hover:text-blue-500 transition-colors duration-300">Favoritter</a>
        </div>
    </div>
</div>
    `;

  // Add the footer HTML
  footer.innerHTML = `
     <footer class="bg-gray-50 shadow-md border-t border-gray-200 py-10">
    <div class="max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <!-- About Section -->
            <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Om oss</h3>
                <p class="text-gray-600 text-sm">
                    Offerbestdaily er dedikert til å gi de beste spill- og underholdningstilbudene daglig. Vi streber etter å bygge et brukervennlig fellesskap for alle spillentusiaster.
                </p>
                <a href="about.html" class="text-blue-500 font-medium mt-3 block hover:underline">Les mer</a>
            </div>

            <!-- Quick Links -->
            <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Hurtiglenker</h3>
                <ul class="space-y-3">
                    <li><a href="terms.html" class="text-gray-600 hover:text-blue-500 transition-all">Bruksvilkår</a></li>
                    <li><a href="privacy.html" class="text-gray-600 hover:text-blue-500 transition-all">Personvern</a></li>
                    <li><a href="copywrite.html" class="text-gray-600 hover:text-blue-500 transition-all">Opphavsrett Politikk</a></li>
                    <li><a href="cookie.html" class="text-gray-600 hover:text-blue-500 transition-all">Informasjonskapsel Politikk</a></li>
                </ul>
            </div>

            <!-- Newsletter -->
            <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">Nyhetsbrev</h3>
                <p class="text-gray-600 text-sm mb-4">Meld deg på for å motta de nyeste tilbudene og oppdateringene direkte til e-posten din.</p>
                <form id="newsletter-form" class="flex items-center space-x-3">
                    <input required type="email" id="email" class="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Din e-post">
                    <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-300">Send</button>
                </form>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="mt-10 border-t border-gray-200 pt-6 text-center text-gray-600">
            <p class="text-sm">&copy; 2024 Offerbestdaily. Alle rettigheter forbeholdt.</p>
        </div>
    </div>
</footer>
<div id="thank-you-popup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden">
    <div class="bg-white rounded-lg shadow-lg p-8 text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">Takk for at du abonnerte!</h3>
        <p class="text-gray-600 mb-6">Du vil snart motta de nyeste oppdateringene og tilbudene direkte i din e-post. Hold deg oppdatert!</p>
        <button id="close-popup" class="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-300">
            Lukk
        </button>
    </div>
</div>

    `;
    document.getElementById('hamburger-btn').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden'); // Toggle visibility of the mobile menu
    });
    

  // Get the form, popup, and close button
const newsletterForm = document.getElementById('newsletter-form');
const thankYouPopup = document.getElementById('thank-you-popup');
const closePopupButton = document.getElementById('close-popup');

// Handle the form submission
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    // Basic validation for email
    if (emailValue === '' || !emailValue.includes('@')) {
        alert('Proszę podać prawidłowy adres e-mail.');
        return;
    }

    // Show the popup and reset the form
    thankYouPopup.classList.remove('hidden');
    emailInput.value = ''; // Clear the input field
});

// Handle the popup close button click
closePopupButton.addEventListener('click', () => {
    thankYouPopup.classList.add('hidden');
});



};