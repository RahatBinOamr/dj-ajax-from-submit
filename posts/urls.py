from django.urls import path
from .views import  MainPostView,PostListJsonView


urlpatterns =[
  path('',MainPostView.as_view(), name='main_post'),
  path('posts/<int:num_post_view>',PostListJsonView.as_view(), name='post_list'),
]