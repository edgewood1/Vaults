Points to:
[[Discriminative]] - aka conditional models - can be used for classification tasks (model trained to classify inputs into predefined categories, eg, spam email filter classifies emails as either spam or not spam based on features like keywords, sender info, and email structure. Overall, used for classification and prediction: image classification and object detection (CNNs), NLP - this analyzes langauge, and how is it differ from generative? 
- learn from the relationship between labeled of data points,
- Can classify points (fraud vs non fraud). 
- Label picture: dogs, and cats - a DM will learn from the label, and if you submit a new photo, it will predict a label for new photo. 
- If output is number, classification (X or not X), or probability. 

[[Generative]] - focus is on creating something new, such as images, text, and music. It understands underlying patterns and distributions of data.  It creates new data that’s similar to the data it learned from.  Overall, used for creative and synthetic tasks: text and image generation / summaries, data augmentation and anomaly,
- learn about the patterns in training data, 
- When they recieve text input, they generate something new based on patterns. 
- Pictures are not labeled, so g m looks for patterns. 
- When ask to generate dog, it creates a total new image based on patterns learned. 
- Output is natural language, image, audio.  
- Chat-gpt: text-text
- Mid journey, Dalle: text-image models
- Text-video: google-image-video, cog-video, make-a-video.
- Text-to-3D: shape-E model
- Text-task: perform a specific task.  Summarize unread emails. 



[[Large language models]] - 
* not the same as GenAI
* Are pre-trained with large set of data then fie-tuned for specific purposes. 
* A dog can be trained to sit, down, stay, he’s a good, but to be a police dog, they need more training for specific goal.  
* LLM is pre-trained for text-classification, question answering, document summary, text-generation, then using smaller data-sets, they are fine-tuned to solve specific problems in retain, finance, healthcare, entertainment. 
* Hospital uses a pre-trained LLM from google, and fine-tunes LLM using its medical-specific data to improve diagnostic accuracy.  
* Google spends billions develop general purpose LLM a then sell those LLM to smaller institutions who have domain specific data sets to fine-tune those models.  

Deep learning is a type of machine learning that uses artificial neural network.  Layers of nodes and neurons.  Input, hidden, output layers.  
Enables semi-supervised learning.  DLM trained on a little labeled data and lots of unlabeled data.  Uses the small labeled data used to learn the basic concepts of the task, apply the learning to the remaining unlabeled data, then model makes predictions on future abstractions.
Two k)
- 
- 

See Kanerika Inc Generative Vs Discriminative in Medium.
