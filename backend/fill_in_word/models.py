from django.db import models
from distutils.command.upload import upload
from pyexpat import model

"""
 @author Synne
 This is the model for the fill_in_word exercise. It determines all the fields and the constraints.
 Each fill_in_word exercise may have up to 15 words in the sentence, but only 2 is required.
 The correctSolutionIndex points to which word of the 15 (index 0-14) given, that the user needs to fill in.
"""

class FillInWord(models.Model):
    correctSolutionIndex = models.IntegerField(default=1,blank=False)

    # Max 15-word sentences (for now)
    sentenceWord1 = models.TextField(max_length=20, blank=False)
    sentenceWord2 = models.TextField(max_length=20, blank=False)
    sentenceWord3 = models.TextField(max_length=20, blank=True)
    sentenceWord4 = models.TextField(max_length=20, blank=True)
    sentenceWord5 = models.TextField(max_length=20, blank=True)
    sentenceWord6 = models.TextField(max_length=20, blank=True)
    sentenceWord7 = models.TextField(max_length=20, blank=True)
    sentenceWord8 = models.TextField(max_length=20, blank=True)
    sentenceWord9 = models.TextField(max_length=20, blank=True)
    sentenceWord10 = models.TextField(max_length=20, blank=True)
    sentenceWord11 = models.TextField(max_length=20, blank=True)
    sentenceWord12 = models.TextField(max_length=20, blank=True)
    sentenceWord13 = models.TextField(max_length=20, blank=True)
    sentenceWord14 = models.TextField(max_length=20, blank=True)
    sentenceWord15 = models.TextField(max_length=20, blank=True)
    

    answerWord1 = models.TextField(max_length=20, blank=False)
    answerWord2 = models.TextField(max_length=20, blank=False)
    answerWord3 = models.TextField(max_length=20, blank=False)
    answerWord4 = models.TextField(max_length=20, blank=False)
    answerWord5 = models.TextField(max_length=20, blank=False)
    answerWord6 = models.TextField(max_length=20, blank=False)