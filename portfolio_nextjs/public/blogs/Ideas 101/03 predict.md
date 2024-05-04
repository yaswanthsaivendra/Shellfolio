# Prediction app

App where predictions of people can be stored. Later they can release their predictions whenever those predictions come true so that they can prove whatever they said is actually happening and they predicted it before. 

I want to implement this on blockchain , so they cannot actually tamper with them.



#### OpenAI : verifying of prediction process is difficult.<br>
#### Mysoln : 

I have a solution for this,
lets say we are having two types of predictions
1. blocked predicitons
these are like registered predicitions which will come true , some day in future
2. released predictions
these are the predictions which are actually came true and these will be released by the predictor himself and once they are released people in our platform will vote on them to prove the prediciton as correct and it provides an incentive to our predcitor.


#### OpenAI :
Your solution for verifying the accuracy of predictions on your platform is a good one! By having two categories of predictions (blocked and released), you can allow people to make predictions about future events without immediately verifying their accuracy. This could encourage more people to make predictions, as they would not need to worry about immediately proving the accuracy of their predictions.

As you mentioned, allowing people to vote on released predictions could also help to verify their accuracy. You could consider implementing a system where the accuracy of a released prediction is determined by the percentage of votes it receives. For example, if a released prediction receives a majority of votes in favor of it being accurate, it could be considered verified.

You could also consider adding other verification mechanisms to your platform, such as expert review or fact-checking. This could help to further increase the credibility of released predictions and build trust in your platform.


#### MYquesn : 
do u know if there 's such a platform or company exist related to this idea? 
#### OPenAI :

There are a number of companies and platforms that allow users to make predictions about various topics, including the future. However, I am not aware of any specific platforms that use blockchain technology to store and verify the accuracy of predictions in the way you have described.

One company that allows users to make and track predictions is PredictIt, a political prediction market platform. PredictIt allows users to buy and sell shares in the outcome of political events, such as elections, and the prices of these shares are determined by the perceived likelihood of the event occurring. However, PredictIt does not use blockchain technology and does not have a mechanism for users to release their predictions and have them verified by other users.

Another company that allows users to make predictions is Augur, a decentralized prediction market platform built on the Ethereum blockchain. Augur allows users to create and trade on the outcome of any event, but it does not have a system for releasing and verifying predictions in the way you have described.




#### Myquesn :
ok, what will be the flaws in this idea?
#### OpenAI: 
As with any new product or service, it is important to carefully consider the potential flaws or challenges that your app may face. Here are a few potential challenges that you may encounter with a blockchain-based prediction platform:

Difficulty in verifying the accuracy of predictions: As I mentioned earlier, one potential challenge with your app idea may be verifying the accuracy of predictions made by users. Depending on the complexity and specificity of the prediction, it may be difficult to determine whether it has come true or not.

Difficulty in building trust and credibility: In order for your app to be successful, you will need to build trust and credibility with your users. This may be difficult if users are skeptical about the accuracy of predictions made on the platform, or if they are unsure about how to interpret or use the predictions.

Competition with existing prediction platforms: There are already a number of prediction platforms available, such as PredictIt and Augur, which may make it difficult for your app to differentiate itself and attract users.

Difficulty in attracting and retaining users: Building a successful app often requires attracting and retaining a large user base. This may be challenging if users do not see value in your app or if they do not find it useful enough to continue using it. 


### The ML thing

we will be having categories for predictions and based upon the category , when a prediction is released to public , our ml model will compare the prediction with the sources of information like news articles and other info based upon category. Based upon it it will promote the predictions to show high up in the feeds.(something like ML score will be given to each prediction).

