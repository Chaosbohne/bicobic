if(Posts.find().count() === 0) {

  var userId = '123asdaqd123';/*Accounts.createUser({
    username: 'name',
    password: 'password',
    email: 'bicobic@gmx.de',
    profile: {
      name: 'Rico Ruszewski'
    }
  });
  */

  var rico = Meteor.users.findOne(userId);


  Posts.insert({
    "_id": "ft7PgDsSzYB7KdDvD",
    "author": "Chaosbohne",
    "authorId":userId,
    "introduction": "I often thought about but never did it. Time to change. I show you my personal ten reasons why i go this step now.",
    "isPublished": true,
    "markdownText": "accusam et justo duo dolores ",
    "submitted": 1387039269062,
    "title": "10 reasons why creating a blog is a good decision",
    "strip": "10-reasons-why-creating-a-blog-is-a-good-decision"
  });

  Posts.insert({
    "_id": "BkFDo4CqcSnGcGtri",
    "author": "Chaosbohne",
    "authorId":userId,  
    "introduction": "Some steps in adding google analytics to a meteor app.",
    "isPublished": false,
    "markdownText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "submitted": 1387287971031,
    "title": "Adding Google Analytics to meteor",
    "strip": "adding-google-analytics-to-meteor"
  });

  Posts.insert({
    "_id": "HyRuDhRZteHuRXfE6",
    "author": "Chaosbohne",
    "authorId":userId,    
    "introduction": "Meteor.js shows us that developing of fast and reliable websites is quite easy and flexible. Why shouldnt our environment be the same?!",
    "isPublished": false,
    "markdownText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "submitted": 1387108104241,
    "title": "Which IDE should i use for meteor?",
    "strip": "which-ide-should-i-use-for-meteor"
  });
  Posts.insert({
    "_id": "bc3prXkHecy5N4PMe",
    "author": "Chaosbohne",
    "authorId":userId,      
    "introduction": "Yeah pushing meteorite apps to heroku can be tiring. Some configurations that work for me. I try to keep this article up-to-date.",
    "isPublished": false,
    "markdownText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "submitted": 1387117088148,
    "title": "Pushing meteorite app to heroku",
    "strip": "pushing-meteorite-app-to-heroku"
  });
  Posts.insert({
    "_id": "fJ8uspdKc85nxrPkf",
    "author": "Chaosbohne",
    "authorId":userId,   
    "introduction": "There are a lot of nice articles, blogposts and videos out there. I try to keep them together to get a nice overview for you and me",
    "isReady": true,
    "markdownText": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    "submitted": 1387108051893,
    "title": "Some useful links",
    "strip": "some-useful-links"
  });    
}