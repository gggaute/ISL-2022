# Imports
from django.db import models


"""
 @author Phajsi, Julie
 @revised by aksel
 This is the model for the rydde_setninger exercise. It determines all the fields and the constraints.
 Each rydde_setninger exercise may have up to 15 words, but have to have at least three. 
"""


class RyddeSetninger(models.Model):
    
    # Word classes that is chosen for each word in order to create colour scheme
    WORD_CLASSES = (
        ('sub', 'Subjekt'),
        ('ob', 'Objekt/Predikativ'),
        ('adv', 'Adverbial'),
        ('set', 'Setningsadverbial'),
        ('conj', 'Konjuksjon'),
        ('subj', 'Subjuksjon'),
        ('fin', 'Finitt verb'),
        ('infin', 'Infinitt verb'),
    )


    word1 = models.CharField(max_length=40)
    wordClass1 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word2 = models.CharField(max_length=40)
    wordClass2 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word3 = models.CharField(max_length=40)
    wordClass3 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word4 = models.CharField(max_length=40, blank=True)
    wordClass4 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word5 = models.CharField(max_length=40, blank=True)
    wordClass5 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word6 = models.CharField(max_length=40, blank=True)
    wordClass6 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word7 = models.CharField(max_length=40, blank=True)
    wordClass7 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word8 = models.CharField(max_length=40, blank=True)
    wordClass8 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word9 = models.CharField(max_length=40, blank=True)
    wordClass9 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word10 = models.CharField(max_length=40, blank=True)
    wordClass10 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word11 = models.CharField(max_length=40, blank=True)
    wordClass11 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word12 = models.CharField(max_length=40, blank=True)
    wordClass12 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word13 = models.CharField(max_length=40, blank=True)
    wordClass13 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word14 = models.CharField(max_length=40, blank=True)
    wordClass14 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)

    word15 = models.CharField(max_length=40, blank=True)
    wordClass15 = models.CharField(
        max_length=12, choices=WORD_CLASSES, blank=True)
