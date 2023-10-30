const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((books) => console.log(books.authorFirst + books.authorLast, 'wrote ' + books.name + ' in ' + books.publishDate));
//Sort books from oldest to most recent
const sortBooks = books.sort((a, b) => a.publishDate - b.publishDate);
console.log(sortBooks);
//sort books alphabetically
const sorttitles = books.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});
console.log(sorttitles);
//Find who wrote War and Peace
const WarandPeace = books.filter((books) => books.name == "War and Peace");
console.log(WarandPeace);
//how many books were written before 1900?
const BooksBefore1900 = books.filter((books) => books.publishDate <= 1900);
console.log(BooksBefore1900);
//was there at least one book published within the last 100 years?
const BooksPublishedWithin100years = books.filter((books) => books.publishDate >= 1923)
console.log(BooksPublishedWithin100years);

const currentYear = 2023;
const isBookPublishedWithinLast100Years = books.some(books => currentYear - books.publishDate <= 100);

if (isBookPublishedWithinLast100Years) {
  console.log("Yes, at least one book was published within the last 100 years.");
} else {
  console.log("No, there were no books published within the last 100 years.");
}
//was every book published within the last 100 years?
const areAllBooksPublishedWithinLast100Years = books.every(books => currentYear - books.publishDate <= 100);

if (areAllBooksPublishedWithinLast100Years) {
  console.log("Yes, every book was published within the last 100 years.");
} else {
  console.log("No, not every book was published within the last 100 years.");
}
//print a list of books that "includes" the genre historical
const historicalBooks = books.filter(book => book.genre.includes("historical"));

historicalBooks.forEach(book => {
  console.log(book.name);
});