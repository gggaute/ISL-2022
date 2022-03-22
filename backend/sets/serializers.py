from rest_framework import serializers
from .models import Sets


"""
 @author Maja, Simen
 This is the serializer for the all the models related to exercise sets.
"""


class SetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sets
        fields = ('id', 'title', 'description',
                  'forstaelse1', 'forstaelse2', 'forstaelse3', 'forstaelse4', 'forstaelse5', 'forstaelse6',
                  'chat1', 'chat2', 'chat3', 'chat4', 'chat5', 'chat6',
                  'ryddeSetninger1', 'ryddeSetninger2', 'ryddeSetninger3', 'ryddeSetninger4', 'ryddeSetninger5', 'ryddeSetninger6',
                  'DraInnManglendeOrd1', 'DraInnManglendeOrd2', 'DraInnManglendeOrd3', 'DraInnManglendeOrd4', 'DraInnManglendeOrd5', 'DraInnManglendeOrd6',
                  'LåsOppMobil1', 'LåsOppMobil2', 'LåsOppMobil3', 'LåsOppMobil4', 'LåsOppMobil5', 'LåsOppMobil6')
