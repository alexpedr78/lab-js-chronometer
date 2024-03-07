class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minute = Math.floor(this.currentTime / 60);
    return minute;
  }

  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0;
    }
    let second = this.currentTime % 60;
    return second;
  }

  getCentiseconds() {}

  computeTwoDigitNumber(value) {
    // ... your code goes here
    value = value.toString();

    if (value.length <= 1) {
      let updated = "0" + value;
      return updated;
    } else {
      return value;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds())
    );
  }
}
