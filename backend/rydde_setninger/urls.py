from rest_framework import routers
from .api import RyddeSetningerViewSet

router = routers.DefaultRouter()
router.register('RyddeSetninger/<int:pk>', RyddeSetningerViewSet, 'RyddeSetninger')

urlpatterns = router.urls