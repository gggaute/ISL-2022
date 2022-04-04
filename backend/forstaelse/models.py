from django.db import models


"""
 @author Phajsi, Simen, Aksel
 This is the model for the forstaelse exercise. It determines all the fields and the constraints.
 Each forstaelse exercise may have up to 3 tasks, but only 1 is required.
"""


class Forstaelse(models.Model):
    ANSWER_STATE = (
        ('true', 'true'),
        ('false', 'false')
    )

    answer = models.CharField(max_length=5, choices=ANSWER_STATE)
    chat = models.CharField(max_length=1000)
    question = models.CharField(max_length=1000)
    explanation = models.CharField(max_length=1000)