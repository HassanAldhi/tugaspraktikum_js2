        // Mendapatkan elemen input
        var botolInput = document.getElementById("botol");
        var gelasInput = document.getElementById("gelas");
        var sedotanInput = document.getElementById("sedotan");

        // Mendapatkan elemen output
        var totalBotolOutput = document.getElementById("totalBotol");
        var totalGelasOutput = document.getElementById("totalGelas");
        var totalSedotanOutput = document.getElementById("totalSedotan");
        var subtotalOutput = document.getElementById("subtotal");

        // Menambahkan event listener untuk input
        botolInput.addEventListener("input", hitungEstimasi);
        gelasInput.addEventListener("input", hitungEstimasi);
        sedotanInput.addEventListener("input", hitungEstimasi);

        // Fungsi untuk menghitung estimasi penggunaan plastik
        function hitungEstimasi() {
            var botolPerHari = parseInt(botolInput.value) || 0;
            var gelasPerHari = parseInt(gelasInput.value) || 0;
            var sedotanPerHari = parseInt(sedotanInput.value) || 0;

            var totalBotolPerTahun = botolPerHari * 365;
            var totalGelasPerTahun = gelasPerHari * 365;
            var totalSedotanPerTahun = sedotanPerHari * 365;
            var subtotal = totalBotolPerTahun + totalGelasPerTahun + totalSedotanPerTahun;

            totalBotolOutput.innerText = totalBotolPerTahun;
            totalGelasOutput.innerText = totalGelasPerTahun;
            totalSedotanOutput.innerText = totalSedotanPerTahun;
            subtotalOutput.innerText = subtotal;
        }