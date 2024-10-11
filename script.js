function filterActivities() {
    const locationSelect = document.getElementById("location");
    const selectedLocation = locationSelect.value;
    const activities = document.querySelectorAll(".activity");

    activities.forEach(activity => {
        const activityLocation = activity.getAttribute("data-location");

        if (selectedLocation === "all" || selectedLocation === activityLocation) {
            activity.style.display = "flex"; // Show the activity
        } else {
            activity.style.display = "none"; // Hide the activity
        }
    });
}

function activityClicked(activityName) {
    alert(`You clicked on: ${activityName}`);
}