
Example 1: Regular error

function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

try {
    thisThrows();
} catch (e) {
    console.error(e);
} finally {
    console.log('We do cleanup here');
}


Example 2: A Try Catch with a Rejecting Promise


async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

try {
    thisThrows();
} catch (e) {
    console.error(e);
} finally {
    console.log('We do cleanup here');
}

Solution 1: await: 

async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

async function run() {
    try {
        await thisThrows();
    } catch (e) {
        console.error(e);
    } finally {
        console.log('We do cleanup here');
    }
}

run();

Solution 2: catch method


async function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

thisThrows()
    .catch(console.error)
    .then(() => console.log('We do cleanup here'));





    return await fsPromises.readdir('pat').catch(err => console.log('oops', err));

    https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a



  