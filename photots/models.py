from django.db import models

# Create your models here.
class Photo(models.Model):
  name = models.CharField(max_length=100)
  description = models.TextField()
  image = models.ImageField(upload_to='images')


  def __str__(self):
    return str(self.name)




