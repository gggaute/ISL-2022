from rest_framework import routers
from .api import GetForstaelseView, ForstaelseViewSet

router = routers.DefaultRouter()

router.register('forstaelse', ForstaelseViewSet, 'forstaelse')
router.register('forstaelse/<int:pk>', GetForstaelseView, 'forstaelsepk')

urlpatterns = router.urls