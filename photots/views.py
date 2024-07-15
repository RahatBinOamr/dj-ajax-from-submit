from django.shortcuts import render
from django.http import JsonResponse
from .forms import  PhotoForm
# Create your views here.

def photo_add_view(request, *args, **kwargs):
    form = PhotoForm(request.POST or None, request.FILES or None)
    data = {}
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        if form.is_valid():
            form.save()
            data['name'] = form.cleaned_data.get('name')
            data['description'] = form.cleaned_data.get('description')
            data['status'] = 'ok'
            return JsonResponse(data)
    context = {'form': form}
    return render(request, 'photos/main.html', context)