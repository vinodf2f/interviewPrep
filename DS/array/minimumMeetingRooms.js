const findMinimumRooms = (start, end) => {
  const sortedStart = start.sort((a, b) => a - b);
  const sortedEnd = end.sort((a, b) => a - b);
  let startIterator = 0;
  let endIterator = 0;
  let noOfOngoingMeeting = 0;
  let maxCount = 0;

  while (startIterator < start.length && endIterator < end.length) {
    if (sortedStart[startIterator] < sortedEnd[endIterator]) {
      startIterator++;
      noOfOngoingMeeting++;
      if (noOfOngoingMeeting > maxCount) {
        maxCount = noOfOngoingMeeting;
      }
    } else {
      noOfOngoingMeeting--;
      endIterator++;
    }
  }

  console.log({ maxCount });
};

const start = [9, 10, 7, 10.3];
const end = [12, 11.36, 8, 13];
findMinimumRooms(start, end);
