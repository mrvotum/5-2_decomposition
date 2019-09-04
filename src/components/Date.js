import React, { useState } from 'react';

class SetDayNow {
  constructor(date) {
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
    this.year = String(date.getFullYear()).slice(2);
    this.hours = date.getHours();
    this.min = date.getMinutes();
  }

  create() {
    const dateTime = `${this.check(this.day)}.${this.check(this.month)}.${this.year}`;
    const time = `${this.check(this.hours)}:${this.check(this.min)}`;
    return this.final(dateTime, time);
  }

  check(elem) {
    if (elem < 10) {
      return `0${elem}`;
    }
    return elem;
  }

  final(dateTime, time) {
    return `${dateTime}  ${time}`;
  }
}

export default function () {
  const dateTime = new SetDayNow(new Date());
  const [date, setDate] = useState(dateTime.create());

  setInterval(() => {
    setDate(dateTime.create());
  }, 6000)

  return <div>{date}</div>
}
