
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api/', include('forstaelse.urls')),
    path('api/', include('chat.urls')),
    path('api/', include('rydde_setninger.urls')),
    path('api/', include('sets.urls')),
    path("api/", include('unlock.urls')),
    path("api/", include('dra_inn_manglende_ord.urls')),
]

"""urlpatterns += [ re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]"""


"""path('admin/', admin.site.urls),
path('api/', include('chat.urls')),
path('api/', include('sets.urls')),
path('api/', include('rydde_setninger.urls')),
path('admin/', admin.site.urls),"""