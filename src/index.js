module.exports = function toReadable (number) {
    var ones = " one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    
    if (number ===0) return "zero";
        if (number < 20) return ones[number];
        var digit = number%10;
        if (number < 100) return tens[~~(number/10)-2] + (digit? " " + ones[digit]: "");
        if (number < 1000) return ones[~~(number/100)] +" hundred" + (number%100 ==0? "":" " + toReadable(number%100));

}
