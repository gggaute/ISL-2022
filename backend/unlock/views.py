from django.shortcuts import render

from unlock.models import LåsOppMobil
from rest_framework import viewsets, permissions
from .serializer import LåsOppMobilSerializer

# Create your views here.

class LåsOppMobilViewSet(viewsets.ModelViewSet):
    queryset = LåsOppMobil.objects.all()
    permissions_classes = [ permissions.AllowAny ]
    serializer_class = LåsOppMobilSerializer
    
