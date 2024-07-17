from django.urls import path
from .views import photo_add_view
urlpatterns =[
  path('photos/',photo_add_view,name='main-view')
]