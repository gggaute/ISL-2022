from rest_framework import routers
from .views import DraInnManglendeOrdViewSet, GetDraInnManglendeOrdView

router = routers.DefaultRouter()
router.register('draInnManglendeOrd', DraInnManglendeOrdViewSet, 'draInnManglendeOrd')
router.register('draInnManglendeOrd/<int:pk>', GetDraInnManglendeOrdView, 'draInnManglendeOrdpk')

urlpatterns = router.urls