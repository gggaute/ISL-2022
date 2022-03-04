from rest_framework import routers
from .api import RyddeSetningerViewSet

router = routers.DefaultRouter()
router.register('api/RyddeSetninger', RyddeSetningerViewSet, 'RyddeSetninger')

urlpatterns = router.urls