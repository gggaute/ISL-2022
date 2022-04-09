from django.shortcuts import render
from dra_inn_manglende_ord.models import DraInnManglendeOrd
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from .serializer import DraInnManglendeOrdSerializer

'''
@author  Guri
This is the DraInnManglendeOrd view.
It uses viewSets for viewing and editing DraInnManglendeOrd instances. 
'''

# DraInnManglendeOrd Viewset
class DraInnManglendeOrdViewSet(viewsets.ModelViewSet):
    queryset = DraInnManglendeOrd.objects.all()
    permissions_classes = [ permissions.AllowAny ]
    serializer_class = DraInnManglendeOrdSerializer
    

class GetDraInnManglendeOrdView(viewsets.ModelViewSet):
    def get(self, pk):
        try:
            getDraInnManglendeOrd = DraInnManglendeOrd.objects.get(pk=pk)
        except DraInnManglendeOrd.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = DraInnManglendeOrdSerializer(getDraInnManglendeOrd)
        return Response(serializer.data)