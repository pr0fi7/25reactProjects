
const dummyApiResponse = {
    showAccordian: true,
    showStarRating: true,
    showRandomColor: true,
    showTicTacToe: true,
};

function featureApiCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) {
            setTimeout(resolve(dummyApiResponse), 1000);
        } else {
            reject('Error');
        }
    })
}

export default featureApiCall;