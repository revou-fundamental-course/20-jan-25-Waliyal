document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); // Mengambil form pertama
    const resultBmi = document.getElementById("result-bmi");
    const statusDescription = document.getElementById("status-description"); // Mengambil elemen keterangan status

    // Event listener untuk form
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default

        // Mengambil nilai dari input
        const beratBadan = parseFloat(document.getElementById("Input-berat-badan").value);
        const tinggiBadan = parseFloat(document.getElementById("Input-tinggi-badan").value) / 100; // Mengubah cm ke meter

        // Menghitung BMI
        const bmi = beratBadan / (tinggiBadan * tinggiBadan);
        resultBmi.textContent = bmi.toFixed(2); // Menampilkan hasil BMI dengan 2 desimal

        // Menentukan kategori berat badan
        let status;
        if (bmi < 18.5) {
            status = "Kekurangan berat badan";
            statusDescription.textContent = "Anda perlu meningkatkan berat badan Anda untuk mencapai kesehatan yang optimal.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = "Berat badan normal";
            statusDescription.textContent = "Anda berada dalam kategori berat badan yang sehat. Pertahankan gaya hidup sehat Anda!";
        } else if (bmi >= 25 && bmi < 29.9) {
            status = "Kelebihan berat badan";
            statusDescription.textContent = "Pertimbangkan untuk menurunkan berat badan melalui pola makan sehat dan olahraga.";
        } else {
            status = "Obesitas";
            statusDescription.textContent = "Sangat penting untuk berkonsultasi dengan profesional kesehatan untuk mendapatkan saran yang tepat.";
        }

        // Menampilkan keterangan status di sebelah kanan hasil BMI
        statusDescription.style.display = "block"; // Tampilkan keterangan status
    });

    // Reset button functionality
    const resetButton = document.querySelector(".bg-b");
    resetButton.addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default
        form.reset(); // Mengatur ulang form
        resultBmi.textContent = "0"; // Mengatur ulang hasil BMI
        statusDescription.textContent = ""; // Menghapus keterangan status
        statusDescription.style.display = "none"; // Sembunyikan keterangan status
    });
});