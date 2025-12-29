// Weekly Winner Data (later this comes from backend)
const weeklyWinner = {
    name: "Trader Raghav",
    pnl: "+₹18,450",
    percent: "+4.2%",
    style: "Price Action Scalping"
};

// Participants List
const participants = [
    { name: "Akhil", pnl: "+₹5,200" },
    { name: "Manoj", pnl: "-₹1,800" },
    { name: "Suresh", pnl: "+₹2,400" },
    { name: "Vishnu", pnl: "-₹650" },
    { name: "Rahul", pnl: "+₹980" }
];

// Inject Winner
document.getElementById("winnerName").innerText = weeklyWinner.name;
document.getElementById("winnerPnl").innerText = weeklyWinner.pnl;
document.getElementById("winnerPercent").innerText = weeklyWinner.percent;
document.getElementById("winnerStyle").innerText = weeklyWinner.style;

// Inject Participants
const list = document.getElementById("participantList");

participants.forEach(trader => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${
