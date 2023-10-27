function getRecommendations() {
    // Get user inputs
    const riskLevel = document.getElementById("risk-level").value;
    const budget = parseInt(document.getElementById("budget").value);
    const sector = document.getElementById("sector").value;
  
    // Get the recommendation list element
    const recommendationList = document.getElementById("recommendation-list");
  
    // Clear previous recommendations
    recommendationList.innerHTML = "";
  
    // Function to add recommendations
    function addRecommendation(recommendation, list) {
      const listItem = document.createElement("li");
      listItem.textContent = recommendation;
      list.appendChild(listItem);
    }
  
    // Recommendations for Low Risk, Low Budget, All Sectors
    if (riskLevel === "Low Risk" && budget < 10000) {
      if (sector === "Automobile Sector") {
        addRecommendation("Invest in Ford Motor Company (F) due to its stability and low-risk profile.", recommendationList);
        addRecommendation("Consider Honda Motor Co., Ltd. (HMC) for its long-standing reputation and low volatility.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("Invest in Exxon Mobil Corporation (XOM) for its low-risk profile and consistent performance.", recommendationList);
        addRecommendation("Consider Chevron Corporation (CVX) due to its history of stability and low volatility.", recommendationList);
      } else if (sector === "Banking Sector") {
        addRecommendation("Bank of America Corporation (BAC) offers stability and is a well-established banking institution.", recommendationList);
        addRecommendation("Consider Wells Fargo & Co. (WFC) for its low-risk status and dividend history.", recommendationList);
      } else if (sector === "IT Sector") {
        addRecommendation("Invest in Microsoft Corporation (MSFT) for its low-risk, established position in the IT industry.", recommendationList);
        addRecommendation("Consider International Business Machines Corporation (IBM) for its low-risk status and strong IT presence.", recommendationList);
      }
    }
  
    // Recommendations for Low Risk, Medium Budget, All Sectors
    if (riskLevel === "Low Risk" && budget >= 10000 && budget < 50000) {
      if (sector === "Automobile Sector") {
        addRecommendation("General Motors Company (GM) is a moderate-risk option with potential for growth.", recommendationList);
        addRecommendation("Toyota Motor Corporation (TM) offers stability with growth potential.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("Exxon Mobil Corporation (XOM) is a low-risk option with a history of stability.", recommendationList)
addRecommendation("Chevron Corporation (CVX) is known for its consistent dividends and low-risk profile.", recommendationList)

        // Add recommendations for Low Risk, Medium Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        addRecommendation("Bank of America Corporation (BAC) offers stability and is a well-established banking institution.", recommendationList)
addRecommendation("Consider Wells Fargo & Co. (WFC) due to its low-risk status and dividend history.", recommendationList)

        // Add recommendations for Low Risk, Medium Budget, Banking Sector
      } else if (sector === "IT Sector") {
        addRecommendation("Invest in Microsoft Corporation (MSFT) for its low-risk, established position in the IT industry.", recommendationList)
addRecommendation("International Business Machines Corporation (IBM) is a low-risk choice with a strong IT presence.", recommendationList)

        // Add recommendations for Low Risk, Medium Budget, IT Sector
      }
    }
  
    // Recommendations for Low Risk, High Budget, All Sectors
    if (riskLevel === "Low Risk" && budget >= 50000) {
      if (sector === "Automobile Sector") {
        addRecommendation("Tesla, Inc. (TSLA) is a low-risk, high-budget choice with significant growth potential.", recommendationList);
        addRecommendation("General Motors Company (GM) offers stability and potential for high-budget investors.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("Royal Dutch Shell plc (RDS.A) is a moderate-risk choice with a focus on dividends.", recommendationList)
addRecommendation("BP p.l.c. (BP) is another moderate-risk option with a history of consistent performance.", recommendationList)
        // Add recommendations for Low Risk, High Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        addRecommendation("JPMorgan Chase & Co. (JPM) is a reputable choice with a moderate risk profile.", recommendationList)
addRecommendation("Citigroup Inc. (C) offers stability and growth potential in the banking sector.", recommendationList)

        // Add recommendations for Low Risk, High Budget, Banking Sector
      } else if (sector === "IT Sector") {
        addRecommendation("Alphabet Inc. (GOOGL) is a moderate-risk investment with a focus on technology and innovation.", recommendationList)
addRecommendation("Adobe Inc. (ADBE) is another moderate-risk option in the IT sector with a focus on creative software.", recommendationList)
        // Add recommendations for Low Risk, High Budget, IT Sector
      }
    }
  
    // Recommendations for Medium Risk, Low Budget, All Sectors
    if (riskLevel === "Medium Risk" && budget < 10000) {
      if (sector === "Automobile Sector") {
        addRecommendation("Ford Motor Company (F) is a moderate-risk option with growth potential.", recommendationList);
        addRecommendation("Honda Motor Co., Ltd. (HMC) is known for its reputation and moderate risk profile.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("Occidental Petroleum Corporation (OXY) is a moderate-risk choice with a focus on oil and gas.", recommendationList)
addRecommendation("Phillips 66 (PSX) is another moderate-risk option in the oil sector.", recommendationList)

        // Add recommendations for Medium Risk, Low Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        addRecommendation("Citigroup Inc. (C) offers moderate risk and growth potential in the banking sector.", recommendationList)
addRecommendation("Bank of America Corporation (BAC) is a well-established choice with a moderate risk profile.", recommendationList)
        // Add recommendations for Medium Risk, Low Budget, Banking Sector
      } else if (sector === "IT Sector") {
        addRecommendation("Cisco Systems, Inc. (CSCO) is a moderate-risk investment with a focus on networking technology.", recommendationList)
addRecommendation("Adobe Inc. (ADBE) is known for creative software and moderate risk.", recommendationList)

        // Add recommendations for Medium Risk, Low Budget, IT Sector
      }
    }
  
    // Recommendations for Medium Risk, Medium Budget, All Sectors
    if (riskLevel === "Medium Risk" && budget >= 10000 && budget < 50000) {
      if (sector === "Automobile Sector") {
        addRecommendation("General Motors Company (GM) is a moderate-risk option with growth potential.", recommendationList);
        addRecommendation("Toyota Motor Corporation (TM) offers stability with moderate risk.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("Chevron Corporation (CVX) is a moderate-risk choice with a focus on oil and gas.", recommendationList)
addRecommendation("Phillips 66 (PSX) is another moderate-risk option in the oil sector.", recommendationList)

        // Add recommendations for Medium Risk, Medium Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        addRecommendation("JPMorgan Chase & Co. (JPM) is a reputable choice with moderate risk and growth potential.", recommendationList)
addRecommendation("Wells Fargo & Co. (WFC) offers stability and moderate risk in the banking sector.", recommendationList)

        // Add recommendations for Medium Risk, Medium Budget, Banking Sector
      } else if (sector === "IT Sector") {
        addRecommendation("Microsoft Corporation (MSFT) is a moderate-risk investment with a focus on technology and software.", recommendationList)
addRecommendation("Alphabet Inc. (GOOGL) is known for its innovative technology and moderate risk.", recommendationList)

        // Add recommendations for Medium Risk, Medium Budget, IT Sector
      }
    }
  
    // Recommendations for Medium Risk, High Budget, All Sectors
    if (riskLevel === "Medium Risk" && budget >= 50000) {
      if (sector === "Automobile Sector") {
        addRecommendation("Tesla, Inc. (TSLA) is a moderate-risk, high-budget choice with significant growth potential.", recommendationList);
        addRecommendation("General Motors Company (GM) offers stability and potential for high-budget investors.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("Tesla, Inc. (TSLA) is a moderate-risk, high-budget choice with significant growth potential.", recommendationList)
addRecommendation("General Motors Company (GM) offers stability and potential for high-budget investors.", recommendationList)
        // Add recommendations for Medium Risk, High Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        addRecommendation("Chevron Corporation (CVX) is a moderate-risk choice with a focus on oil and gas.", recommendationList)
addRecommendation("Royal Dutch Shell plc (RDS.A) is another moderate-risk option in the oil sector.", recommendationList)

        // Add recommendations for Medium Risk, High Budget, Banking Sector
      } else if (sector === "IT Sector") {
        addRecommendation("Apple Inc. (AAPL) is a low-risk, high-budget investment with a focus on technology and innovation.", recommendationList)
add

        // Add recommendations for Medium Risk, High Budget, IT Sector
      }
    }
  
    // Recommendations for High Risk, Low Budget, All Sectors
    if (riskLevel === "High Risk" && budget < 10000) {
      if (sector === "Automobile Sector") {
        addRecommendation("Tesla, Inc. (TSLA) is a high-risk, low-budget choice with significant growth potential.", recommendationList);
        addRecommendation("NIO Inc. (NIO) is known for its electric vehicle focus and high risk.", recommendationList);
      } else if (sector === "Oil Sector") {
        // Add recommendations for High Risk, Low Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        // Add recommendations for High Risk, Low Budget, Banking Sector
      } else if (sector === "IT Sector") {
        // Add recommendations for High Risk, Low Budget, IT Sector
      }
    }
  
    // Recommendations for High Risk, Medium Budget, All Sectors
    if (riskLevel === "High Risk" && budget >= 10000 && budget < 50000) {
      if (sector === "Automobile Sector") {
        addRecommendation("Tesla, Inc. (TSLA) is a high-risk, medium-budget choice with significant growth potential.", recommendationList);
        addRecommendation("Nikola Corporation (NKLA) is known for its electric vehicle focus and high risk.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("Consider investing in smaller independent oil companies like EOG Resources, Inc. (EOG) for high-risk, medium-budget investors.", recommendationList);
  addRecommendation("Apache Corporation (APA) is another option with potential for growth in the high-risk, medium-budget category.", recommendationList);

        // Add recommendations for High Risk, Medium Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        addRecommendation("For high-risk, medium-budget investors in the banking sector, consider investing in Barclays PLC (BCS) with its global presence.", recommendationList);
  addRecommendation("Citizens Financial Group, Inc. (CFG) offers potential growth opportunities in this category.", recommendationList);
        // Add recommendations for High Risk, Medium Budget, Banking Sector
      } else if (sector === "IT Sector") {
        addRecommendation("Palantir Technologies Inc. (PLTR) is a high-risk, medium-budget choice with potential for growth in the IT sector.", recommendationList);
  addRecommendation("Investing in CrowdStrike Holdings, Inc. (CRWD) offers exposure to the cybersecurity market with high-risk potential.", recommendationList);
        // Add recommendations for High Risk, Medium Budget, IT Sector
      }
    }
  
    // Recommendations for High Risk, High Budget, All Sectors
    if (riskLevel === "High Risk" && budget >= 50000) {
      if (sector === "Automobile Sector") {
        addRecommendation("Tesla, Inc. (TSLA) is a high-risk, high-budget choice with significant growth potential.", recommendationList);
        addRecommendation("Rivian Automotive, Inc. (RIVN) is known for its electric vehicle focus and high risk.", recommendationList);
      } else if (sector === "Oil Sector") {
        addRecommendation("For high-budget investors with a high-risk appetite in the oil sector, consider Concho Resources Inc. (CXO) with potential for significant returns.", recommendationList);
  addRecommendation("Diamondback Energy, Inc. (FANG) is another high-risk, high-budget option with growth potential in oil exploration.", recommendationList);
        // Add recommendations for High Risk, High Budget, Oil Sector
      } else if (sector === "Banking Sector") {
        addRecommendation("In the banking sector, high-budget investors with a high-risk tolerance can explore investments in Goldman Sachs Group, Inc. (GS) known for its investment banking services.", recommendationList);
  addRecommendation("Santander Consumer USA Holdings Inc. (SC) is another high-risk, high-budget choice with growth potential in the banking industry.", recommendationList);

        // Add recommendations for High Risk, High Budget, Banking Sector
      } else if (sector === "IT Sector") {
        addRecommendation("For high-budget investors seeking high-risk opportunities in the IT sector, Cloudflare, Inc. (NET) offers growth potential in the cloud security market.", recommendationList);
  addRecommendation("NVIDIA Corporation (NVDA) is another high-risk, high-budget choice, known for its innovations in graphics and artificial intelligence.", recommendationList);


        // Add recommendations for High Risk, High Budget, IT Sector
      }
    }
  
    // Default recommendation if criteria don't match any combination
    if (recommendationList.childElementCount === 0) {
      addRecommendation("No specific recommendation. Please consult a financial advisor.", recommendationList);
  }
  }