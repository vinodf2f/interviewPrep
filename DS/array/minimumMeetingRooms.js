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
// findMinimumRooms(start, end);

const findMinimumRooms2d = (meetings) => {
  let noOfOngoingMeeting = 0;
  let maxCount = 0;
  let sortedStartArray = Array(meetings.length);
  let sortedEndArray = Array(meetings.length);
  let startIndex = 0;
  let endIndex = 0;

  for (let index = 0; index < meetings.length; index++) {
    sortedStartArray.push(meetings[index][0]);
    sortedEndArray.push(meetings[index][1]);
  }
  sortedStartArray.sort((a, b) => a - b);
  sortedEndArray.sort((a, b) => a - b);

  while (startIndex <= meetings.length && endIndex <= meetings.length) {
    if (sortedStartArray[startIndex] < sortedEndArray[endIndex]) {
      noOfOngoingMeeting++;
      startIndex++;

      if (noOfOngoingMeeting > maxCount) {
        maxCount = noOfOngoingMeeting;
      }
    } else {
      noOfOngoingMeeting--;
      endIndex++;
    }
  }
  console.log({ maxCount });
};

const meetings = [
  [10, 12],
  [7, 8],
  [10.3, 13],
  [9, 11.36],
];
findMinimumRooms2d(meetings);
