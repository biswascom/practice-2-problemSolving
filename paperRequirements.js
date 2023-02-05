function paperRequirements(firstBook, secondBook, thirdBook){
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const firstBookPapers = firstBookPage * firstBook;
    const secondBookPapers = secondBookPage * secondBook;
    const thirdBookPapers = thirdBookPage * thirdBook;

    const totalPapers = firstBookPapers + secondBookPapers + thirdBookPapers;

    return totalPapers;
}

const result = paperRequirements(2, 2, 1);
console.log("Total papers need " + result + " pcs");