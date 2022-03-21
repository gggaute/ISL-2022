from django.db import models


"""
 @author Maja, Even, Julie, Aksel
 This is the model for the chat exercise. It determines all the fields and the constraints.
 Each chat exercise may have up to 3 tasks, but only 1 is required.
"""


class Chat(models.Model):
    sendericon = models.CharField(max_length=100, blank=True)
    receivericon = models.CharField(max_length=100, blank=True)

    chatquestion1 = models.CharField(max_length=1000)
    answer11 = models.CharField(max_length=1000)
    answer12 = models.CharField(max_length=1000)
    correctanswer1 = models.CharField(max_length=1000)

    chatquestion2 = models.CharField(max_length=1000, blank=True)
    answer21 = models.CharField(max_length=1000, blank=True)
    answer22 = models.CharField(max_length=1000, blank=True)
    correctanswer2 = models.CharField(max_length=1000, blank=True)

    chatquestion3 = models.CharField(max_length=1000, blank=True)
    answer31 = models.CharField(max_length=1000, blank=True)
    answer32 = models.CharField(max_length=1000, blank=True)
    correctanswer3 = models.CharField(max_length=1000, blank=True)
