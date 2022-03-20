from django.db import models


"""
 @author Phajsi, Julie, Aksel
 This is the model for the rydde_setninger exercise. It determines all the fields and the constraints.
 Each rydde_setninger exercise may have up to 3 tasks, but only 1 is required.
"""


class RyddeSetninger(models.Model):
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
