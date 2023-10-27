document.getElementById("search-button").addEventListener("click", function () {
    // Get the user input (stock symbol or name)
    const stockSymbol = document.getElementById("stock-symbol").value;

    // Fetch stock details from your database or API
    // For demonstration purposes, we'll create a mock object
    const stockDetails = {
        symbol: stockSymbol,
        open: 150.00,
        close: 155.00,
        high: 160.00,
        low: 145.00,
        mCap: "10B",
        pe: 20.5,
        shares: "100M",
        debt: "2B",
        twoYearMend: "5%",
    };

    // Format and display the stock details
    const stockDetailsContainer = document.getElementById("stock-details-container");
    stockDetailsContainer.innerHTML = `
        <h3>${stockDetails.symbol} - Stock Details</h3>
        <ul>
            <li>Open: ${stockDetails.open}</li>
            <li>Close: ${stockDetails.close}</li>
            <li>High: ${stockDetails.high}</li>
            <li>Low: ${stockDetails.low}</li>
            <li>Market Cap: ${stockDetails.mCap}</li>
            <li>P/E Ratio: ${stockDetails.pe}</li>
            <li>Outstanding Shares: ${stockDetails.shares}</li>
            <li>Debt: ${stockDetails.debt}</li>
            <li>2-Year Stock Mend: ${stockDetails.twoYearMend}</li>
        </ul>
`;
});