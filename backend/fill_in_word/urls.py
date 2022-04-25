from rest_framework import routers
from .views import FillInWordViewSet, GetFillInWordView

router = routers.DefaultRouter()
router.register('fill_in_word', FillInWordViewSet, 'fillInWord')
router.register('fill_in_word/<int:pk>', GetFillInWordView, 'fillInWordpk')

urlpatterns = router.urls