escalaPorComodo = function escalaPorComodo(c, p, f) {
    escala = [];
    for (i = 0; i < c; i++) {
        escala[i] = (i + f) % p
    }
    return escala
}