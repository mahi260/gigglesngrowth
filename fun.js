// Initialize points
let points = 0;

document.getElementById("set-goal-button").addEventListener("click", function () {
    // Get user input
    const goalAmount = parseFloat(document.getElementById("goal-amount").value);
    const timeline = parseInt(document.getElementById("timeline").value);

    // Update goal details
    document.getElementById("display-goal-amount").textContent = $$(goalAmount.toFixed(2));
    document.getElementById("display-timeline").textContent = $$(timeline.months);

    // Calculate reward points (e.g., 1 point for every $100 saved)
    const rewardPoints = Math.floor(goalAmount / 100);
    points += rewardPoints;

    // Display reward points
    document.getElementById("reward-points").textContent = rewardPoints;
    document.getElementById("points").textContent=points;
});