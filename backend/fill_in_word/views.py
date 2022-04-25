from django.shortcuts import render
from fill_in_word.models import FillInWord
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializer import FillInWordSerializer

'''
@author  Guri
This is the FillInWord view.
It uses viewSets for viewing and editing FillInWord instances. 
'''

# FillInWord Viewset
class FillInWordViewSet(viewsets.ModelViewSet):
    queryset = FillInWord.objects.all()
    permissions_classes = [ permissions.AllowAny ]
    serializer_class = FillInWordSerializer
    

class GetFillInWordView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getFillInWord = FillInWord.objects.get(pk=pk)
        except FillInWord.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = FillInWordSerializer(getFillInWord)
        return Response(serializer.data)