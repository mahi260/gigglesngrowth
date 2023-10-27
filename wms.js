document.getElementById('calculate-button').addEventListener('click', calculateWealthManagement);

function calculateWealthManagement() {
    const selectedGoals = Array.from(document.getElementById('goals').selectedOptions).map(option => option.value);
    const goalAmount = parseFloat(document.getElementById('goal-amount').value);
    const earnings = parseFloat(document.getElementById('earnings').value);
    const spending = parseFloat(document.getElementById('spending').value);
    const transportSpending = parseFloat(document.getElementById('transport').value);
    const entertainmentSpending = parseFloat(document.getElementById('entertainment').value);
    const groceriesSpending = parseFloat(document.getElementById('groceries').value);
    const timeline = parseInt(document.getElementById('timeline').value);

    // Calculate average monetary value needed for selected goals
    const totalGoals = selectedGoals.length;
    const averageGoalValue = spending / totalGoals;

    // Calculate monthly savings needed to fulfill goals over the timeline
    const monthlySavings = goalAmount / (timeline * 12);

    const resultOutput = `Your selected financial goals are: ${selectedGoals.join(', ')}<br>
    Average Goal Value: ₹${averageGoalValue.toFixed(2)}<br>
    Monthly Savings Required to Fulfill Goals: ₹${monthlySavings.toFixed(2)}<br>
    To fulfill your goal amount of ₹${goalAmount.toFixed(2)} over ${timeline} years, save ₹${goalAmount.toFixed(2)} in total, which is ₹${monthlySavings.toFixed(2)} per month.<br><br>
    Start your savings journey today to achieve your financial goals!`;

    document.getElementById('result-output').innerHTML = resultOutput;
}