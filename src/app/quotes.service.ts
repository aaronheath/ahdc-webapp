import { Injectable } from '@angular/core';
import { Quote } from "./quote";

@Injectable()
export class QuotesService {
  private quotes = [
    new Quote(
      'A creative man is motivated by the desire to achieve, not by the desire to beat others.',
      'Ayn Rand'
    ),
    new Quote(
      'Throughout the centuries there were men who took first steps, down new roads, armed with nothing but their own vision',
      'Ayn Rand'
    ),
    new Quote(
      'The truth is not for all men, but only for those who seek it.',
      'Ayn Rand'
    ),
    new Quote(
      'The hardest thing to explain is the glaringly evident which everybody had decided not to see.',
      'Ayn Rand'
    ),
    new Quote(
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
      'Ayn Rand'
    ),
    new Quote(
      'When I die, I hope to go to Heaven, whatever the Hell that is.',
      'Ayn Rand'
    ),
    new Quote(
      'I don\'t build in order to have clients. I have clients in order to build.',
      'Ayn Rand'
    ),
    new Quote(
      'Upper classes are a nation\'s past; the middle class is its future.',
      'Ayn Rand'
    ),
    new Quote(
      'To arrive at a contradiction is to confess an error in one\'s thinking; to maintain a contradiction is to abdicate one\'s mind and to evict oneself from the realm of reality.',
      'Ayn Rand'
    ),
    new Quote(
      'If you don\'t know, the thing to do is not to get scared, but to learn.',
      'Ayn Rand'
    ),
    new Quote(
      'An investment in knowledge pays the best interest.',
      'Benjamin Franklin'
    ),
    new Quote(
      'They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.',
      'Benjamin Franklin'
    ),
    new Quote(
      'In this world nothing can be said to be certain, except death and taxes.',
      'Benjamin Franklin'
    ),
    new Quote(
      'Early to bed and early to rise makes a man healthy, wealthy and wise.',
      'Benjamin Franklin'
    ),
    new Quote(
      'How few there are who have courage enough to own their faults, or resolution enough to mend them.',
      'Benjamin Franklin'
    ),
    new Quote(
      'Energy and persistence conquer all things.',
      'Benjamin Franklin'
    ),
    new Quote(
      'It is the working man who is the happy man. It is the idle man who is the miserable man.',
      'Benjamin Franklin'
    ),
    new Quote(
      'By failing to prepare, you are preparing to fail.',
      'Benjamin Franklin'
    ),
  ];

  constructor() { }

  getByRandom() {
    const index = Math.floor(Math.random() * this.countOfQuotes());

    return this.quotes[index];
  }

  countOfQuotes() {
    return this.quotes.length;
  }
}
