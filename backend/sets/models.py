from django.db import models
from comprehension.models import Comprehension
from chat.models import Chat
from sort_sentence.models import SortSentence
from unlock.models import Unlock
from fill_in_word.models import FillInWord


"""
 @author Maja, Simen
 This file contains all the models related to exercise sets. 
"""


"""
 This is the model for the exercise set. It determines all the fields and the constraints.
 Each exercise set may have up to 5 exercises of each type.
 In addition to the exercise-specific fields, each exercise set needs an owner, title and description.
"""
class Sets(models.Model):
    title = models.CharField(max_length=50)
    comprehension1 = models.ForeignKey(
        Comprehension, on_delete=models.SET_NULL, related_name='comprehension1', blank=True, null=True)
    comprehension2 = models.ForeignKey(
        Comprehension, on_delete=models.SET_NULL, related_name='comprehension2', blank=True, null=True)
    comprehension3 = models.ForeignKey(
        Comprehension, on_delete=models.SET_NULL, related_name='comprehension3', blank=True, null=True)
    comprehension4 = models.ForeignKey(
        Comprehension, on_delete=models.SET_NULL, related_name='comprehension4', blank=True, null=True)
    comprehension5 = models.ForeignKey(
        Comprehension, on_delete=models.SET_NULL, related_name='comprehension5', blank=True, null=True)
    comprehension6 = models.ForeignKey(
        Comprehension, on_delete=models.SET_NULL, related_name='comprehension6', blank=True, null=True)


    chat1 = models.ForeignKey(
        Chat, on_delete=models.SET_NULL, related_name='chat1', blank=True, null=True)
    chat2 = models.ForeignKey(
        Chat, on_delete=models.SET_NULL, related_name='chat2', blank=True, null=True)
    chat3 = models.ForeignKey(
        Chat, on_delete=models.SET_NULL, related_name='chat3', blank=True, null=True)
    chat4 = models.ForeignKey(
        Chat, on_delete=models.SET_NULL, related_name='chat4', blank=True, null=True)
    chat5 = models.ForeignKey(
        Chat, on_delete=models.SET_NULL, related_name='chat5', blank=True, null=True)
    chat6 = models.ForeignKey(
        Chat, on_delete=models.SET_NULL, related_name='chat6', blank=True, null=True)

    sortSentence1 = models.ForeignKey(
        SortSentence, on_delete=models.SET_NULL, related_name='sortSentence1', blank=True, null=True)
    sortSentence2 = models.ForeignKey(
        SortSentence, on_delete=models.SET_NULL, related_name='sortSentence2', blank=True, null=True)
    sortSentence3 = models.ForeignKey(
        SortSentence, on_delete=models.SET_NULL, related_name='sortSentence3', blank=True, null=True)
    sortSentence4 = models.ForeignKey(
        SortSentence, on_delete=models.SET_NULL, related_name='sortSentence4', blank=True, null=True)
    sortSentence5 = models.ForeignKey(
        SortSentence, on_delete=models.SET_NULL, related_name='sortSentence5', blank=True, null=True)
    sortSentence6 = models.ForeignKey(
        SortSentence, on_delete=models.SET_NULL, related_name='sortSentence6', blank=True, null=True)

    unlock1 = models.ForeignKey(
        Unlock, on_delete=models.SET_NULL, related_name='unlock1', blank=True, null=True)
    unlock2 = models.ForeignKey(
        Unlock, on_delete=models.SET_NULL, related_name='unlock2', blank=True, null=True)
    unlock3 = models.ForeignKey(
        Unlock, on_delete=models.SET_NULL, related_name='unlock3', blank=True, null=True)
    unlock4 = models.ForeignKey(
        Unlock, on_delete=models.SET_NULL, related_name='unlock4', blank=True, null=True)
    unlock5 = models.ForeignKey(
        Unlock, on_delete=models.SET_NULL, related_name='unlock5', blank=True, null=True)
    unlock6 = models.ForeignKey(
        Unlock, on_delete=models.SET_NULL, related_name='unlock6', blank=True, null=True)

    fillInWord1 = models.ForeignKey(
        FillInWord, on_delete=models.SET_NULL, related_name='fillInWord1', blank=True, null=True)
    fillInWord2 = models.ForeignKey(
        FillInWord, on_delete=models.SET_NULL, related_name='fillInWord2', blank=True, null=True)
    fillInWord3 = models.ForeignKey(
        FillInWord, on_delete=models.SET_NULL, related_name='fillInWord3', blank=True, null=True)
    fillInWord4 = models.ForeignKey(
        FillInWord, on_delete=models.SET_NULL, related_name='fillInWord4', blank=True, null=True)
    fillInWord5 = models.ForeignKey(
        FillInWord, on_delete=models.SET_NULL, related_name='fillInWord5', blank=True, null=True)
    fillInWord6 = models.ForeignKey(
        FillInWord, on_delete=models.SET_NULL, related_name='fillInWord6', blank=True, null=True)

