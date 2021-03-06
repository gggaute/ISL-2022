from rest_framework import routers
from .views import GetComprehensionView, ComprehensionViewSet

router = routers.DefaultRouter()

'''
@author Aksel, Guri
These are the urls for the Comprehension exercise. 
'''

# url for getting all comprehension exercises
router.register('comprehension', ComprehensionViewSet, 'comprehension')
# url for getting a specific comprehension exercise given by its id
router.register('comprehension/<int:pk>', GetComprehensionView, 'comprehensionpk')

urlpatterns = router.urls