from rest_framework import routers
from .views import DraInnManglendeOrdViewSet

router = routers.DefaultRouter()
router.register('draInnManglendeOrd', DraInnManglendeOrdViewSet, 'draInnManglendeOrd')

urlpatterns = router.urls