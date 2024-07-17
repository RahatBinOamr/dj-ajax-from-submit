from django.views.generic import TemplateView,View
from django.http import JsonResponse
from .models import Post
# Create your views here.


class MainPostView(TemplateView):
  template_name ='posts/posts.html'


class PostListJsonView(View):
  def get(self, request, *args, **kwargs):
    upper = kwargs.get('num_post_view')
    lower = upper - 4
    posts = list(Post.objects.values()[lower:upper])
    post_size = len(Post.objects.all())
    max_size = True if upper >= post_size else False 
    return JsonResponse({'data': posts,'max':max_size},safe=False)