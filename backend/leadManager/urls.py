# Imports
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from core.views import front
from django.conf import settings
from django.conf.urls.static import static

'''
@auhtor Aksel, Guri
This is the controler for the differents apps in the django backend. 
It creates the complete url path by creating a url pattern consisting of api/ and the relevant app url.
'''

urlpatterns = [
    path("", front, name="front"),
    path("sets", front, name="sets"),
    path('api/', include('forstaelse.urls')),
    path('api/', include('chat.urls')),
    path('api/', include('rydde_setninger.urls')),
    path('api/', include('sets.urls')),
    path("api/", include('unlock.urls')),
    path("api/", include('dra_inn_manglende_ord.urls')),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)