// code your solution here
const superbowlWin = (record) => {

  let year
  let winRecord = record.find((element) => element.result === "W")

  if (winRecord == undefined) {
    year = winRecord
  } else {
    year = winRecord.year
  }
  return year
}

