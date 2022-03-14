from rest_framework import routers
from .api import ForstaelseViewSet

router = routers.DefaultRouter()
router.register('forstaelse/<int:pk>', ForstaelseViewSet, 'forstaelse')

urlpatterns = router.urls