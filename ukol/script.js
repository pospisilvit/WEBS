document.getElementById('filtrMesto').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#dataTabulka tbody tr');

    rows.forEach(row => {
        const cityName = row.cells[1].textContent.toLowerCase();
        row.style.display = cityName.includes(filterValue) ? '' : 'none';
    });
});

document.getElementById('searchMesto').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const options = document.querySelectorAll('#mestoSelect option');

    options.forEach(option => {
        const cityName = option.textContent.toLowerCase();
        option.style.display = cityName.includes(filterValue) ? '' : 'none';
    });
});

document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedCity = document.getElementById('mestoSelect').value;
    alert(`Vybrané město: ${selectedCity}`);
    console.log(`Vybrané město: ${selectedCity}`);
});