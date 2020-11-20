function verificaTipoDeDado(dado) {

    if (typeof dado === "string") {
        console.log("Esse dado é uma string");

    } else if (typeof dado === "number") {
        console.log("Esse dado é um número");

    } else if (typeof dado === "boolean") {
        console.log("Esse dado é um boolean");

    }


}

verificaTipoDeDado(true);
verificaTipoDeDado(27);
verificaTipoDeDado("Fernando");