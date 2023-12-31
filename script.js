const apiKey = 'AIzaSyDVRV0kt-4XTP5F7IVkpqwXRhkMek2IVBE';
const sheetId = '1H-1RYuhUos-jz7OBJyr5fqvICOI9AOOaZKgcH-phSPU';
const range = 'A:A'; // Assuming you want to fetch all data from column A

function fetchClubNames() {
    gapi.client.init({
        'apiKey': apiKey,
    }).then(function() {
        return gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: sheetId,
            range: range,
        });
    }).then(function(response) {
        var range = response.result;
        if (range.values.length > 0) {
            appendClubNames(range.values);
        } else {
            console.log('No data found.');
        }
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function appendClubNames(clubs) {
    const dropdown = document.getElementById('partnerClubsDropdown');
    clubs.forEach(function(club) {
        let a = document.createElement('a');
        a.textContent = club[0]; // Assuming the club name is in the first column
        dropdown.appendChild(a);
    });
}

gapi.load('client', fetchClubNames);

document.getElementById("partnerClubsBtn").addEventListener("click", function() {
    document.getElementById("partnerClubsDropdown").classList.toggle("show");
});
