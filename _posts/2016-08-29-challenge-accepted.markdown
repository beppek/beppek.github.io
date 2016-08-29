---
layout: post
title:  "Challenge Accepted"
date:   2016-08-29 22:00:00
image:
    feature: parachute.jpg
comments: true
---
So we're back to school and although today's introduction turned out to not be for us remote students, our Skype channel fired up for a little while and we got on to the topic of Anki, a spaced repetition software that helps you with learning by asking you questions with set intervals.

### The Problem

I only just now caught on to the trend that some of my course mates started this summer and others way before that, so I found my Anki to be quite empty and thus rather useless. Now I'm lazy, I don't see the point in doing something that has already been done one more time. My course mates have already created cards with questions that will be of use to me. So we started to discuss the sharing options of Anki and found them to be lacking a few key points:

- Collaborative
    - Each deck becomes collaborative allowing any member of a certain group to add cards with questions.
- Flexible decks
    - Over the course of a course (no pun intended) you might gather quite a few cards relating to the topic of that course. Now of course you will want to save the cards for that course so you can practice while you are studying that course. However, what you learn in that course might still be useful later on (hopefully, if the teachers have created a good course, it will). But that would mean that you have to add that course to several decks - defeating the whole purpose of spaced repetitions in the first place.

### The Solution

Since we're a bunch of programmers some ideas started to fly around, but of course, no one has the time to create the project. Neither do I really, but I was on the hunt for a nice little warm up since I've spent the majority of this past summer *not* writing code. So naturally I jumped at the idea.

I've settled on some of the foundations for the app as follows.

**Front end framework:** Angular2

**API:** NodeJS

**Database:** Firebase

**Design:** Material, what else?

Now I immediately ran into some issues with angular-cli not working so I still haven't had a chance to start, but I hope I'll be able to start churning out some code asap.

### The Details

The plans are as follows:

- Sign up
    - I am thinking about using social login or just github depending on if I want the app to reach an audience outside of the developer community. Sounds like I should, hey?
- Groups
    - Each group can have several topics, for example we could have one for our program that lets all the students add cards to the group with appropriate tags that in turn will sync automatically with each user. Groups can be open (anyone can join) or closed (must ask permission from group admin).
- Cards
    - Each card has the following properties:
        - id (the id of the card in order to identify it)
        - question (the question)
        - answer (the answer)
        - alternatives (the different alternatives you have to answer from)
        - tags (you can add several tags to each card so it can be found in several different decks but still only show up as many times as the interval specifies - regardless of deck)
        - correct (amount of correct answers by user)
        - incorrect (amount of incorrect answers by user)
        - groupAverage (The number of correct/incorrect answers for the group will sync so that you can find out how other people in the group have faired on that particular card)
        - lastAnswer (if last answer was right or wrong)
        - difficulty (user gets to rate the difficulty of the question - easy means the interval spacing will be increased 4 fold, medium means it will stay the same and hard means it will decrease the time 4 fold. There could also be a setting for too hard which will push it 3 months down the line in order to catch up on knowledge and not end up with a deck of really hard cards)
        - interval (the current interval at which the card will appear for the user)
        - rating (let each user rate the card and sync with the group)
- User
    - Each user gets to sync the cards from the groups they belong to. They then get a copy of that card with all the properties specified above but adapted to the user. When the user interacts with each card their feedback is then stored on that card.

The project will be open source and once it is functional I will contact the university and offer them to recommend it to more students. This is a perfect project to create to start showing off your skills as a developer.

### The Challenges

Other than the fact that I haven't written much code at all this summer and kinda sorta forgot a lot, I have never used Firebase in any of my previous apps and I have never really created a whole project of my own in Angular2 either. I know they work very well together so that is no problem. But I need to figure out how to host the API. Can I do that on Firebase? The budget is obviously minimal (none) so whatever I go for has to keep that in mind. *Update:* it seems as though I can't host the back end on firebase, only the static front end can be hosted there. So instead it seems I will be using Heroku.

### The Steps

First thing to do is to get the angular-cli to play along with me again. Next up is to create the github repo and add some planning documents to the wiki. After that comes the hacking.

### Conclusion

This project will offer me a few good challenges and chances to learn and adopt new skills. It also gives me something to show to future employers or contractors as proof of my abilities.