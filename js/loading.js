export const loading = (isPending) => {
    if (isPending) {
        console.log("loading...");
    } else {
        console.log("Done");
    }
};
