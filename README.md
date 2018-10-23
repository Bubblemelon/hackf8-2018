# hackf8-2018
Devpost repo for Hack F8

## [Community Events with AR](https://devpost.com/software/fghfghfghfh)


#### Links to FB Page Chat Bot:

[Prototype Facebook Page](https://www.facebook.com/DevC-Meetup-304462963421738/)   
[Messenger Bot Link](https://m.me/304462963421738)  

![AR Map Animation gif](https://media.giphy.com/media/1wohbFGVt6oRUvbeRt/giphy.gif)   

## Submission Background  

### Inspiration
Yeongrak Choi is a DevC (Facebook Developer Circles) lead in Seoul, Korea. He has had organised over 70 community events just not with DevC local events in Korea. He came to this hackathon with a goal of really wanting to help users to engage more easily and through different ways or medium. Cheryl has cool experiences with developing 3D games, and Yeonsoo is very eager to realize our software idea with beautiful designs.

Over our discussion on how we could utilize Facebook technology/features and its platform to help DevC communities and communities alike, we decided on accomplishing this in a unique way (i.e. a path less traveled), and settled on integrating augmented reality (AR). By using 3D visualisation we hope to encourage more interactivity among community individuals e.g. by making location information enjoyable for (physical) offline events. Overall increasing community participation (keep loyal individuals and attract new attendees) and the effect of making community events fun and unique.

### What it does
- To demonstrate how all kinds of communities could use the technologies we've used to make AR experiences to make their event unique and engaging.
- We complished this by using augmented reality to bridge offline community events with online event specific information.
  - A Visualization of where the event venue is through augmented reality.
  - Detailed visualization of where the event room is inside the event building through augmented reality.
  - An AR tool for finding empty seats in an event room via augmented reality technology.
- Placing these suite of AR tools inside a `Chatbot` (Facebook Messenger Platform), a one stop place for all event related information.
- See our [YouTube Demo](https://youtu.be/Wy8FfVngUgM)

### How we built it
- We implemented augmented reality using [Facebook AR Studio](https://developers.facebook.com/products/ar-studio).
- Connect our augmented reality experiences onto a chatbot in which we created [Facebook page as a prototype](https://www.facebook.com/DevC-Meetup-304462963421738/) via [Facebook developers](http://developers.facebook.com/).
- We defined very helpful use cases which could help participants (e.g. get their questions answered in a more interactive way) and to promote interactivity in offline community events (invoke exploration in participants), and realized those idea as chatbot prompts.

![Picture of our work on ARStudio](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/642/152/datas/gallery.jpg)

### Challenges we ran into
- `Facebook AR Studio` has many cool capabilities especially around making face animations/experiences. AR world interaction and
- The `Facebook Dating Feature` mentioned by Mark during the F8 keynote was really a teaser and we couldn't use it at all.
- Having both front and back cameras on for AR does not work (OS level permissions related).
- We weren't allowed early access to the Target Tracking API and had to find work arounds to demonstrate our ideas. This ideas will be full functional when these APIs and bugs in AR Studio gets fixed.
- Chatbots cannot not ask permission to use a user's front/back camera. In other words, chatbots can open another application within Facebook, not yet at least.

### Accomplishments that we're proud of
- Completing AR experiences.
- Chatting with Facebook people about our ideas and be surprised that they liked them and thought it would be cool to have it in beta.
- Staying up all night !
- Using tools we would have not used before.
- Working with an international team in an international environment.
- Not over eating ...

### What we learned
- AR is super approachable for beginners like us, which happened to our first time doing AR.
- AR Studio is relatively young and using Unity would have been more preferable.

### What's next for community-events-with-ar

- The release of [Target Tracking Capabilities](https://developers.facebook.com/blog/post/2018/03/12)    
### Extra Submission Summary about chosen theme i.e. Bridge on and offline experiences  

Although there are lots of local offline community events organized by many user group leaders, online information is not sufficient for participants to actively coming to community events. Augmented Reality (AR) visualizes objects in offline to smart devices, and smart devices are connected through online. We really think that AR is one of key technologies to bridge between offline and online experiences, and we implemented such bridge through chatbot - chatbot bridges between online and smart devices, and AR bridges between smart devices and offline objects. Our solution help to address current major question and answers with the following ideas:  

1. Utilising something intangible (AR) as something useful and not just for effects like making funny pictures.
2. To show that beginners like us have a low barrier of entry to learn AR and use it for the betterment of society, in this case our examples are specific to helping community circles but this could in other positive aspects.
3. We believe that AR is the bridge the real world with the online world.
