from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('forstaelse.urls')),
    path('', include('chat.urls')),
    path('', include('rydde_setninger.urls')),
]


"""path('admin/', admin.site.urls),
path('api/', include('chat.urls')),
path('api/', include('sets.urls')),
path('api/', include('rydde_setninger.urls')),
path('admin/', admin.site.urls),"""