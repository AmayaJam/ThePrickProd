/*-----===FUNCTIONS===-----*/
export function checkReq1(pw) {
     // Check if the password is empty
     if (pw.trim() === '') { return false;}
    let regex = /[A-Z]/g;
    let letters = pw.match(regex);
    
    if(letters.length >= 1){return true;}
    else { return false;} }

export function checkReq2(pw) {
    let regex = /[a-zA-Z]/g;
    let wordcount = pw.match(regex);

    if(wordcount && wordcount.length >= 10){
        return true;}
    else{ return false;} }

export function checkReq3(pw) {
    const words = pw.trim().split(/\s+/).filter(Boolean);
    return words.length >= 4;}

export function checkReq4(pw) {
    let regex = /[!;':",.?]/g;
    let specialCharacter = pw.match(regex);

    if(specialCharacter && specialCharacter.length >= 1) { return true; }
    else {return false;}}

export function checkReq5(pw) {
    if (pw.trim() === '') { return false;}
    let pronouns = ["\\bshe\\b", "\\bhim\\b", "\\bhis\\b", "\\bher\\b", "\\bhers\\b", "\\bhe\\b"];

    pw = pw.toLowerCase();

    for (let index = 0; index < pronouns.length; index++) {
        const pronounRegex = new RegExp(pronouns[index], 'i');
        if (pronounRegex.test(pw)) { return false;}
    }
    return true;}

export function checkReq6(pw) {
    if (pw.trim() === '') { return false;}
    const regex = /\b[A-Z][a-z]*\b/g;
    const letters = pw.match(regex);

    return letters && letters.length >= 2;
}

export function checkReq7(pw) {
    let regex = /[a-zA-Z]/g;
    let wordcount = pw.match(regex);

    if(wordcount && wordcount.length >= 20){
        return true;}
    else{ return false;} 
}

export function checkReq8(pw) {
    if (pw.trim() === '') { return false;}
    const words = ["\\bAllegedly\\b", "\\bApparently\\b"];

    pw = pw.trim().toLowerCase();

    for (let index = 0; index < words.length; index++) {
        const regex = new RegExp(words[index], 'i');  
        if (regex.test(pw)) { return true; }
    }
    return false;
}


export function checkReq9(pw) {
    if (pw.trim() === '') { return false;}
    const words = ["\\bIn my opinion\\b", "\\bBut you didn't hear it from me\\b"];

    // Convert password to lowercase
    pw = pw.trim().toLowerCase();

    for (let index = 0; index < words.length; index++) {
        const regex = new RegExp(words[index] + "$", 'i');
        if (regex.test(pw)) {
            return true;
        }
    }
    return false;
}

export function checkReq10(pw) {
    const words = pw.trim().split(/\s+/).filter(Boolean);
        return words.length >= 10;}

export function checkReq11(pw) {
    let adverbs = [
        "\\boften\\b", 
        "\\brarely\\b", 
        "\\bsometimes\\b", 
        "\\bfrequently\\b", 
        "\\balways\\b", 
        "\\bseldom\\b", 
        "\\boccasionally\\b", 
        "\\bgenerally\\b", 
        "\\bnever\\b",
        "\\busually\\b"];

    pw = pw.toLowerCase();

    for (let index = 0; index < adverbs.length; index++) {
        if(pw.includes(adverbs[index])){
            return true; } }
    return false;}

export function checkReq12(pw) {
    let adverbs = [
        "\\bmean\\b", 
        "\\brude\\b", 
        "\\bunkind\\b", 
        "\\bstupid\\b", 
        "\\bhate\\b", 
        "\\bloser\\b", 
        "\\bdumb\\b" 
        ];
        pw = pw.toLowerCase();

        for (let index = 0; index < adverbs.length; index++) {
            if(pw.includes(adverbs[index])){ return false; } }
        return true;}

export function checkReq13(pw) {
    const words = pw.trim().split(/\s+/).filter(Boolean);
        return words.length >= 18;}
