from django.db import models
from distutils.command.upload import upload
from pyexpat import model

# Create your models here.

class DraInnManglendeOrd(models.Model):
    correctSolution = models.TextField(max_length=30, blank=False);


    # Max 15-word sentences (for now)
    sentenceWord1 = models.TextField(max_length=20, blank=False)
    sentenceWord2 = models.TextField(max_length=20, blank=False)
    sentenceWord3 = models.TextField(max_length=20, blank=False)
    sentenceWord4 = models.TextField(max_length=20, blank=False)
    sentenceWord5 = models.TextField(max_length=20, blank=False)
    sentenceWord6 = models.TextField(max_length=20, blank=False)
    sentenceWord7 = models.TextField(max_length=20, blank=False)
    sentenceWord8 = models.TextField(max_length=20, blank=False)
    sentenceWord9 = models.TextField(max_length=20, blank=False)
    sentenceWord10 = models.TextField(max_length=20, blank=False)
    sentenceWord11 = models.TextField(max_length=20, blank=False)
    sentenceWord12 = models.TextField(max_length=20, blank=False)
    sentenceWord13 = models.TextField(max_length=20, blank=False)
    sentenceWord14 = models.TextField(max_length=20, blank=False)
    sentenceWord15 = models.TextField(max_length=20, blank=False)
    

    answerWord1 = models.TextField(max_length=20, blank=False)
    answerWord2 = models.TextField(max_length=20, blank=False)
    answerWord3 = models.TextField(max_length=20, blank=False)
    answerWord4 = models.TextField(max_length=20, blank=False)
    answerWord5 = models.TextField(max_length=20, blank=False)
    answerWord6 = models.TextField(max_length=20, blank=False)