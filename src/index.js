// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 0, Q = 0, D = 0, N = 0, P = 0;
    let exchange = {};

    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency <= 0) {
        return exchange;
    }
    if (currency / 50 >= 1) {
        H = Math.floor(currency / 50);
        currency -= (H * 50);
    }

    if (currency / 25 >= 1) {
        Q = Math.floor(currency / 25);
        currency -= (Q * 25);
    }

    if (currency / 10 >= 1) {
        D = Math.floor(currency / 10);
        currency -= (D * 10);
    }

    if (currency / 5 >= 1) {
        N = Math.floor(currency / 5);
        currency -= (N * 5);
    }

    if (currency != 0) {
        P = currency;
    }

    if (H != 0) {
        exchange["H"] = H;
    }
    if (Q != 0) {
        exchange["Q"] = Q;
    }
    if (D != 0) {
        exchange["D"] = D;
    }
    if (N != 0) {
        exchange["N"] = N;
    }
    if (P != 0) {
        exchange["P"] = P;
    }
    return exchange;
}

