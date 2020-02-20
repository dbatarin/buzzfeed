import { QuizData } from "./quiz.types";

export const quizData: QuizData = {
  id: "b84bae6e-53c7-11ea-8d77-2e728ce88125",
  title:
    "Tell Us Your Favorite Foods And We'll Guess What Type Of Personality You Have",
  imgUrl: "/images/personality.gif",
  questions: [
    {
      id: "b84bb18e-53c7-11ea-8d77-2e728ce88125",
      title: "Pick some food",
      answers: [
        {
          id: "b84bb2ec-53c7-11ea-8d77-2e728ce88125",
          value: "caesar salad",
          weight: 1
        },
        {
          id: "b84bb594-53c7-11ea-8d77-2e728ce88125",
          value: "nuggets",
          weight: 2
        },
        {
          id: "b84bb706-53c7-11ea-8d77-2e728ce88125",
          value: "burger",
          weight: 3
        },
        {
          id: "b84bb94a-53c7-11ea-8d77-2e728ce88125",
          value: "chicken sandwich",
          weight: 4
        }
      ]
    },
    {
      id: "b84bba8a-53c7-11ea-8d77-2e728ce88125",
      title: "Pick a healthy choice",
      answers: [
        {
          id: "b84bbc92-53c7-11ea-8d77-2e728ce88125",
          value: "fruit",
          weight: 1
        },
        {
          id: "b84bbddc-53c7-11ea-8d77-2e728ce88125",
          value: "salad",
          weight: 2
        },
        {
          id: "b84bc016-53c7-11ea-8d77-2e728ce88125",
          value: "parfrait",
          weight: 3
        },
        {
          id: "b84bc160-53c7-11ea-8d77-2e728ce88125",
          value: "pasta salad",
          weight: 4
        }
      ]
    },
    {
      id: "b84bc296-53c7-11ea-8d77-2e728ce88125",
      title: "Pick a movie snack",
      answers: [
        {
          id: "b84bc46c-53c7-11ea-8d77-2e728ce88125",
          value: "M&M’s",
          weight: 1
        },
        {
          id: "b84bc688-53c7-11ea-8d77-2e728ce88125",
          value: "caramel popcorn",
          weight: 2
        },
        {
          id: "b84bc7c8-53c7-11ea-8d77-2e728ce88125",
          value: "traditional popcorn",
          weight: 3
        },
        {
          id: "b84bc8f4-53c7-11ea-8d77-2e728ce88125",
          value: "ice cream",
          weight: 4
        }
      ]
    },
    {
      id: "b84bcb10-53c7-11ea-8d77-2e728ce88125",
      title: "Pick a fast-food spot",
      answers: [
        {
          id: "b84bcd0e-53c7-11ea-8d77-2e728ce88125",
          value: "Dunkin’ Donuts",
          weight: 1
        },
        {
          id: "b84bce4e-53c7-11ea-8d77-2e728ce88125",
          value: "Wendy’s",
          weight: 2
        },
        {
          id: "b84bcf7a-53c7-11ea-8d77-2e728ce88125",
          value: "Burger King",
          weight: 3
        },
        {
          id: "b84bd114-53c7-11ea-8d77-2e728ce88125",
          value: "McDonald’s",
          weight: 4
        }
      ]
    },
    {
      id: "b84bd24a-53c7-11ea-8d77-2e728ce88125",
      title: "Pick some more food",
      answers: [
        {
          id: "b84bd402-53c7-11ea-8d77-2e728ce88125",
          value: "pasta",
          weight: 1
        },
        {
          id: "b84bd5ec-53c7-11ea-8d77-2e728ce88125",
          value: "chicken",
          weight: 2
        },
        {
          id: "b84bd72c-53c7-11ea-8d77-2e728ce88125",
          value: "sandwich",
          weight: 3
        },
        {
          id: "b84bd8b2-53c7-11ea-8d77-2e728ce88125",
          value: "pizza",
          weight: 4
        }
      ]
    }
  ],
  results: [
    {
      title: "Stern - You're a very serious person!",
      min: 5,
      max: 8
    },
    {
      title: "Funny - You have a wicked sense of humour!",
      min: 9,
      max: 12
    },
    {
      title:
        "Outgoing - You're a perfect mix of funny, chill, and intelligence!",
      min: 13,
      max: 16
    },
    {
      title: "Shy - You're shy and reserved!",
      min: 17,
      max: 20
    }
  ]
};
