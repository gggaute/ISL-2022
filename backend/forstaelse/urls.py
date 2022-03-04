from rest_framework import routers
from .api import ForstaelseViewSet

router = routers.DefaultRouter()
router.register('api/forstaelse', ForstaelseViewSet, 'forstaelse')

urlpatterns = router.urls