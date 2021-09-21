// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return pickup - 42
    }
    if (pickup < 42) {
        return 42 - pickup
    }
}

function distanceFromHqInFeet(pickup) {
    let distance = distanceFromHqInBlocks(pickup)
    // console.log(distance * 264)
    return distance * 264
}

function distanceTravelledInFeet(start, destination) {
    let blocks 
    if (destination > start) {
        blocks = destination - start
    }
    if (destination< start) {
        blocks = start - destination
    }
    return blocks * 264
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination)
    if (feet <= 400) {
        return 0;
    } 
    else if (feet > 400 && feet <= 2000) {
      return (feet - 400) * .02;
    }
    else if (feet > 2000 && feet < 2500) {
        return (25);
    }
    else if (feet > 2500) {
        return 'cannot travel that far'
    }
}