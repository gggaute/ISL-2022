from rest_framework import routers
from .api import GetRyddeSetningerView, RyddeSetningerViewSet

router = routers.DefaultRouter()

router.register('rydde_setninger', RyddeSetningerViewSet, 'RyddeSetninger')
router.register('rydde_setninger/<int:pk>', GetRyddeSetningerView, 'RyddeSetningerpk')

urlpatterns = router.urls