const projectButtons = document.querySelectorAll(".projects-button");
const bookmarkManagerDiv = document.getElementById("bookmark-manager-div");
const complaintFormDiv = document.getElementById("complaint-form-div");
const drumMachineDiv = document.getElementById("drum-machine-div");

projectButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === 'bookmark-manager-button') {
            if (bookmarkManagerDiv.style.display === 'flex') {
                bookmarkManagerDiv.style.display = 'none';
                bookmarkManagerDiv.aria-hidden === 'true';
                return;
            }
            complaintFormDiv.style.display = 'none';
            drumMachineDiv.style.display = 'none';
            bookmarkManagerDiv.style.display = 'flex';
            complaintFormDiv.aria-hidden === 'true';
            drumMachineDiv.aria-hidden === 'true';
            bookmarkManagerDiv.aria-hidden === 'false';
        } else if (button.id === 'complaint-form-button') {
            if (complaintFormDiv.style.display === 'flex') {
                complaintFormDiv.style.display = 'none';
                complaintFormDiv.aria-hidden === 'true';
                return;
            }
            bookmarkManagerDiv.style.display = 'none';
            drumMachineDiv.style.display = 'none';
            complaintFormDiv.style.display = 'flex';
            complaintFormDiv.aria-hidden === 'false';
            drumMachineDiv.aria-hidden === 'true';
            bookmarkManagerDiv.aria-hidden === 'true';
        } else if (button.id === 'drum-machine-button') {
            if (drumMachineDiv.style.display === 'flex') {
                drumMachineDiv.style.display = 'none';
                drumMachineDiv.aria-hidden === 'true';
                return;
            }
            complaintFormDiv.style.display = 'none';
            bookmarkManagerDiv.style.display = 'none';
            drumMachineDiv.style.display = 'flex';
            complaintFormDiv.aria-hidden === 'true';
            drumMachineDiv.aria-hidden === 'false';
            bookmarkManagerDiv.aria-hidden === 'true';
        }
    })
})