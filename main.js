// Variabel input
var botolInput = document.getElementById("bottles");
var cupInput = document.getElementById("cups");
var strawInput = document.getElementById("straws");
var cottonInput = document.getElementById("cottons");
var cigaretteInput = document.getElementById("cigarettes");
var bagsInput = document.getElementById("bags");
var wrapInput = document.getElementById("wrap");
var silverwareInput = document.getElementById("silverware");
var stirrersInput = document.getElementById("stirrers");
var containersInput = document.getElementById("containers");

// Variabel output
var bottlesOutput = document.getElementById("sumBottles");
var cupsOutput = document.getElementById("sumCups");
var strawsOutput = document.getElementById("sumStraws");
var cottonsOutput = document.getElementById("sumCottons");
var cigarettesOutput = document.getElementById("sumCigarettes");
var bagsOutput = document.getElementById("sumBags");
var wrapOutput = document.getElementById("sumWrap");
var silverwareOutput = document.getElementById("sumSilverware");
var stirrersOutput = document.getElementById("sumStirrers");
var containersOutput = document.getElementById("sumContainers");
var subtotalOutput = document.getElementById("subtotal");

// Event listener input
botolInput.addEventListener("input", calculate);
cupInput.addEventListener("input", calculate);
strawInput.addEventListener("input", calculate);
cottonInput.addEventListener("input", calculate);
cigaretteInput.addEventListener("input", calculate);
bagsInput.addEventListener("input", calculate);
wrapInput.addEventListener("input", calculate);
silverwareInput.addEventListener("input", calculate);
stirrersInput.addEventListener("input", calculate);
containersInput.addEventListener("input", calculate);

// Fungsi untuk menghitung estimasi penggunaan plastik
function calculate() {
    var bottlesPerDay = parseInt(botolInput.value) || 0;
    var cupsPerDay = parseInt(cupInput.value) || 0;
    var strawsPerDay = parseInt(strawInput.value) || 0;
    var cottonsPerDay = parseInt(cottonInput.value) || 0;
    var cigarettesPerDay = parseInt(cigaretteInput.value) || 0;
    var bagsPerDay = parseInt(bagsInput.value) || 0;
    var wrapPerDay = parseInt(wrapInput.value) || 0;
    var silverwarePerDay = parseInt(silverwareInput.value) || 0;
    var stirrersPerDay = parseInt(stirrersInput.value) || 0;
    var containersPerDay = parseInt(containersInput.value) || 0;

    var bottlesPerYr = bottlesPerDay * 365;
    var cupsPerYr = cupsPerDay * 365;
    var strawsPerYr = strawsPerDay * 365;
    var cottonsPerYr = cottonsPerDay * 365;
    var cigarettesPerYr = cigarettesPerDay * 365;
    var bagsPerYr = bagsPerDay * 365;
    var wrapPerYr = wrapPerDay * 365;
    var silverwarePerYr = silverwarePerDay * 365;
    var stirrersPerYr = stirrersPerDay * 365;
    var containersPerYr = containersPerDay * 365;

    var subtotal = bottlesPerYr + cupsPerYr + strawsPerYr + cottonsPerYr + cigarettesPerYr + bagsPerYr + wrapPerYr + silverwarePerYr + stirrersPerYr + containersPerYr;

    if (bottlesPerYr > 0) { bottlesOutput.innerText = bottlesPerYr; } else { bottlesOutput.innerText = ""; }
    if (cupsPerYr > 0) { cupsOutput.innerText = cupsPerYr; } else { cupsOutput.innerText = ""; }
    if (strawsPerYr > 0) { strawsOutput.innerText = strawsPerYr; } else { strawsOutput.innerText = ""; }
    if (cottonsPerYr > 0) { cottonsOutput.innerText = cottonsPerYr; } else { cottonsOutput.innerText = ""; }
    if (cigarettesPerYr > 0) { cigarettesOutput.innerText = cigarettesPerYr; } else { cigarettesOutput.innerText = ""; }
    if (bagsPerYr > 0) { bagsOutput.innerText = bagsPerYr; } else { bagsOutput.innerText = ""; }
    if (wrapPerYr > 0) { wrapOutput.innerText = wrapPerYr; } else { wrapOutput.innerText = ""; }
    if (silverwarePerYr > 0) { silverwareOutput.innerText = silverwarePerYr; } else { silverwareOutput.innerText = ""; }
    if (stirrersPerYr > 0) { stirrersOutput.innerText = stirrersPerYr; } else { stirrersOutput.innerText = ""; }
    if (containersPerYr > 0) { containersOutput.innerText = containersPerYr; } else { containersOutput.innerText = ""; }
    subtotalOutput.innerText = subtotal;
}
