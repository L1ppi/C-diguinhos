let progress = 0;

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const height = (progress / 160) * 90 + 20;
    progressBar.style.height = height + "%";
    progressText.innerText = progress + "%";
}

function increaseProgress() {
    if (progress < 100) {
        progress += 10;
        updateProgressBar();
    }
}

function decreaseProgress() {
    if (progress > 0) {
        progress -= 10;
        updateProgressBar();
    }
}
