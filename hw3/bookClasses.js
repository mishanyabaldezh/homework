class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static help() {
    return "This is class for books. It has three properties: title, author, year. It has three methods: getSummary, getAge, revise";
  }
}

class Magazine extends Book {
  constructor(title, author, editor, year, month) {
    super(title, author, year);
    this.editor = editor;
    this.month = month;
  }
}

class Manual extends Book {
  constructor(title, author, year, dataType, organization) {
    super(title, author, year);
    this.dataType = dataType;
    this.organization = organization;
  }
}

class Postcard extends Book {
  constructor(title, author, recipient, year) {
    super(title, author, year);
    this.recipient = recipient;
  }
  getCongratulation() {
    return `Happy ${this.title} from ${this.author} to ${this.recipient}! ${this.year}`;
  }
}
// Instantiate object
const book1 = new Book(
  "Hobbit",
  "J. R. R. Tolkien",
  "1937"
);

const mag1 = new Magazine(
  "Vogue",
  "Arthur Baldwin Turnure",
  "John Doe",
  "2024",
  "March"
);

const manual1 = new Manual(
  "Java Script Manual",
  "David Flanagan",
  "2020",
  "Reference book",
  "Java Script"
);

const postcard1 = new Postcard(
  "New Year",
  "Misha",
  "Georgii",
  "2024"
);


