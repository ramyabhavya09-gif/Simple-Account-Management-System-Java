
function processBank() {

    let name = document.getElementById("name").value;
    let balanceValue = document.getElementById("balance").value;
    let depositValue = document.getElementById("deposit").value;
    let withdrawValue = document.getElementById("withdraw").value;

    let error = document.getElementById("error");
    error.innerText = "";

    if (name.trim() === "" || balanceValue === "" ||
        depositValue === "" || withdrawValue === "") {
        error.innerText = "Please fill all details.";
        return;
    }

    let balance = Number(balanceValue);
    let deposit = Number(depositValue);
    let withdraw = Number(withdrawValue);

    if (!Number.isFinite(balance) || !Number.isFinite(deposit) ||
        !Number.isFinite(withdraw) || balance < 0 ||
        deposit < 0 || withdraw < 0) {
        error.innerText = "Please enter valid amounts.";
        return;
    }

    // Deposit operation
    balance += deposit;

    document.getElementById("depositMessage").innerText =
        "Amount Deposited.";

    // Withdrawal operation
    let withdrawMessage;

    if (withdraw <= balance) {
        balance -= withdraw;
        withdrawMessage = "Amount Withdrawn.";
    } else {
        withdrawMessage = "Insufficient Balance.";
    }

    document.getElementById("withdrawMessage").innerText =
        withdrawMessage;

    // Display account details
    document.getElementById("customerName").innerText =
        "Name: " + name;

    document.getElementById("finalBalance").innerText =
        "Balance: ₹" + balance;

    document.getElementById("result").style.display = "block";
}
