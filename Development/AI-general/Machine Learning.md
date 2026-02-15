


ML operations involve: 
* a training phase where data is fed to the algorithm in order to output a model
* An application phase where a seperate program can load the model file and use the learned rules to make predictions, classify, or generate sequences of tokens (text).  Tokens are related to only text-oriented models

ML components involve: 
* an algorhythm (a set of instructions) is the code that converts the image’s pixel data into a numberical representation.  We provide labeled and unlabeled sets for example.  The algo then learns the rules or mathematical boundary that seperates the numerical representations of one category from another.  These learned rules, boundaries or patterns, represented internally as those sets of numbers discussed are the trained model. This is used later to decide whether future image, also converted into numbers, which category it belongs to.  
* Output: a trained model - a collection of learned rules or patterns often stored as large sets of numbers.  It thinks of every rule for a situation, looking for important patterns, relationships, structures,  or decision making processes.  This model is saved to files for later used. 
* Input: lots of data 

Algorithm Examples - 
* Explicit rules: if image Has ears, whiskers, and fur, it is a cat.
* ML: show many labeled cat and non-cat pictures while algorithm adjusts its rules/patterns.

Steps 
* Training: For knn, the model is just the data points (numbers drawn from labeled examples)
* Prediction: get a new unlabeled datapoint (converted image), measure the distance between the new datapoints and every single data point stored during training.  Find the closest number set, check the other numbers of those neighbors.  Assign the label that is most common among K neighbors.  

Steps 2
if we had 10 labeled images, 
we’d convert these into 10 sets of numbers, 
which we’d run through the algorithm,
which would then create a model, 
which is a new set of numbers.

Whether this new set is larger depends on the complexity of the model type or the initial numbers
Model is the output, 
thE model architecture/type is chosen before he learning starts - its the type of tool you’re going to build Examples: linear regression model, decision tree, neural network.  These are model architectures or model types. 
Learning algo is the procedure the cpu uses to adjust the numbers within the chosen model architecture to make the model fit the training data.  A Gradient Descient is a common algo used to train neural networks.  It iterates tweaks on the model’s numbers.  The algo takes the architecture and teh training data and performs the learning part. 

Trained model is the final output.  It’s the chosen model architecture plus the specific numbers that the learning algorithm figured out during the training using the data. 
Model architecture is teh blueprint of the Ouse.  One room cabin or two. 
Learning algo - construction rules the builders follow - how to lay bricks, cut wood, the style or technique. 
Training data - the wood, bricks
Trained model - the house. 

Gemini 2.5 Pro vs 2.0 are different trained models. 
they might share the same architectural concepts and research heritage, each might have been trainees on better datasets, using improved algorithms, model architectures, and more finely tuned.  


How do i learn something? 
I look at it and compare it to what i already know. 
I notice how it does and does not fit my categories. 
I associate the new experience with a category, and if necessary a sub-category, or potential create a new sub-category.

Kinds of algorhtims (kinds of learning). 

[[Learning Paradigms]] - These describe the *type* of learning task based on the data available:


[[Learning Techniques]] - These are *methods* used **within** Machine Learning, often applicable across different paradigms:



