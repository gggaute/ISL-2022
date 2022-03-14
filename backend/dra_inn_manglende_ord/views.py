from django.shortcuts import render
from dra_inn_manglende_ord.models import DraInnManglendeOrd
from rest_framework import viewsets, permissions
from .serializer import DraInnManglendeOrdSerializer

# Create your views here.

class DraInnManglendeOrdViewSet(viewsets.ModelViewSet):
    queryset = DraInnManglendeOrd.objects.all()
    permissions_classes = [ permissions.AllowAny ]
    serializer_class = DraInnManglendeOrdSerializer
    
