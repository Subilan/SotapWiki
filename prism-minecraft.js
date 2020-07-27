(function (Prism) {
    Prism.languages.minecraft = {
        'condition': /\(.+\)/,
        'choisy': /<\w+(\|(\w|\.)+)+>/,
        'required': /<\S+>/,
        'optional': /\[\S+\]/,
        'number': /[\+-]?\d+/,
        'colorcode': /&(a|b|c|d|e|f|k|l|o|r|1|2|3|4|5|6|7|8|9|0)/,
        'label': /^\n?\/?\w+/,
        'argument': /\S+/,
    }
}(Prism));
