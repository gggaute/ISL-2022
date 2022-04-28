# Imports
from django.db import models


"""
 @author Group 2021
 Revised by Aksel, Guri
 This is the model for the comprehension exercise. It determines all the fields and the constraints.
 Each comprehension exercise consists of one task.
"""


class Comprehension(models.Model):
    ANSWER_STATE = (
        ('true', 'true'),
        ('false', 'false')
    )

    answer = models.CharField(max_length=5, choices=ANSWER_STATE)
    chat = models.CharField(max_length=1000)
    question = models.CharField(max_length=1000)
    explanation = models.CharField(max_length=1000)