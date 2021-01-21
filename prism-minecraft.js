(function (Prism) {
    Prism.languages.minecraft = {
        'condition': /\(.+\)/gm,
        'choisy': /<(\S|\ )+(\|(\S|\ )+)+>/gm,
        'required': /<((\S|\ )(?!\|))+>/gm,
        'optional': /\[\S+\]/gm,
        'number': /[\+-]?\d+/gm,
        'colorcode': /&(a|b|c|d|e|f|k|l|m|n|o|r|1|2|3|4|5|6|7|8|9|0)/gm,
        'label': /\/\S+\s?/gm,
        'argument': /\S+/gm,
    }
}(Prism));