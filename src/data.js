import pokemon from "../src/img/pokemonWorld.png";
import stock from "../src/img/StockManagement.png";
import news from "../src/img/newsSite.png";

export const products = [
  {
    id: 1,
    img: pokemon,
    link: "https://superlative-parfait-e77cb6.netlify.app/",
    description:
      "I used Next.js and Pokemon API for showing lists for the stats and abilities of each Pokemon. UI is made with Tailwind Daisy UI. There is a search engine which helps people to search for more than thousands' pokemon.",
  },
  {
    id: 2,
    img: stock,
    link: "https://gleeful-rabanadas-179965.netlify.app/",
    description:
      "This project was my bootcamp's team graduation project. Our team made a stock management web app to allow employees to manage inventory. Following MVC we created a RESTful API with TDD connected to MongoDB. Our front-end was created with React and custom CSS. Using Trello boards we organised our work and contributed code via pull requests and review.",
  },
  {
    id: 3,
    img: news,
    link: "https://splendorous-valkyrie-61fb52.netlify.app/",
    description:
      "I created RESTful APIs with PostgreSQL using TDD to help users receive news sorted by date, alphabetically, by topic and authors, with functionality to add, delete and update comments. Users can also search the news with their own search terms. The front-end uses libraries such as React JS, Axios, and Bootstrap.",
  },
];
