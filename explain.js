// Sample JSON data
const glossary = [
    {
        "name": "Asset",
        "definition": "Things you own that are valuable, like toys."
      },
      {
        "name": "Liability",
        "definition": "When you owe someone something, like returning a borrowed toy."
      },
      {
        "name": "Interest",
        "definition": "Extra money for saving your toys or paying when you borrow toys."
      },
      {
        "name": "Equity",
        "definition": "The part of your toys that you truly own, not borrowed ones."
      },
      {
        "name": "Portfolio",
        "definition": "Your collection of different toys, like action figures and dolls."
      },
      {
        "name": "Diversification",
        "definition": "Having many types of toys to reduce risk."
      },
      {
        "name": "Risk Management",
        "definition": "Keeping your toys safe and having a backup plan."
      },
      {
        "name": "Compound Interest",
        "definition": "Earning or owing more toys over time."
      },
      {
        "name": "Credit Score",
        "definition": "A number that tells if you're good at sharing and giving back."
      },
      {
        "name": "Amortization",
        "definition": "Slowly giving back borrowed toys over time."
      },
      {
        "name": "Hedge Fund",
        "definition": "Friends who work together to collect and share toys wisely."
      },
      {
        "name": "Bull Market",
        "definition": "Happy times when toys are worth more."
      },
      {
        "name": "Bear Market",
        "definition": "Sad times when toy values go down."
      },
      {
        "name": "Blockchain",
        "definition": "A magic book for honest toy-sharing."
      },
      {
        "name": "Cryptocurrency",
        "definition": "Make-believe money for digital games and toys."
      },
      {
        "name": "Digital Wallet",
        "definition": "A secret place to keep your make-believe money safe."
      },
      {
        "name": "Peer-to-Peer (P2P) Lending",
        "definition": "Sharing toys with friends and getting toys when needed."
      },
      {
        "name": "Robo-Advisor",
        "definition": "A robot friend helping you pick toys and care for them."
      },
      {
        "name": "API (Application Programming Interface)",
        "definition": "A special rule book for computer games to talk to each other."
      },
      {
        "name": "Neobank",
        "definition": "A pretend bank for saving make-believe money on a computer."
      },
      {
        "name": "RegTech (Regulatory Technology)",
        "definition": "A computer helper making sure everyone follows the rules."
      },
      {
        "name": "InsurTech",
        "definition": "Technology giving toys superhero shields to keep them safe."
      },
      {
        "name": "Digital Payment",
        "definition": "Sending digital toys to friends on the computer."
      },
      {
        "name": "Crowdfunding",
        "definition": "Asking lots of people for help to get more toys or make big projects happen."
      },
      {
        "name": "Cybersecurity",
        "definition": "Special locks and guards on your computer to keep digital toys safe."
      },
      {
        "name": "Artificial Intelligence (AI) in Finance",
        "definition": "Smart computer helpers who can answer toy questions and help with toy problems."
      }
    // Add more terms and definitions here
];

document.getElementById('searchButton').addEventListener('click', search);

function search() {
    const name = document.getElementById('searchInput').value.toLowerCase();
    const result = document.getElementById('result');
    result.innerHTML = '';

    for (const item of glossary) {
        if (item.name.toLowerCase() === name) {
            const definition = document.createElement('p');
            definition.textContent = `${item.name}: ${item.definition}`;
            result.appendChild(definition);
            return; // Exit the loop if a match is found
        }
    }

    // If no match is found
    const noResult = document.createElement('p');
    noResult.textContent = 'No definition found for the term.';
    result.appendChild(noResult);
}
