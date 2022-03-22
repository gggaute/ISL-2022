from distutils.command.upload import upload
from pyexpat import model
from django.db import models

# Create your models here.

class LåsOppMobil(models.Model):
    solutionImage = models.ImageField(upload_to='images/')
    correctSolution = models.CharField(max_length=9, blank=False)
    
    letter1 = models.CharField(max_length=1, blank=False)
    letter2 = models.CharField(max_length=1, blank=False)
    letter3 = models.CharField(max_length=1, blank=False)
    letter4 = models.CharField(max_length=1, blank=False)
    letter5 = models.CharField(max_length=1, blank=False)
    letter6 = models.CharField(max_length=1, blank=False)
    letter7 = models.CharField(max_length=1, blank=False)
    letter8 = models.CharField(max_length=1, blank=False)
    letter9 = models.CharField(max_length=1, blank=False)

