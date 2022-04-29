from rest_framework import routers
from .views import FillInWordViewSet, GetFillInWordView

router = routers.DefaultRouter()

'''
@author Synne, Guri
These are the urls for the FillInWord exercise.
'''

# url for getting all fill_in_word exercises
router.register('fill_in_word', FillInWordViewSet, 'fillInWord')
# url for getting a specific fill_in_word exercise given by its id
router.register('fill_in_word/<int:pk>', GetFillInWordView, 'fillInWordpk')

urlpatterns = router.urls