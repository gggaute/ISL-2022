from rest_framework import routers
from .views import GetForstaelseView, ForstaelseViewSet

router = routers.DefaultRouter()

'''
@author Aksel, Guri
This is the urls for the forstaelse exercise. 
'''

# url for getting all forstaelse exercises
router.register('forstaelse', ForstaelseViewSet, 'forstaelse')
# url for getting a spesifik forstaelse exercise given by its id
router.register('forstaelse/<int:pk>', GetForstaelseView, 'forstaelsepk')

urlpatterns = router.urls