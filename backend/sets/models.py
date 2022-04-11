from django.db import models
from forstaelse.models import Forstaelse
from chat.models import Chat
from rydde_setninger.models import RyddeSetninger
from unlock.models import LåsOppMobil
from dra_inn_manglende_ord.models import DraInnManglendeOrd


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
    forstaelse1 = models.ForeignKey(
        Forstaelse, on_delete=models.SET_NULL, related_name='forstaelse1', blank=True, null=True)
    forstaelse2 = models.ForeignKey(
        Forstaelse, on_delete=models.SET_NULL, related_name='forstaelse2', blank=True, null=True)
    forstaelse3 = models.ForeignKey(
        Forstaelse, on_delete=models.SET_NULL, related_name='forstaelse3', blank=True, null=True)
    forstaelse4 = models.ForeignKey(
        Forstaelse, on_delete=models.SET_NULL, related_name='forstaelse4', blank=True, null=True)
    forstaelse5 = models.ForeignKey(
        Forstaelse, on_delete=models.SET_NULL, related_name='forstaelse5', blank=True, null=True)
    forstaelse6 = models.ForeignKey(
        Forstaelse, on_delete=models.SET_NULL, related_name='forstaelse6', blank=True, null=True)


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

    ryddeSetninger1 = models.ForeignKey(
        RyddeSetninger, on_delete=models.SET_NULL, related_name='ryddeSetninger1', blank=True, null=True)
    ryddeSetninger2 = models.ForeignKey(
        RyddeSetninger, on_delete=models.SET_NULL, related_name='ryddeSetninger2', blank=True, null=True)
    ryddeSetninger3 = models.ForeignKey(
        RyddeSetninger, on_delete=models.SET_NULL, related_name='ryddeSetninger3', blank=True, null=True)
    ryddeSetninger4 = models.ForeignKey(
        RyddeSetninger, on_delete=models.SET_NULL, related_name='ryddeSetninger4', blank=True, null=True)
    ryddeSetninger5 = models.ForeignKey(
        RyddeSetninger, on_delete=models.SET_NULL, related_name='ryddeSetninger5', blank=True, null=True)
    ryddeSetninger6 = models.ForeignKey(
        RyddeSetninger, on_delete=models.SET_NULL, related_name='ryddeSetninger6', blank=True, null=True)

    LåsOppMobil1 = models.ForeignKey(
        LåsOppMobil, on_delete=models.SET_NULL, related_name='LåsOppMobil1', blank=True, null=True)
    LåsOppMobil2 = models.ForeignKey(
        LåsOppMobil, on_delete=models.SET_NULL, related_name='LåsOppMobil2', blank=True, null=True)
    LåsOppMobil3 = models.ForeignKey(
        LåsOppMobil, on_delete=models.SET_NULL, related_name='LåsOppMobil3', blank=True, null=True)
    LåsOppMobil4 = models.ForeignKey(
        LåsOppMobil, on_delete=models.SET_NULL, related_name='LåsOppMobil4', blank=True, null=True)
    LåsOppMobil5 = models.ForeignKey(
        LåsOppMobil, on_delete=models.SET_NULL, related_name='LåsOppMobil5', blank=True, null=True)
    LåsOppMobil6 = models.ForeignKey(
        LåsOppMobil, on_delete=models.SET_NULL, related_name='LåsOppMobil6', blank=True, null=True)

    DraInnManglendeOrd1 = models.ForeignKey(
        DraInnManglendeOrd, on_delete=models.SET_NULL, related_name='DraInnManglendeOrd1', blank=True, null=True)
    DraInnManglendeOrd2 = models.ForeignKey(
        DraInnManglendeOrd, on_delete=models.SET_NULL, related_name='DraInnManglendeOrd2', blank=True, null=True)
    DraInnManglendeOrd3 = models.ForeignKey(
        DraInnManglendeOrd, on_delete=models.SET_NULL, related_name='DraInnManglendeOrd3', blank=True, null=True)
    DraInnManglendeOrd4 = models.ForeignKey(
        DraInnManglendeOrd, on_delete=models.SET_NULL, related_name='DraInnManglendeOrd4', blank=True, null=True)
    DraInnManglendeOrd5 = models.ForeignKey(
        DraInnManglendeOrd, on_delete=models.SET_NULL, related_name='DraInnManglendeOrd5', blank=True, null=True)
    DraInnManglendeOrd6 = models.ForeignKey(
        DraInnManglendeOrd, on_delete=models.SET_NULL, related_name='DraInnManglendeOrd6', blank=True, null=True)

