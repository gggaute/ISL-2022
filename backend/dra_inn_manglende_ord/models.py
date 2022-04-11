from django.db import models
from distutils.command.upload import upload
from pyexpat import model

# Create your models here.

class DraInnManglendeOrd(models.Model):
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